<?php
if( isset($_SESSION['userId']) && isset($_SESSION['userAccount']) && isset($_SESSION['gameId']) ){
$userId=$_SESSION['userId'];
$userAccount=$_SESSION['userAccount'];
$gameId=$_SESSION['gameId'];
$status = array('userId' => $userId , 'userAccount' => $userAccount, 'gameId' => $gameId);
echo json_encode($arr);
}
else if(!isset($_SESSION['userId']) && !isset($_SESSION['userAccount']) && !isset($_SESSION['gameId']) ){
$status = array('userId' => 'none' , 'userAccount' => 'none', 'gameId' => 'none');
}


?>