const button = document.querySelector("button")
button.addEventListener("click", guesses)

const efectiveGuesses = []
const word = 'disciplina'
const parts = Array.from(document.querySelectorAll(".parte"))
let error = 0
let win
const maxErrors = parts.length
const darth = document.querySelector("#darth-vader")
const border = document.querySelector(".boneco")

showWord()   //just to show the amount of letters in the beginning

function showWord() {
    let answer = ''
    for (i=0; i < word.length; i++) {
        if (efectiveGuesses.includes(word[i])) {
            answer = answer + `<span class="letra">${word[i]}</span>`
        }
        else if (word[i] === " ") {
            answer = answer + " "
        }
        else {
            answer = answer + '<span class="letra">_</span>'
        }
    }
    const letters = document.querySelector(".palavra").innerHTML = answer
    if (!letters.includes("_")) {
        alert("Você venceu!!")
        win = 1
        const victory = document.querySelector("#win")
        victory.style.width = "400px"
        darth.style.visibility = "hidden"
        border.style.border = "0"
    }
}
function guesses() {
    if (win === 1) {
        alert("Você já venceu!")            // already won
        return
    }
    if (error === maxErrors) {              // already lost
        alert("Você perdeu!")
        return
    }
    const guess = prompt("Chute uma letra:")
    if (guess === null) {                   // if just cancel the prompt
        return
    }
    if (efectiveGuesses.includes(guess)) {   // same guess letter
        alert("Chute já efetuado!")
        return
    }
    
    efectiveGuesses.push(guess)
    
    if (word.includes(guess)) {
        showWord()
    }
    else {
        error++
        for (i = 0; i < error; i++) {
            parts[i].setAttribute("class", "mostrar")
        }
        /*if (error === 1) {
            document.querySelector(".cabeca").setAttribute("class", "mostrar")
        }
        else if (error === 2) {
            document.querySelector(".braco-esquerdo").setAttribute("class", "mostrar")
        } ... */
        if (error === maxErrors) {
            alert("Você perdeu!")
        }
        else {
            alert("Chute errado, tente novamente!")
        }
    }
}