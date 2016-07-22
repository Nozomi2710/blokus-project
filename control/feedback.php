<?php
require('controllerClass.php');//應該是要引入controller才對
header("Content-Type:text/html; charset=utf-8");
// $_POST['userAccount'];
// $_POST['ctType'];
// $_POST['ctSubType'];
// $_POST['ctTitle'];
// $_POST['ctContent'];
// $_POST['ctOk'];
$fbCorF      = "F";
$fbType      = $_POST['fbType'];
$fbSubType   = $_POST['fbSubType'];
$fbTitle     = $_POST['fbTitle'];
$fbContent   = $_POST['fbContent'];

$feedback = new controller();
$anser = $feedback->command("feedback",$fbCorF,$fbType,$fbSubType,$fbTitle,$fbContent);
if($anser==1)
header('Location:../message.html');
else
echo "unknown fail;";

?>