small=document.getElementsByClassName("small");
var xor=0;
var arrx=[];
var obj=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var arr0=[];
var clicked=[0,0,0,0,0,0,0,0,0];

function fxn(x){
    if (!clicked[x]){
    if(xor%2==0){
    clicked[x]=1;
    drawx=document.createTextNode('X');
    small[x].appendChild(drawx);
    arrx.push(x);
    if(arrx.length>=3){
        for(var i=0;i<8;i++){
            test(obj[i],arrx,1);
        }
    }
}else{
    drawx=document.createTextNode('0');
    clicked[x]=1;
    small[x].appendChild(drawx);
    arr0.push(x);
    if(arr0.length>=3){
        for(var i=0;i<8;i++){
            test(obj[i],arr0,2);
        }
    }
}
xor++;
if(compare()){
    reset();
}
}}
function reset(){
for(var i=0;i<9;i++){
    try{
        var y=small[i].childNodes[0];
        small[i].removeChild(y);
    }
    catch(err){
        console.log(err);
        continue;
    }
}
xor=0;
arrx=[];
arr0=[];
clicked=[0,0,0,0,0,0,0,0,0];
}

function test(arr1,arr2,no){
    var z=0;
    for(var i=0;i<3;i++){
        if(tesla(i,arr1,arr2)){
            z++;
        }

    }
    if(z==3){
        alert('Player'+no+' wins');
        reset();
    }
}

function tesla(p,ar,br){
    for(var j=0;j<br.length;j++){
        if(ar[p]==br[j]){
            return true;
        }
    }
    return false;
}
function compare(){
    var zzz=0;
    for (var i=0;i<9;i++){
        if(clicked[i]==1){
            zzz++;
        }
    }
    if(zzz==9){
        alert('No one wins');
        return true;
        
    }
    return false;
}



