<?php
session_start();
//不要忘記session start
if(isset($_SESSION['userId'])){
$userId=$_SESSION['userId'];
$userAccount=$_SESSION['userAccount'];
$gameId=$_SESSION['gameId'];
$status = array('userId' => $userId , 'userAccount' => $userAccount, 'gameId' => $gameId);
echo json_encode($status);
}
else if(!isset($_SESSION['userId'])){
$status = array('userId' => 'none' , 'userAccount' => 'none', 'gameId' => 'none');
echo json_encode($status);
}


?>