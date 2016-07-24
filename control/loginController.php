<?php
//要先做MD5才行
require('controllerClass.php');//應該是要引入controller才對
header("Content-Type:text/html; charset=utf-8");
session_start();
$userAccount=$_POST['userAccount'];
$userPWD_MD5=md5($_POST['userPassWord']);
$login = new controller($userAccount,$userPWD_MD5);
if($login->userstatus=="pass" && isset($_SESSION['userId']))
header('Location:../view/message/userMessage.html?info=1');
else
header('Location:../view/message/userMessage.html?info=2');
?>