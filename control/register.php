<?php
require('controllerClass.php');//應該是要引入controller才對
header("Content-Type:text/html; charset=utf-8");
$userAccount=$_POST['userAccount'];
$userPassWord=$_POST['userPassWord'];
//$_POST['checkPassWord'];
$userName=$_POST['userName'];
$userEmail=$_POST['userEmail']."@".$_POST['subuserEmail'];
$signUp = new controller();
$result = $signUp->command("signUp",$userAccount,$userName,md5($userPWD_MD5),$userEmail);
if($result==true)
header('Location:../message/userMessage.html?#1');
else
header('Location:../message/userMessage.html?#2');
?>