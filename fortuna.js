let pokerFace = "xxxxxxxx\nxx °° xx\nxx __ xx\nxxxxxxxx";
let luckyFace = [];

const getLuckyFace = face =>{
    for(let i=0;i<pokerFace.length;i++){
        if(pokerFace[i]==='x'){
            luckyFace += String.fromCharCode(Math.floor(Math.random()* (240 - 179 + 1) + 179));
        }else{
            luckyFace += pokerFace[i];  
        }//end ifelse      
    };//end for
    console.log(luckyFace);
};//end func

getLuckyFace(pokerFace);

