
var input= document.getElementById("result");

function getResult(value){
    input.value +=value;
    // input.value= input.value + value;
}
function calculateResult(){
    var result= eval(input.value);
    input.value=result;
}
function clearAll(){
    input.value="";
}
function deleteResult(){
    input.value= input.value.slice(0,-1);
     
}