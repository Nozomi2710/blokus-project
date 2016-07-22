<?php
require('../model/modelClass.php');
session_start();


/*********************************************************************
建構登入狀態
__construct()  
// *沒有參數→有SESSION:登入了/沒有SESSION→路人
// *兩個參數→登入要求
command($commandInfo)
----->$commandInfo($args)用輸入的參數列呼叫私有方法
|________
        |---->editInfo($args)                                                   //only-pass
        |       |---->editUserInfo($userId,$userName,$userEmail)
        |---->findInfo($args)                                                   //only-un-pass
        |       |---->checkUserAccount($userAccount,$userEmail)
        |       |---->resetPassWord($userId,$userPWD_MD5)
        |---->feedback($args)
        |       |---->addFeedback($fbCorF,$userId,$fbType,$fbSubType,$fbTitle,$fbContent)
        |---->search($args)
        |       |---->immediatelySearch($userAccountPart)
        |---->getInfo($args)
        |       |---->getUserInfo($userAccount,$self)
        |---->signUp($args)                                                     //only-un-pass
        |       |---->addUser($userAccount,$userName,$userPWD_MD5,$userEmail)
        |---->logout()                                                          //only-pass
__destruct()

/*********************************************************************/

class controller{
    
    public $userstatus='un-pass';
    protected $level='unset';
    protected $userAccount='unset';
    private $userPassWord='unset';
    
    function __construct(){//0=status,1=Account,2=pwd
           $args = func_get_args();//要獲取所有參數不要忘記這個function!!
           
           /*********************************************************************/
           //   在construct中不要使用return，畢竟物件就是物件，不能接收return的值
           /*********************************************************************/
           //F是外層if，f是內層if
           
           if(!isset($args[0]) && !isset($args[1]))                     //F.如果第一個和第二個參數沒有設定的話(沒有帳號密碼)
           {
                if(!isset($_SESSION['userId']))                         //f.也沒有設定SESSION(沒有目前使用者狀態)
                    $this->level=0;
                else if(isset($_SESSION['userId']))                     //f.有設定SESSION(已經登入過，略過登入步驟)
                    {
                    $this->level=1;
                    $this->userstatus='pass';
                        }
                else                                                    //f.給奇怪的參數(亂下指令給control不可原諒)
                    $this->userstatus="unknown fail!";
           }
           else{                                                        //F.有設定第一個第二個參數的情況(準備登入狀態)
               $this->userAccount=$args[0];
               $this->userPWD=$args[1];
               
               $login = new model();//建立模組物件
               $loginResult=$login->userLogin($this->userAccount,$this->userPWD);//物件的物件指來指去~
               
                    if($loginResult!=false&&$loginResult!="unknown fail!")//f.在不出錯的情況下會回傳陣列
                    {
                        $this->userPWD=NULL;//只需要這一次的密碼，馬上清掉!
                        $this->userstatus='pass';
                        $this->level=1;
                        
                        $_SESSION['userId']      = $loginResult['userId'];
                        $_SESSION['gameId']      = $loginResult['gameId'];
                        $_SESSION['userAccount'] = $loginResult['userAccount'];
                        
                        //把陣列回傳給呼叫的.php
                        //下次建立物件時應該是有登入的狀態，第一個參數應該要是true
                    }
                    else if($loginResult==false)//密碼或帳號錯了
                        $this->userstatus='false';
                    else
                        $this->userstatus="unknown";
                        //回傳錯誤字串(不知名錯誤)
                        
                    
               }
        }//優先讀到ID/密碼+login，橫豎我執行命令的時候也要判斷使用者是否登入，登入就跟construct一起寫
        
        
    function command($commandInfo){                                     
        $args = func_get_args();                                        
        $result = $this->$commandInfo($args);                           //call function is no problem
        return $result;
        
    }    
    function __destruct(){
        
        
        //記得把事件紀錄下來
    }
    /**********************to message 然後重導網頁***********************/
    //這一區可以放心return
    // 
    //只有pass可以做的事情
    /********************************************************************/
    private function editInfo($args){
        if($this->userstatus=='un-pass')
        return false;
        else{
            $editInfo = new model();
            $userId   =$_SESSION['userId'];
            $userName =$args[2];
            $userEmail=$args[3];
            
            $result=$editInfo->editUserInfo($userId,$userName,$userEmail);
            
            return $result;
        }
    }//編輯資訊
    
