<?php
$acc = "qwerty";
$pass = "123";

$check_acc = empty($_POST['acc'])? "": $_POST['acc'];
$check_pass = empty($_POST['pass'])? "": $_POST['pass'];




if($acc == $check_acc && $pass == $check_pass){
    echo json_encode('true');
}else{
    http_response_code(500);
    echo json_encode('false');

}