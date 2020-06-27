function myfunction(num){
    var result = document.getElementById("myjs");
    result.value+=num;
    
}

function getResult(){
    var result = document.getElementById("myjs");
    result.value = eval(result.value);
}



function getSquare(){
    var result = document.getElementById("myjs");
    result.value = eval(result.value * result.value);

}