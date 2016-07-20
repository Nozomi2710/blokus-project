<?php
require('model/modelClass.php');
class controller{
    
    public $userstatus='un-pass';
    protected $level='unset';
    protected $userAccount='unset';
    public $userArray;
    private $userPassWord='unset';
    
    function __construct(){//0=status,1=Account,2=pwd
           $args = func_get_args();//要獲取所有參數不要忘記這個function!!
           
           /*********************************************************************/
           //   在construct中不要使用return，畢竟物件就是物件，不能接收return的值
           /*********************************************************************/
           if(isset($args[1]))
           $this->userAccount=$args[1];
           if(isset($args[2]))
           $this->userPWD=$args[2];
           //F是外層if，f是內層if
           if(!isset($args[1]) && !isset($args[2]))                     //F.如果第二個和第三個參數沒有設定的話(沒有帳號密碼)
           {
                if(!isset($args[0]))                                    //f.也沒有設定第一個參數(沒有目前使用者狀態)
                    $this->level=0;
                else if(isset($args[0])&&$args[0]==true)                //f.有第一個參數是true(已經登入過，略過登入步驟)
                    {
                    $this->level=1;
                    $this->userstatus='pass';
                        }
                else                                                    //f.第一個參數是false以外的情況(亂下指令給control不可原諒)
                    $this->userstatus="unknown fail!";
           }
           else{                                                        //F.有設定第二個第三個參數的情況(準備登入狀態)
               $login = new model();//建立模組物件
               $loginResult=$login->userLogin($this->userAccount,$this->userPWD);//物件的物件指來指去~
               
                    if($loginResult!=false&&$loginResult!="unknown fail!")//f.在不出錯的情況下會回傳陣列
                    {
                        $this->userPWD=NULL;//只需要這一次的密碼
                        $this->userstatus='pass';
                        $this->userArray=$loginResult;
                        $this->level=1;
                        
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
        
        
    function command($commandInfo){//參數讀取會有點怪怪的
        $args = func_get_args();//會把剩下的參數都撿起來，超佛心
        $result = $this->$commandInfo($args);//call function is no problem
        return $result;
        
    }    
    function __destruct(){
        
        
        //記得把事件紀錄下來
    }
    /**********************to message 然後重導網頁***********************/
    //這一區可以放心return
    function signUp(){
        
    }//註冊
    
    private function editInfo(){
        
    }//編輯資訊
    
    private function findInfo(){
        
    }//找回密碼
    
    private function feedback(){
        
    }//回報/聯絡
    
    private function search($args){
        if($this->level==1)
        echo "<h2>登入狀態！</h2>";
        else if($this->level==0)
        echo "<h2>路人狀態...</h2>";
        else
        echo "<h2>What....?</h2>";
        
        if(isset($args[0]))
        echo "<h2>有一個參數".$args[1]."</h2>";
        if(isset($args[1]))
        echo "<h2>又一個參數".$args[2]."</h2>";
        if(isset($args[2]))
        echo "<h2>還有一個參數".$args[3]."</h2>";
        
        else if(!isset($args))
        echo "<h2>沒有參數</h2>";
        
        return "我有好好收到資料了";
        
    }//搜尋玩家
    
    /*********************************************************************/
    /******************接收遊戲資訊，寫入後重導網頁***********************/
    
    
    /*********************************************************************/
   
}

?>