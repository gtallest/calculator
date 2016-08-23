//Next Steps:
//Add Order of Operations / Nested Functionality
//Implement Keyboard Functionality
//Implement CE Functionality

var numArray = [];
var operatorArray = [];
var currentNum = "";
var prevOperator;
var lastKey;
var nestedNum = [];
var nestedOperator = [];
var nested = false;

$(".calculator-button").on("click",function(){
  $(".calculator-button").removeClass('active');
  $(this).addClass('active');
});

$(".number").on("click",function(){
  if(prevOperator == "="){
    numArray = [];
    operatorArray = [];
    currentNum = "";
    prevOperator = "";
  }
  currentNum += this.innerHTML;
  lastKey = this.innerHTMl;
//  equation += this.innerHTML;
  $("#output").html(currentNum);
});

$(".clear-button").on("click",function(){
  currentNum = "";
//  equation = "";
  numArray = [];
  operatorArray = [];
  lastKey = "";
  $("#output").html("0");
})

$('#decimal').on('click',function(){
  if(currentNum.indexOf('.') != -1){

  }
  else {
    if(currentNum == "0" || prevOperator == "="){
      currentNum = "0.";
      prevOperator = "";
      numArray = [];
      operatorArray = [];
    }
    else {
      currentNum += '.';
//      equation += '.';
    }
    lastKey = ".";
    $('#output').html(currentNum);
  }
});

$('#plus').on('click',function(){
  if(!isOperator(lastKey)){
    numArray.push(currentNum);
    if(!prevOperator){
      currentNum = "";
    }
    else {
      evaluateEquation();
    }
    prevOperator = "+";
    lastKey = "+";
    operatorArray.push("+");
  }
  else {
    operatorArray.pop();
    operatorArray.push("+");
  }
});

$('#minus').on('click',function(){
  if(!isOperator(lastKey)){
  numArray.push(currentNum);
  if(!prevOperator){
    currentNum = "";
  }
  else {
    evaluateEquation();
  }
  prevOperator = "-";
  lastKey = "-";
  operatorArray.push("-");
}
else {
  operatorArray.pop();
  operatorArray.push("-");
}
});

$('#multiply').on('click',function(){
  if(!isOperator(lastKey)){
  numArray.push(currentNum);
  if(!prevOperator){
    currentNum = "";
  }
  else {
    evaluateEquation();
  }
  prevOperator = "X";
  lastKey = "X";
  operatorArray.push("X");
}
else {
  operatorArray.pop();
  operatorArray.push("X");
}
});

$('#divide').on('click',function(){
  if(!isOperator(lastKey)){
  numArray.push(currentNum);
  if(!prevOperator){
    currentNum = "";
  }
  else {
    evaluateEquation();
  }
  prevOperator = "/";
  lastKey = "/";
  operatorArray.push("/");
}
else {
  operatorArray.pop();
  operatorArray.push("/");
}
});

$('#equals').on('click',function(){
  numArray.push(currentNum);
  evaluateEquation();
  prevOperator = "=";
  lastKey = "=";
});

function evaluateEquation() {
  var regex = new RegExp(/\s?\d*\.?\d*\s?/);
  var regex2 = new RegExp (/[^\d*\.?(\d*)?]/);

//  var numArray = equation.split(regex2).filter(function(a){ return a != ""; });
//  var operatorArray = equation.split(regex).filter(function(a){ return (a != "" && a != undefined); });
  console.log(numArray);
  console.log(operatorArray);
  var total = parseFloat(numArray[0]);
  var i = 0;
  while(i < operatorArray.length){
    var operator = operatorArray[i];
    switch(operator){
      case "+":
        console.log("plus total " + total);
      total += parseFloat(numArray[i + 1]);
      break;
      case "-":
      total -= parseFloat(numArray[i + 1]);
      break;
      case "X":
      total *= parseFloat(numArray[i + 1]);
      break;
      case "/":
      total /= parseFloat(numArray[i + 1]);
      break;
      default:

    }

    i++;
  }
  numArray = [];
  operatorArray = [];
  numArray.push(total);
  currentNum = "";

  $('#output').html(total);

}

function isOperator(operator){
  if(operator == "+" || operator == "-" || operator == "X" || operator == "/"){
    return true;
  }
  return false;
}
