const pokerFace = "xxxxxxxx\nxx °° xx\nxx __ xx\nxxxxxxxx";
let luckyFace = [];
const luckyMessages = {
    feeling:['jolly','angry','sadly','interested','fearless','shamed','disgusted'],
    lucky:['get lucky','get unlucky','stay the same']
};

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

const getLuckyMessage = () =>{
    let feel=Math.floor(Math.random()*7);
    let luck=Math.floor(Math.random()*3);
    console.log(`You've to act: ${luckyMessages.feeling[feel]} in order to: ${luckyMessages.lucky[luck]}`);
};

getLuckyMessage();

