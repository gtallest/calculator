var equation = "";
var currentNum = "";
var prevOperator;

$(".number").on("click",function(){
  currentNum += this.innerHTML;
  equation += this.innerHTML;
  $("#output").html(currentNum);
});

$(".clear-button").on("click",function(){
  currentNum = "";
  equation = "";
  $("#output").html("0");
})

$('#decimal').on('click',function(){
  if(currentNum.indexOf('.') != -1){

  }
  else {
    if(currentNum == "0"){
      currentNum = "0.";
    }
    else {
      currentNum += '.';
      equation += '.';
    }
    $('#output').html(currentNum);
  }
});

$('#plus').on('click',function(){
  if(!prevOperator){
    currentNum = "";
  }
  else {
    evaluateEquation();
  }
  prevOperator = "+";
  equation += "+";
});

$('#minus').on('click',function(){
  if(!prevOperator){
    currentNum = "";
  }
  else {
    evaluateEquation();
  }
  prevOperator = "-";
  equation += "-";
});

$('#multiply').on('click',function(){
  if(!prevOperator){
    currentNum = "";
  }
  else {
    evaluateEquation();
  }
  prevOperator = "X";
  equation += "X";
});

$('#divide').on('click',function(){
  if(!prevOperator){
    currentNum = "";
  }
  else {
    evaluateEquation();
  }
  prevOperator = "/";
  equation += "/";
});

$('#equals').on('click',function(){
  evaluateEquation();
  prevOperator = "";
});

function evaluateEquation() {
  var regex = new RegExp(/\s?\d*\.?\d*\s?/);
  var regex2 = new RegExp (/[^\d*\.?(\d*)?]/);

  var numArray = equation.split(regex2).filter(function(a){ return a != ""; });
  var operatorArray = equation.split(regex).filter(function(a){ return (a != "" && a != undefined); });
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
  equation = total;
  currentNum = "";

  $('#output').html(total);

}
