
let result = document.getElementById("result")
let userCh = document.getElementById("userChoice")
let computerCh = document.getElementById("computerChoice")
let userScoorEl = document.getElementById("user-score")
let computerScoorEl = document.getElementById("computer-score")
let btns = document.querySelectorAll(".btns")
let btnId
userScoor = 0
computerScoor = 0
for(let i = 0 ; i < btns.length ; i++){
    btnId = btns[i].id
}
btns.forEach(btn => {
    btn.addEventListener("click", function(){
        userChoice = this.id
        play(userChoice)
    })
})
function computerPlay(){
    let choices = ["paper", "rock", "scissors"];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function play(){
    computerChoice = computerPlay()
    if(userChoice === computerChoice){
        userCh.innerHTML = `Your choice : ${userChoice}`
        computerCh.innerHTML = `Computer choice : ${computerChoice}`
        result.innerHTML = "It's a tie!"
        result.style.color = "blue"
    }else if(
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")) {
        userCh.innerHTML = `Your choice : ${userChoice}`
        computerCh.innerHTML = `Computer choice : ${computerChoice}`
        result.innerHTML = `You win ! ${userChoice} beats ${computerChoice}`
        result.style.color = "green"
        userScoor++
        userScoorEl.textContent = userScoor
    }else{
        userCh.innerHTML = `Your choice : ${userChoice}`
        computerCh.innerHTML = `Computer choice : ${computerChoice}`
        result.innerHTML = `You lose !  ${computerChoice} beats ${userChoice}`
        result.style.color = "red"
        computerScoor+= 1
        computerScoorEl.textContent = computerScoor
    }
}











