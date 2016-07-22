<?php
require('controllerClass.php');//應該是要引入controller才對
header("Content-Type:text/html; charset=utf-8");
// $_POST['userAccount'];
// $_POST['ctType'];
// $_POST['ctSubType'];
// $_POST['ctTitle'];
// $_POST['ctContent'];
// $_POST['ctOk'];
$fbCorF      = "C";
$ctType      = $_POST['ctType'];
$ctSubType   = $_POST['ctSubType'];
$ctTitle     = $_POST['ctTitle'];
$ctContent   = $_POST['ctContent'];

$contact = new controller();
$anser = $contact->command("feedback",$fbCorF,$ctType,$ctSubType,$ctTitle,$ctContent);
if($anser==1)
header('Location:../message.html');
else
echo "unknown fail;";
?>