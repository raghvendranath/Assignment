function addition(){
    let num1,num2,num3;
    num1= document.getElementById("num1").value;
    num2= document.getElementById("num2").value;
    num3=document.getElementById("num3").value;
    document.getElementById("result").innerHTML=parseInt(num1)+parseInt(num2)+parseInt(num3)
}


function multiplication(){
let num1,num2,num3;
num1=document.getElementById("num1").value;
num2=document.getElementById("num2").value;
num3=document.getElementById("num3").value;

document.getElementById("result").innerHTML=(num1*num2)*num3
}

function subtraction(){
let num1,num2,num3;
num1=document.getElementById("num1").value;
num2=document.getElementById("num2").value 
num3=document.getElementById("num3").value;
document.getElementById("result").innerHTML=(num1-num2)-num3
}

function division(){
    let num1,num2,num3;
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    num3=document.getElementById("num3").value;
    document.getElementById("result").innerHTML=(num1/num2)/num3


}

//Learning
// 1. create function
// 2. How to using variable with let key keyword
// 3. how to call function in using onclick attibutes.
// 4. How to convert number string to addition with help of parseInt.