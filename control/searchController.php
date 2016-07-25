<?php
require('controllerClass.php');//應該是要引入controller才對
header("Content-Type:text/html; charset=utf-8");
$userAccount=$_GET['userAccount'];
$search = new controller();
$result =$search->command("getInfo",$userAccount,false);
if($result!=false)
$back = array('result'=>'get','userAccount'=>$userAccount,'userName' => $result['userName'] ,'userScore' => $result['score1'] );
else
$back = array('result'=>'fail');

echo json_encode($back);
?>