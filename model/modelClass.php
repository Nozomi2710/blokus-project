<?php
require('init.php');
date_default_timezone_set("Asia/Taipei");//設定時區，c9的伺服器還是不要亂改設定會比較好

/*


function:

__construct()建立連線

新增使用者
    // addUser($userAccount,$userName,$userPWD_MD5,$userEmail)  return true/false
取得使用者(本人$self=true)資訊
    // getUserInfo($userAccount,$self,$search) return userName,gameId,userEmail,score1,score2,score3
建立遊戲Id()
    // getGameId($userAccount,$userId) return gameId/false/"none"
修改使用者(本人)資料
    // editUserInfo($userId,$userName,$userEmail) return true/false
填寫回饋單
    // addFeedback($fbCorF,$userId,$fbType,$fbSubType,$fbTitle,$fbContent) return true/false
使用者登入
    // userLogin($userAccount,$userPWD) return userId/userAccount/userGameId
使用者確認信箱
    // checkUserAccount($userAccount,$userEmail) return userId/false
使用者修改密碼
    //resetPassWord($userId,$userPWD_MD5) return true/false
即時搜尋
    //immediatelySearch($userAccount) return Array/false


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
        $anserArray="";
        
        
        
        /*****************************回報陣列************************************/
        $anserArray['userName'] = $infoArray['userName'];
        
        if($self==true)
        $anserArray['userEmail']= $infoArray['userEmail'];
        
        $anserArray['score1']   = $scoreArray['scoreBest'];
        $anserArray['score2']   = $scoreArray['scoreSBest'];
        $anserArray['score3']   = $scoreArray['scoreThBest'];
        
        /*************************************************************************/
        
        // 本來希望將即時回傳搜尋項目的功能也加進來，考慮到這樣會在類別方法裡面添加太多的判斷式(希望維持在兩個以內)
        // 所以另外寫個immediateSearch可能會更好
       
        
        return $anserArray;
    }
    
    function immediatelySearch($userAccount){
        $sqlS="SELECT userAccount FROM blokus_userInfo WHERE `userAccount` LIKE '$userAccount%' ";
        $resultS=$this->_myconn->query($sqlS);
        if($resultS===false)
        return false;
        else{
        $userRow[0]="";
        $i=1;
        while($row = mysqli_fetch_row($resultS))
        {
            $userRow[$i] = $row[0];
            $i=$i+1;
        }
        $userRow[0]=$i;
        return $userRow;
        }
    }
    
    
    function checkUserAccount($userAccount,$userEmail){
        $sqlS="SELECT userId FROM blokus_userInfo WHERE `userAccount` = '$userAccount' AND `userEmail` = '$userEmail' ";
        $resultS = $this->_myconn->query($sqlS);
        if(mysqli_num_rows($resultS)!=1)
        return false;
        else if(mysqli_num_rows($resultS)==1)
        {
            $row=mysqli_fetch_row($resultS);
            return $row[0];
        }
        
    }
    function resetPassWord($userId,$userPWD_MD5){
        
        $sqlU="UPDATE blokus_userInfo SET `userPassWord` = '$userPWD_MD5' WHERE `userId` = '$userId'";
        $resultU = $this->_myconn->query($sqlU);
        if($resultU==1)
        return true;
        else
        return false;
        
    }
    
    private function getGameId($userAccount,$userId){//gameID不會馬上產生，要在使用者進行第一次遊戲時才會產生
        
        $gameId = "blokus_".$userId;
        
        $sqlU="UPDATE blokus_userInfo SET `gameId` = '$gameId' WHERE `userAccount` = '$userAccount'";//‵變數`跟 '變數'是不一樣的
        $resultU = $this->_myconn->query($sqlU);
        if($resultU==1)
        return $gameId;/*UPDATE的回傳值是修正筆數，但是因為使用者權限只能修改自己的資料，故使用回傳值來區分成功與否*/
        else
        return "none";
    }
    
    
    function editUserInfo($userId,$userName,$userEmail){
        
        $sqlU="UPDATE blokus_userInfo SET `userName`= '$userName' ,`userEmail`= '$userEmail' WHERE `userId` ='$userId'";
        $resultU = $this->_myconn->query($sqlU);
        if(mysqli_num_rows($result)<1)
        return false;
        else if(mysqli_num_rows($result)==1)
        return true;/*UPDATE的回傳值是修正筆數，但是因為使用者權限只能修改自己的資料，故使用回傳值來區分成功與否*/
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
        
        $sqlS="SELECT userId,gameId FROM blokus_userInfo WHERE `userAccount` = '$userAccount' 
                    AND `userPassWord` = '$userPWD' ";
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