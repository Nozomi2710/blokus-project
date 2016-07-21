<?php

$data['name']='Apple';

$data['email']='appla@gmail.com';

switch($_GET['active']){

case 'json':

echo json_encode($data);

break;

case 'php':

print_r($data);

break;

}

?>