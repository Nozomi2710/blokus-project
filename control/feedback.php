<?php
require('controllerClass.php');//應該是要引入controller才對
header("Content-Type:text/html; charset=utf-8");
$fbCorF      = "F";
$fbType      = $_POST['fbType'];
$fbSubType   = $_POST['fbSubType'];
$fbTitle     = $_POST['fbTitle'];
$fbContent   = $_POST['fbContent'];

$feedback = new controller();
$anser = $feedback->command("feedback",$fbCorF,$fbType,$fbSubType,$fbTitle,$fbContent);
if($anser==1)
header('Location:../message/systemMessage.html?#1');
else
header('Location:../message/systemMessage.html?#2');

?>