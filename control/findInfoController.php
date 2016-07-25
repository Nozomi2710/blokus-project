<?php
require('controllerClass.php');//應該是要引入controller才對
header("Content-Type:text/html; charset=utf-8");
session_start();
if(isset($_POST['findOK'])){
            $userAccount=$_POST['userAccount'];
            $userEmail=$_POST['userEmail'];
            $checkEmail=new controller();
            $tempId=$checkEmail->command("findInfo",1,$userAccount,$userEmail);//設置臨時Id
            
                if($tempId!=false){//有找到資料並且核對成功即不等false，會回傳Id
                    $_SESSION['tempId']=$tempId;
                    header('Location:/blokus/reset.html');
                }
                else
                {
                    header('Location:/blokus/lookForAccount.html?info=3');
                }
}
else if(isset($_POST['resetOK'])&&isset($_SESSION['tempId'])){
        if($_POST['userPassWord']!=$_POST['checkPassWord'])
            header('Location:/blokus/reset.html?info=1');
        else
        {
            $PWD=$_POST['userPassWord'];
            $userId=$_SESSION['tempId'];
            unset($_SESSION['tempId']);
            $userPWD_MD5=md5($PWD);
            $resetPWD=new controller();
            $result=$resetPWD->command("findInfo",2,$userId,$userPWD_MD5);
                if($result==true)
                    header('Location:/blokus/view/message/systemMessage.html?info=3');//等等改連結
                else if($result==false)
                    header('Location:/blokus/view/message/systemMessage.html?info=4');
        }

}
else if(isset($_POST['resetOK'])&&isset($_SESSION['userId'])){
        if($_POST['userPassWord']!=$_POST['checkPassWord'])
            header('Location:/blokus/reset.html?info=1');
        else
        {
            $PWD=$_POST['userPassWord'];
            $userId=$_SESSION['userId'];
            $userPWD_MD5=md5($PWD);
            $resetPWD=new controller();
            $result=$resetPWD->command("findInfo",2,$userId,$userPWD_MD5);
                if($result==true)
                    header('Location:/blokus/view/message/systemMessage.html?info=5');//等等改連結
                else if($result==false)
                    header('Location:/blokus/view/message/systemMessage.html?info=6');
        }
}
?>