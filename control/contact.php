<?php
require('../model/modelClass.php');//應該是要引入controller才對
header("Content-Type:text/html; charset=utf-8");
// $_POST['userAccount'];
// $_POST['ctType'];
// $_POST['ctSubType'];
// $_POST['ctTitle'];
// $_POST['ctContent'];
// $_POST['ctOk'];

$userAccount = $_POST['userAccount'];//記得改用session
$ctType      = $_POST['ctType'];
$ctSubType   = $_POST['ctSubType'];
$ctTitle     = $_POST['ctTitle'];
$ctContent   = $_POST['ctContent'];
$ctOk        = $_POST['ctOk'];
$fbCorF="C";
$testInto=new Model();
$anser=$testInto->addFeedback($fbCorF,$userAccount,$ctType,$ctSubType,$ctTitle,$ctContent);
if($anser==1)
{
    echo "<br>".$userAccount;
    echo "<br>".$ctType;
    echo "<br>".$ctSubType;
    echo "<br>".$ctTitle;
    echo "<br>".$ctContent;
}
else
echo "unknown fail;";
?>