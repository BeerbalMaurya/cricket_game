
let scoreStr = localStorage.getItem('score');
let score = JSON.parse(scoreStr) || {
   win: 0,
   lose: 0,
   tie: 0,
}



// if(scoreStr !== undefined){
//   score = JSON.parse(scoreStr);
// } else {
//  score = {
//   win: 0,
//   lose: 0,
//   tie: 0,  
// };
// }





  function computerRandomChoice(){

    // this will generate rendom number btween 0 and 3
   let randomNum = Math.random() * 3;

if (randomNum > 0 && randomNum <1){
    return 'bat';
   

  }else  if(randomNum > 1 && randomNum < 2){
    return 'ball';
  

  }else  if(randomNum > 2 && randomNum < 3){
    return 'stump';
   
  }

  } 

  function getResult( userMove, computerMove)
  {
    if (computerMove === userMove){
      score.tie++;
    return ('match is tie');

  }else if (computerMove === 'ball' && userMove === 'bat'){
    score.win++;
   return ('you are won');

  }else if (computerMove === 'bat' && userMove === 'ball'){
    score.lose++;
   return ('Computer are won');

 }else if (computerMove === 'bat' && userMove === 'stump'){
  score.win++;
   return ('you are won');
 } else if (computerMove === 'ball' && userMove === 'stump'){
  score.lose++;
   return ('Computer are won');

  }else if (computerMove === 'stump' && userMove === 'ball'){
    score.win++;
   return ('you are won');

 }else {
  score.lose++;
   return ('Computer are won');
 } 
  
  }

 

  function showResult(userMove, computerMove, result){

     localStorage.setItem('score',JSON.stringify(score));
  

     document.querySelector('.userMoves').innerText = userMove ?`You chose ${userMove} !` : '';

      document.querySelector('.computerMoves').innerText = computerMove ? `Computer choice ${computerMove} ! `: '';

       document.querySelector('.results').innerText = result ?` ${result} !`: '';


   
   document.querySelector('.scores').innerText = ` ${score.displayScore()} `
  
   
  }

  
resetScore();

  
  function resetScore(){
     
    score = {
         win: 0,
         lose: 0,
         tie: 0,  
     };

     score.displayScore = function(){
    return `Total match won:${score.win}, lose:${score.lose}, tie:${score.tie}`;
  }
  
    showResult();
  }