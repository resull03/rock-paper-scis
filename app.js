const choices =["rock.png","paper.png","scissors.png"]
const rock=document.querySelector('#rock')
const paper=document.querySelector('#paper')
const scissors=document.querySelector('#scissors')
const computerSelect=document.querySelector('#computer-choice')
const playerSelect=document.querySelector('#player-choice')
const resultDiv=document.querySelector('#result')
rock.addEventListener('click',choose)
paper.addEventListener('click',choose)
scissors.addEventListener('click',choose)
let pScore=0
let cScore=0
let playerScore=document.querySelector('#player')
let computerScore=document.querySelector('#comp')

function choose() {
  
    const myChoice=this.dataset.id
    playerSelect.src=`/images/${choices[myChoice]}`

    const computerChoice=randomChoose()

    let result= ''
  
    if(myChoice==computerChoice) {
        result="Try again"
    
    }
    else if(myChoice==0 && computerChoice==2 || myChoice==1 && computerChoice==0 || myChoice==2 && computerChoice==1  ) {
    pScore++
    playerScore.innerHTML=pScore
     result="You win"
}
else {
    result="You lose"
    cScore++
   computerScore.innerHTML=cScore
}

resultDiv.innerHTML=result
}

function randomChoose() {
const say=Math.round(Math.random()*2)
computerSelect.src=`/images/${choices[say]}`
return say
}