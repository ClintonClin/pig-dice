function rollDice(){
   var randomNumber;
   var rollDice;
   var score=0;
   var score1;
   var score2;
      //score1=+randomNumber;
      //score2=+randomNumber;
      randomNumber=document.getElementById('dice1').innerHTML = Math.floor((Math.random()*6)+ 1);
      //document.getElementById('score1').innerHTML ="Score: "+randomNumber;

function hold(){
    score1 = randomNumber+score;
    document.getElementById('score1').innerHTML ="Score: "+score1;
}
}
