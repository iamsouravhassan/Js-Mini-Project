
 
 // Select All Html Element

let batS = document.querySelector('.bat');
let ballS = document.querySelector('.ball');
let stampS = document.querySelector('.stamp');
let scoreS = document.querySelector('.score');
let resultS = document.querySelector('.result');

// Create function for Computer Choice


function main(){
    let randomNumber = Math.floor(Math.random()*3 + 1);
    switch(randomNumber){
        case 1:
          return 'bat'
          break;
        case 2:
            return 'ball'
            break;
        case 3:return 'stamp'
    }
}


// Score Calculation

let youWon = 0;
let computerWon = 0;
let totalTry = 0;
let totalScore = 0; 
let result = ""; 

 // Bat Function

function bat(){
   
    let computerChoice = main();
    if(computerChoice === 'bat'){
    result =  'Match Try'
    totalTry++;
  }else if( computerChoice === 'ball'){
    result = 'User Won'
    youWon++;
  }else{
    result = 'Computer Won'
    computerWon++;
  }

  totalScore = youWon-computerWon;
  resultshow('bat',computerChoice,result)
  
  scoreShow();
  

}


 // Ball Function

 function ball(){ 
    let computerChoice = main();
  if(computerChoice === 'bat'){
    result = 'Computer Won'
    computerWon++;
  }else if( computerChoice === 'ball'){
    result = 'Match Try'
    totalTry++;
  }else{
    result = 'User Won'
    youWon++;
  }
  resultshow('ball',computerChoice,result)
  totalScore = youWon-computerWon;
  scoreShow();
}
 

// Stamp Function

function stamp(){
    let computerChoice = main();
  if(computerChoice === 'bat'){
    result = 'User Won'
    youWon++;
  }else if( computerChoice === 'ball'){
    result = 'Computer Won'
    computerWon++;
  }else{
    result = 'Match Try'
    totalTry++;
    computerWon++;
  }
  resultshow('stamp',computerChoice,result)
  totalScore = youWon-computerWon;
  scoreShow();
}



// Result Show 

function resultshow(userChoice , computerChoice,result){
  resultS.innerHTML = `User Choice  ${userChoice} <br> Computer Choice ${computerChoice} <br> Result: ${result}`
}


// Score Show

function scoreShow(){
    scoreS.innerHTML = ` You Won : ${youWon} <br> Try : ${totalTry} <br> Computer Won : ${computerWon} <br>  
    Total Score : ${totalScore}`
}

// Click mathod add 

batS.addEventListener('click',bat);
ballS.addEventListener('click',ball);
stampS.addEventListener('click',stamp);

