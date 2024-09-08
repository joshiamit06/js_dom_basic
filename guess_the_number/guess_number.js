let random_no = parseInt(Math.random() * 100+1)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault() // it is a form so by default value goes to server when user fills it.
        const guess = parseInt(userInput.value)
        if(guess){
            validateGuess(guess)
        }
        else{
            alert("Please enter guess value")
        }
        
    })
}

function validateGuess(guess){
    if(isNaN(guess) && guess < 1 && guess > 100){
        alert("Please enter a valid number")
    }else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${random_no}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}


function checkGuess(guess){
    if(guess === random_no){
        displayMessage("You guessed it right..!!")
        endGame()
    }else if(guess < random_no){
        displayMessage("Number is too low")
    }
    else if(guess > random_no){
        displayMessage("Number is too high")
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} ,`
    numGuess++
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        random_no = parseInt(Math.random() * 100+1)
        prevGuess=[]
        numGuess=1
        guessSlot.innnerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

function endGame(){
    userInput.value = ''
    guessSlot.innerHTML=''
    remaining.innerHTML=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}