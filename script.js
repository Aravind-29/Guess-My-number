'use strict';

let number = Math.trunc(Math.random() * 50 + 1);
let score = 20;
let highscore = 0;



function launch_toast() {
  var x = document.getElementById("toast")
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

document.querySelector('.icon-button').addEventListener('click', function(){
score = 20;
document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = '?';
number = Math.trunc(Math.random() * 50 + 1);
document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
    let guess = document.querySelector('.guess').value;

    if (!guess || guess <= 0 || guess > 50 || isNaN(guess)) {
        document.querySelector('.message').style.backgroundColor = '#F8D7DA';
        document.querySelector('.message').style.color = '#84202F';
        document.querySelector('.message').textContent = 'Invalid Input ⚠️';
        document.querySelector('.message').style.border = '1px solid #f5c2c7';
        document.querySelector('.small').textContent = 'Invalid';
        document.querySelector('.big').textContent = 'Choose a number between 1 to 50';
        document.querySelector('.small').style.backgroundColor='#E3322D';
       
        launch_toast();

       
    } 
    else if (guess < number) {
        if(score>1){
            document.querySelector('.message').textContent = 'Wrong Number ❌';
            document.querySelector('.message').style.backgroundColor = '#f8d7da';
            document.querySelector('.message').style.color = '#721c24';
            document.querySelector('.message').style.border = '1px solid #f5c6cb';
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.small').textContent = 'Hint';
            document.querySelector('.big').textContent = 'Your guess is too low';
            document.querySelector('.small').style.backgroundColor='#1288BF';
            launch_toast();
        }
       else{
        document.querySelector('.message').textContent = 'You Lost !';
        document.querySelector('.message').style.backgroundColor = '#f8d7da';
        document.querySelector('.message').style.color = '#721c24';
        document.querySelector('.message').style.border = '1px solid #f5c6cb';
        document.querySelector('.score').textContent = 0;
        document.querySelector('.small').textContent = 'You Lost!';
            document.querySelector('.big').textContent = 'Better luck next time !';
            document.querySelector('.small').style.backgroundColor='#E3322D';
       
            launch_toast();
       }
    }
    else if (guess > number) {
      if(score>1){document.querySelector('.message').textContent = 'Wrong Number ❌';
      document.querySelector('.message').style.backgroundColor = '#f8d7da';
      document.querySelector('.message').style.color = '#721c24';
      document.querySelector('.message').style.border = '1px solid #f5c6cb';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.small').textContent = 'Hint';
      document.querySelector('.big').textContent = 'Your guess is too high';
      document.querySelector('.small').style.backgroundColor='#1288BF';
      launch_toast();}
      else{
        document.querySelector('.message').textContent = 'You Lost 👎';
        document.querySelector('.message').style.backgroundColor = '#f8d7da';
        document.querySelector('.message').style.color = '#721c24';
        document.querySelector('.message').style.border = '1px solid #f5c6cb';
        document.querySelector('.score').textContent = 0;
        document.querySelector('.small').textContent = 'You Lost!';
            document.querySelector('.big').textContent = 'Better luck next time !';
            document.querySelector('.small').style.backgroundColor='#E3322D';
       
            launch_toast();
       }
  } 
       else{
        document.querySelector('.message').textContent = 'Correct Number ✅';
            document.querySelector('.message').style.backgroundColor = '#d4edda';
            document.querySelector('.message').style.color = '#155724';
            document.querySelector('.message').style.border = '1px solid #c3e6cb';
            document.querySelector('.small').textContent = 'Great Job !';
            document.querySelector('.big').textContent = 'You guessed the correct number !';
            document.querySelector('.number').textContent = number;
            document.querySelector('.small').style.backgroundColor='#399B35';
            launch_toast();
            if(score>highscore){
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
       }
    setTimeout(function () {
        document.querySelector('.message').style.backgroundColor = '';
        document.querySelector('.message').style.color = '';
        document.querySelector('.message').textContent = '';
        document.querySelector('.message').style.border = '';
    }, 3000);
});
