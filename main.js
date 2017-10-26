/**
 * Created by Olga on 10/17/2017.
 */
var answer;
var cancel;
var calculate;

var num1 = 0;
var operation = '+';
var num2 = 0;

function init(){
    answer = document.getElementById('answer');
    cancel = document.getElementById('cancel');
    calculate = document.getElementById('calculate');
}

function addDigitClickListeners(){
    var btns = document.getElementsByClassName('digit');
    for(var i= 0; i < btns.length; i++){
        btns[i].addEventListener('click', digitClickHandler);
    }
}
function digitClickHandler(e){
    answer.value=answer.value+e.target.value;
}

function addOperationClickListeners(){
    var btns = document.getElementsByClassName('operation');
    for(var i= 0; i < btns.length; i++){
        btns[i].addEventListener('click', operationClickHandler);
    }
}
function operationClickHandler(e){
    num1 = parseInt(answer.value);
    operation=e.target.value;
    answer.value = '';
}

function addCancelClickListener() {
    cancel.addEventListener('click', function () {
        answer.value = "";
        operation = "+";
        num1=0;
    })
}

function addCalculateClickListener(){
    calculate.addEventListener('click', function () {
        num2 = parseInt(answer.value);
        requestAnswer(num1, num2, operation);
    })
}

function requestAnswer(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            answer.value = xmlhttp.responseText;
        }
    };
    xmlhttp.open("POST", "calculator.php");
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify({num1: num1, num2: num2, operation: operation}));
}


document.addEventListener('DOMContentLoaded', function() {
    init();
    addDigitClickListeners();
    addOperationClickListeners();
    addCancelClickListener();
    addCalculateClickListener();
}, false);

