<?php
require('controllerClass.php');//應該是要引入controller才對
header("Content-Type:text/html; charset=utf-8");
$userAccount=$_POST['userAccount'];
$userPassWord=$_POST['userPassWord'];
$userName=$_POST['userName'];
$userEmail=$_POST['userEmail']."@".$_POST['subuserEmail'];

if($userPassWord!=$_POST['checkPassWord']){
    header('Location:/blokus/register.html?info=1');//確認密碼一致，不一致時請使用者重新輸入表單
    }
else{
    $signUp = new controller();
    $checkAccount=$signUp->command("search",$userAccount);
    //search指令在沒有找到帳號或帳號開頭的情況下回傳false
    
        if($checkAccount!=false)
        header('Location:/blokus/register.html?info=2');
        else{
            $userPWD_MD5=md5($userPassWord);
            $result = $signUp->command("signUp",$userAccount,$userName,$userPWD_MD5,$userEmail);
            if($result==true)
                header('Location:../view/message/message.html?info=1');
            else
                header('Location:../view/message/message.html?info=2');
        }
    }
?>