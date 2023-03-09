'use strict';
 let secreteNumber = Math.trunc (Math.random() * 20) + 1;


 let score = 20;
 let highscore = 0;

 document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value); 
    // if no guess number
     if(!guess)
     {
        document.querySelector('.message').textContent = '⛔ No Number';
     }

     //if gues number is equal to secrete number
     else if( guess === secreteNumber)
     {
        document.querySelector('.message').textContent = '🎉 correct number';
        document.querySelector('.number').textContent = secreteNumber;
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = '30rem';


        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    // if gues number is high than secrete number
    else if (guess > secreteNumber)
    {
         if(score > 1)
         {
                  
         document.querySelector('.message').textContent = '📈 Too high'; 
         score --;
         document.querySelector('.score').textContent = score;
         }
         else 
         {
            document.querySelector('.message').textContent = '🔥 You lost the game'; 
            document.querySelector('.score').textContent = 0;
         }

    }

    // if guess number is low than secrete number
        else if(guess < secreteNumber)
  {
          if(score > 1)
          {
            
              document.querySelector('.message').textContent = '📉 Too low';
              score --;
              document.querySelector('.score').textContent = score;
          }
          else{
            document.querySelector('.message').textContent = '🔥 You lost the game'; 
            document.querySelector('.score').textContent = 0;
          }
  
 }

 } );

    document.querySelector('.again').addEventListener('click', function(){
        secreteNumber = Math.trunc (Math.random() * 20) + 1;
        document.querySelector('.score').textContent = 20;
        document.querySelector('.guess').value= '';
        document.querySelector('.message').textContent = 'start guessing';
        document.querySelector('.number').textContent = '?';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';


    })

 // MANIPULATE TH CSS STYLE