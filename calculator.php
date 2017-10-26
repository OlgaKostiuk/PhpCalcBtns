<?php
$json = file_get_contents('php://input');
$obj = json_decode($json, true);

//print_r($obj);

$num1 = $obj['num1'];
$num2 = $obj['num2'];
$operation = $obj['operation'];

function Calculate($num1, $num2, $operation){
    $result = 0;
    switch ($operation) {
        case "+": {
            $result = $num1 + $num2;
            break;
        }
        case "-": {
            $result = $num1 - $num2;
            break;
        }
        case "*": {
            $result = $num1 * $num2;
            break;
        }
        case "/": {
            $result = $num1 / $num2;
            break;
        }
    }
    return $result;
}

echo Calculate($num1, $num2, $operation);



//$num1 = $_POST['num1'];
//$num2 = $_POST['num2'];
//$operation = $_POST['operation'];
//
//function Calculate($num1, $num2, $operation){
//    $result = 0;
//    switch ($operation) {
//        case "+": {
//            $result = $num1 + $num2;
//            break;
//        }
//        case "-": {
//            $result = $num1 - $num2;
//            break;
//        }
//        case "*": {
//            $result = $num1 * $num2;
//            break;
//        }
//        case "/": {
//            $result = $num1 / $num2;
//            break;
//        }
//    }
//    return $result;
//}
//
//echo Calculate($num1, $num2, $operation);