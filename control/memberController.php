<?php
require('controllerClass.php');//應該是要引入controller才對
header("Content-Type:text/html; charset=utf-8");
session_start();

$memberInfo=new controller();
$result=$memberInfo->command("getInfo");//使用者本人這樣就可以了

if($result==false)
$resultJson='沒有資料';
else
{
    $resultJson = array('userId'=>$_SESSION['userId'],'userAccount'=>$_SESSION['userAccount'],'userName'=>$result['userName'],'userEmail'=>$result['userEmail'],
    'score1'=>$result['score1'],'score2'=>$result['score2'],'score3'=>$result['score3']);
}
echo json_encode($resultJson);
?>