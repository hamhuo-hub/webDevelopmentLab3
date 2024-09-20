let targetNumber;
function randomInteger(){
    targetNumber = Math.floor(Math.random() * 100) + 1;
    return targetNumber;
}
    

function checkGuess(number){
    if(number < 1 || number > 100){
        return 'beyond range';
    }
    else if(number > targetNumber){
        return 'too high'
    }
    else if(number < targetNumber){
        return 'too low'
    }
    randomInteger();
    return 'success';
}