    private function logout(){
        session_destroy();
        return true;
    }
    /********************************************************************/
    // 
    // 
    //只有un-pass可以做的事情
    /********************************************************************/
    
    private function signUp($args){
         //07/22確認功能可用
        if($this->userstatus=='pass')
        return false;
        else
        {
            $signUp = new model();
            $userAccount  = $args[1];   //帳號
            $userName     = $args[2];   //暱稱
            $userPWD_MD5  = $args[3];   //密碼(加密後)
            $userEmail    = $args[4];   //信箱
            
            
            $result=$signUp->addUser($userAccount,$userName,$userPWD_MD5,$userEmail);
            
            return $result;
            
        }
    }//註冊
    
    
    private function findInfo($args){
        //07/22確認功能可用
        if($this->userstatus=='pass')
        return false;
        else
        {
            $findInfo = new model();
            $stepCount  = $args[1];   //步驟階段  1是確認信箱，2是修改密碼
            if($stepCount==1)
            {
                $userAccount  = $args[2];
                $userEmail    = $args[3];
                $result=$findInfo->checkUserAccount($userAccount,$userEmail);
                return $result;
            }
            else if($stepCount==2)
            {
                $userId         = $args[2];
                $userPWD_MD5    = $args[3];
                $result=$findInfo->resetPassWord($userId,$userPWD_MD5);
                return $result;
            }
            else
            return false;
           
        }
        
        
        
    }//找回密碼
    
    
    /********************************************************************/
    // 
    // 
    //pass和un-pass可以做的事情
    /********************************************************************/
    
    private function feedback($args){
        //$args結論還是會抓到第一個參數
        //07/22確認功能可用
        $addFb=new model();
        
        
        $fbCorF=$args[1];
        
        if(isset($_SESSION['userId']))
        $userId=$_SESSION['userId'];
        else
        $userId=999;
        
        $fbType=$args[2];
        $fbSubType=$args[3];
        $fbTitle=$args[4];
        $fbContent=$args[5];
        $result = $addFb->addFeedback($fbCorF,$userId,$fbType,$fbSubType,$fbTitle,$fbContent);
        return $result;
    }//回報/聯絡
    
    private function search($args){
        //07/22確認功能可用
        $userAccountPart = $args[1];
        $searchUser = new model();
        $result = $searchUser->immediatelySearch($userAccountPart);
        // 即時搜尋回傳的第一個陣列值是搜尋的結果數
        echo "search part=".$args[1];
        echo "<br>search result=".$result[0];
        return $result;
    }//搜尋玩家
    
    
    private function getInfo($args){
        $self="";
        $userAccount="";
        if($this->userstatus=='pass'){
            $self=true;
            $userAccount=$_SESSION['userAccount'];
        }
        else
        {
            $self=false;
            $userAccount = $args[1];
        }
        $getInfo=new model();
        $result=$getInfo->getUserInfo($userAccount,$self);
        
        if($result===false)
        return false;
        
        return $result;
        
    }//搜尋送出
    
    /*********************************************************************/
    // 
    // 
    // 
    /*********************************************************************/
    /*********************************************************************/
    /*********************************************************************/
    /*********************************************************************/
    /******************接收遊戲資訊，寫入後重導網頁***********************/
    // 
    // 
    //只有pass可以做的事情
    /********************************************************************/
   
    
    
    /********************************************************************/
    // 
    // 
    //只有un-pass可以做的事情
    /********************************************************************/
    
   
   
    
    
    /********************************************************************/
    // 
    // 
    //pass和un-pass可以做的事情
    /********************************************************************/
    
   
   
   
    /********************************************************************/
    /*********************************************************************/
    /*********************************************************************/
    /*********************************************************************/
   
}

?>