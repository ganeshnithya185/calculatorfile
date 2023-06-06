
let outputScreen = document.getElementById('output-Screen');
function display(num){
    console.log(num,"numm");
    console.log(outputScreen,"output")
    outputScreen.value += num;
}
function calculate(){
    try{
    outputScreen.value=eval(outputScreen.value);
}
   catch(err)
   {
    alert("Invalid");
   }

}
function clear(){
    outputScreen.value="";

}
function del(){
    outputScreen.value = outputscreen.Value.slice(0,-1);
}

