<?php
require('controllerClass.php');
header("Content-Type:text/html; charset=utf-8");
$userName=$_POST['userName'];
$userEmail=$_POST['userEmail'];
$editInfo = new controller();
$result=$editInfo->command("editInfo",$userName,$userEmail);

                if($result==true)
                    header('Location:/blokus/view/message/systemMessage.html?info=5');
                else if($result==false)
                    header('Location:/blokus/view/message/systemMessage.html?info=6');
?>