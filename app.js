function btn_pos(){
    var val = document.getElementById("input").value;
    document.getElementById("input").value = val + "+";
}
function btn_neg(){
    var val = document.getElementById("input").value;
    document.getElementById("input").value = val +  "-";
}
function btn_div(){
    var val = document.getElementById("input").value;
    document.getElementById("input").value = val + "/";
}
function btn_mul(){
    var val = document.getElementById("input").value;
    document.getElementById("input").value = val + "X";
}
function btn_1(){
    var val = document.getElementById("input").value;
    document.getElementById("input").value = val + "1";
}
function btn_2(){
    var val = document.getElementById("input").value;
    document.getElementById("input").value = val + "2";
}
function btn_3(){
    var val = document.getElementById("input").value;
    document.getElementById("input").value = val + "3";
}
function btn_4(){
    var val = document.getElementById("input").value;
    document.getElementById("input").value = val + "4";
}
function btn_5(){
    var val = document.getElementById("input").value;
    document.getElementById("input").value = val + "5";
}
function btn_6(){
    var val = document.getElementById("input").value;
    document.getElementById("input").value = val + "6";
}
function btn_7(){
    var val = document.getElementById("input").value;
    document.getElementById("input").value = val + "7";
}
function btn_8(){
    var val = document.getElementById("input").value;
    document.getElementById("input").value = val + "8";
}
function btn_9(){
    var val = document.getElementById("input").value;
    document.getElementById("input").value = val + "9";
}
function btn_0(){
    var val = document.getElementById("input").value;
    document.getElementById("input").value = val + "0";
}
function btn_dot(){
    var val = document.getElementById("input").value;
    document.getElementById("input").value = val + ".";
}
function btn_mod(){
    var val = document.getElementById("input").value;
    document.getElementById("input").value = val + "%";
}

function result(){
    var val = document.getElementById("input").value;
    if(val.indexOf("X") === 0 || val.indexOf("/") === 0 || val == "NaN"){
        document.getElementById('input').value = "Error"
    }
    else if(val.indexOf("+") != -1){
        add = val.indexOf("+");
        let res = (Number(val.slice(0, add)) + Number(val.slice(add+1)));
        if(res){
            document.getElementById('input').value = res
            
        }
        else{
            document.getElementById('input').value = "Error"
        }
    }
    else if(val.indexOf("-") != -1){
        min = val.indexOf("-");
        let res = (Number(val.slice(0, min)) - Number(val.slice(min+1)));
        if(res){
            document.getElementById('input').value = res
            
        }
        else{
            document.getElementById('input').value = "Error"
        }
    }
    else if(val.indexOf("X") != -1){
        add = val.indexOf("X");
        let res = (Number(val.slice(0, add)) * Number(val.slice(add+1)));
        if(res){
            document.getElementById('input').value = res
            
        }
        else{
            document.getElementById('input').value = "Error"
        }
    }
    else if(val.indexOf("/") != -1){
        add = val.indexOf("/");
        let res = (Number(val.slice(0, add)) / Number(val.slice(add+1)));
        if(res){
            document.getElementById('input').value = res
            
        }
        else{
            document.getElementById('input').value = "Error"
        }
    }
    else if(val.indexOf("%") != -1){
        add = val.indexOf("%");
        let res = (Number(val.slice(0, add)) % Number(val.slice(add+1)));if(res === NaN){
            document.getElementById('input').value = "Error"
        }
        else{
            document.getElementById('input').value = res
        }
    }
}

function btn_clearAll(){
    document.getElementById("input").value = "";
}

function btn_clear(){
    val = document.getElementById('input').value;
    document.getElementById('input').value = val.substring(0, val.length-1);
}
function change(){
    val = document.getElementById('input').value;
    console.log(val)
}