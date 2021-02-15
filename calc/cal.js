var scr=document.getElementById("screen");
var ans=document.getElementById("ans");
function fxn(i){
    scr.innerHTML+=i;
    ans.innerHTML=eval(scr.innerHTML);
}
function fc(){
    scr.innerHTML="";
    ans.innerHTML="";
}
function fxc(){
    scr.innerHTML=scr.innerHTML.slice(0,scr.innerHTML.length-1);
}
function eq(){
    var x=eval(scr.innerHTML);
    scr.innerHTML=x;
    ans.innerHTML="ans";
    ans.setAttribute("value",x);
    
}
function fa(){
    scr.innerHTML+=ans.getAttribute("value");
}