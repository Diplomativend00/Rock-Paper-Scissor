let userScore= 0;
let compScore =0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-score')
const compScorePara = document.querySelector('#comp-score')


const genComputerChoice = ()=>{
    const options = ['rock','paper','scissors']
    //rock ,paper,scissor - comp generate randomly
    const randomIdx = Math.floor(Math.random()*3)
    return options[randomIdx];
}

const drawGame =()=>{
    msg.innerText = 'Game was draw.play again'
    msg.style.backgroundColor = '#0813b31'
} 

const showWinner = (userWin , userChoice,computerChoice)=>{
    if(userWin){
       userScore++;
       userScorePara.innerText = userScore
        msg.innerText = `You win! your ${userChoice} beats ${computerChoice}`
        msg.style.backgroundColor = 'green'
    } else{
        compScore++;
        compScorePara.innerText = compScore
         msg.innerText = `You lose! ${computerChoice} beats your ${userChoice}`

         msg.style.backgroundColor = 'red'

        
    }
}

const playGame = (userChoice)=>{
    console.log('user choice =' , userChoice);
    //generate computerr score
    const computerChoice = genComputerChoice();
    console.log('computer choice =' , computerChoice);

    if(userChoice === computerChoice){
        //draw
        drawGame();
    }else{
        let userWin = true;
        if(userChoice=== 'rock'){
            //comp may gen paper,scissors
            userWin= computerChoice === 'paper' ? false : true
        } else if(userChoice=== 'paper'){
            //rock,scissorsue

            userWin=computerChoice === 'scissors' ? false: true;
        } else{
          //rock , paper 
          userWin = computerChoice === 'rock' ?false : true;
    
        }  
        showWinner(userWin, userChoice,computerChoice);
    }


}
choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute('id');
        playGame(userChoice)
    })
})
