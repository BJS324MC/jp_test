const homeBtn = document.getElementById("home-btn"),
aboutBtn = document.getElementById("about-btn")

homeBtn.addEventListener("click",() => location.href = "index.html")
aboutBtn.addEventListener("click",() => location.href = "about.html")

const mainBtn = document.getElementById("main-btn"),
textInput = document.getElementById("jp-input"),
displayText = document.getElementById("display-text"),
jpText = document.getElementById("jp-text");

let testCount = 0,
btnState = 0,
question = "",
answer = "";

function begin(){
    mainBtn.innerText = "Enter"
    newQuestion()
    textInput.style.display = "block"
}
function newQuestion(){
    testCount++
    if (Math.random() > 0.5){
        question = Object.keys(hiragana)[Math.floor(Math.random() * 107)]
        answer = hiragana[question]
    }
    else {
        question = Object.keys(katakana)[Math.floor(Math.random() * 107)]
        answer = katakana[question]
    }
    displayText.innerText = "Q" + testCount
    jpText.innerText = question
}
function enter(){
    if(textInput.value == answer){
        newQuestion()
    }
    else{
        end()
    }
    textInput.value = ""
}
function end(){
    btnState = 2
    mainBtn.innerText = "Exit"
    displayText.innerText = "Total Score:"
    jpText.innerText = testCount - 1
    textInput.style.display = "none"
    testCount = 0
}
function exit(){
    mainBtn.innerText = "Begin"
    displayText.innerText = "Hiragana & Katakana"
    jpText.innerText = "?"
}
function main(){
    switch(btnState){
        case 0:
            begin()
            btnState = 1
            break
        case 1:
            enter()
            break
        case 2:
            exit()
            btnState = 0
            break
    }
}

mainBtn.addEventListener("click",main)
textInput.addEventListener("keydown",e=>{if(e.key == "Enter") main();})