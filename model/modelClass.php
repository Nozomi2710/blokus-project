<?php
require('init.php');
date_default_timezone_set("Asia/Taipei");//設定時區，c9的伺服器還是不要亂改設定會比較好

/*


function:

__construct()建立連線

新增使用者
    // addUser($userAccount,$userName,$userPWD_MD5,$userEmail)
取得使用者(本人$self=true)資訊
    // getUserInfo($userAccount,$self)
第一次登入新建遊戲Id($userId=false時撈資料重建)
    // getGameId($userAccount,$userId)
修改使用者(本人)資料
    // editUserInfo($userArray)
填寫回饋單
    // addFeedback($userId,$fbType,$fbSubType,$fbTitle,$fbContent)
使用者登入
    // userLogin($userAccount,$userPWD)

__destruct()斷開連線

*/



class model{
    
    protected $_myconn=0;
    
    function __construct(){
        global $blokusServer,$blokusUser,$blokusPWD,$blokusDB;//調用全域變數
        $myconn = new mysqli($blokusServer,$blokusUser,$blokusPWD,$blokusDB);
        
        if($myconn->connect_errno)
          die("<h4 class='text-warning'>不知道哪裡出錯了，請幫我回報站長QAQ</h4>");
      
        
        $myconn->set_charset("utf8");
        $this->_myconn = $myconn;
        
    }
    
    function __destruct(){
        $this->_myconn->close();
    }//有空記得寫資料(?
    
    function addUser($userAccount,$userName,$userPWD_MD5,$userEmail){
        
        $sqlI="INSERT blokus_userInfo (`userAccount`, `userName`, `userPassWord`, `userEmail`, `gameId`, `level`) 
        VALUES ('$userAccount','$userName','$userPWD_MD5','$userEmail','none','1')";
        $result = $this->_myconn->query($sqlI);
        
        return $result;
        
        /*INSERT的回傳值是ture或false*/
        // $testmodel = new model();
        // $testmodel->addUser($name,$name,$PWD,'userEmail@email.com','none');
        /*用法如上*/
        
    }
    
    
    function getUserInfo($userAccount,$self){//找到分數資料
        $userOwn="";
        if($self==true)
        $userOwn=",userEmail";
    
        $sqlS="SELECT userName,gameId ".$userOwn." FROM blokus_userInfo WHERE `userAccount` = '$userAccount' ";
        $result = $this->_myconn->query($sqlS);
        $infoArray = mysqli_fetch_array($result);
        $gameId=$infoArray['gameId'];
        
        $sqlGameInfo="SELECT scoreBest,scoreSBest,scoreThBest FROM blokus_gameInfo WHERE `gameId` = '$gameId' ";
        $resultGameInfo = $this->_myconn->query($sqlGameInfo);
        $scoreArray = mysqli_fetch_array($resultGameInfo);
        
        /*****************************回報陣列************************************/
        $anserArray['userName'] = $infoArray['userName'];
        $anserArray['$userId']  = $userId;
        
        if($self==true)
        $anserArray['userEmail']= $infoArray['userEmail'];
        
        $anserArray['score1']   = $scoreArray['scoreBest'];
        $anserArray['score2']   = $scoreArray['scoreSBest'];
        $anserArray['score3']   = $scoreArray['scoreThBest'];
        
        /*************************************************************************/
        
        return $anserArray;
        
    }
    
    
    function getGameId($userAccount,$userId){//gameID不會馬上產生，要在使用者進行第一次遊戲時才會產生
        $gameId="";
        
        if($userId==false){
        $sqlS="SELECT userId FROM blokus_userInfo WHERE `userAccount` = '$userAccount' ";
        $resultS = $this->_myconn->query($sqlS);
        $row=mysqli_fetch_row($resultS);
        $gameId = "blokus_".$row[0];
        }
        else if($userId!=false)
        $gameId = "blokus_".$userId;
        else 
        return false;
        
        $sqlU="UPDATE blokus_userInfo SET `gameId` = '$gameId' WHERE `userAccount` = '$userAccount'";//‵變數`跟 '變數'是不一樣的
        $resultU = $this->_myconn->query($sqlU);
        if($resultU==1)
        return $gameId;/*UPDATE的回傳值是修正筆數，但是因為使用者權限只能修改自己的資料，故使用回傳值來區分成功與否*/
        else
        return "none";
    }
    
    
    function editUserInfo($userArray){
        
        $userName  = $anserArray['userName'];
        $userId    = $anserArray['$userId'];
        $userPWD   = $anserArray['$userPassWord'];
        $userEmail = $anserArray['userEmail'];
        
        $sqlU="UPDATE blokus_userInfo SET `userName`= '$userName' , `userPassWord`= '$userPWD',
        `userEmail`= '$userEmail' WHERE `userAccount` ='$userId'";
        $resultU = $this->_myconn->query($sqlU);
        
        return $resultU;/*UPDATE的回傳值是修正筆數，但是因為使用者權限只能修改自己的資料，故使用回傳值來區分成功與否*/
    }
    
    function addFeedback($fbCorF,$userId,$fbType,$fbSubType,$fbTitle,$fbContent){
        $dateTime = date("Y-m-d H:i:s");
        $sqlI="INSERT INTO `blokus_userFeedBack`
                (`fbCorF`,`userId`, `fbType`, `fbSubType`, `fbTitle`, `fbContent`, `fbDateTime`) 
        VALUES  ('$fbCorF','$userId','$fbType','$fbSubType','$fbTitle','$fbContent','$dateTime')";
        $result = $this->_myconn->query($sqlI);
        
        return $result;
    }//這裡的userId是數字，不是userAccount
    
    function userLogin($userAccount,$userPWD){
        
        $sqlS="SELECT userId,gameId FROM blokus_userInfo WHERE `userAccount` = '$userAccount' AND `userPassWord` = '$userPWD' ";
        $result = $this->_myconn->query($sqlS);
        if(mysqli_num_rows($result)==1){
            $answerArray = mysqli_fetch_array($result);
            
            if($answerArray['gameId']=='none')
                $answerArray['gameId']=$this->getGameId($userAccount,$answerArray['userId']);
            
            $answerArray['userAccount']=$userAccount;
            
            return $answerArray;
        }
        else if(mysqli_num_rows($result)<=1)
        return false;
        else
        return "unknown fail!";
    }//test down
    
    
    
    
}//class結束



?>