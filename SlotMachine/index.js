const colInfo =  [...document.querySelectorAll('.col')]
const littleBox = document.getElementById("littleBox")
const littleBox2 = document.getElementById("littleBox2")
const littleBox3 = document.getElementById("littleBox3")
const boxArray = [littleBox, littleBox2, littleBox3]
const boxFruit = ["./img/images-removebg-preview.png", "./img/index2.png", "./img/seven-removebg-preview.png", "./img/index-removebg-preview.png"]
let index = 0
let mise = 0
const miseEl = document.getElementById("mise")
miseEl.textContent = "Mise : " + mise

function loadGame(params) {
    let index = 0
    boxArray.forEach(element => {

        for (let i = 1; i < 11; i++) {
            const img = document.createElement('img');
            const div = document.createElement('div');
            div.className = "cards" + index
            console.log(params)
            img.src = boxFruit[Math.floor(Math.random() * boxFruit.length)]
            if (params !== -1 && i === 1) {
                console.log(params)
                img.src = boxFruit[(params)]
            }
            div.appendChild(img)
            element.appendChild(div)
       }
       index++
    })
}


var animationDuration = 1000; 
var startValue = 0;
var endValue = 100;
let startTime = undefined




// const startEl = document.getElementById("start")
// startEl.onclick = 


function spin(e) {
    if (e.key === " ") {
        const winshow = document.getElementById("title")
winshow.textContent = "Spinning"
    del()
    console.log("yes")
    let number = Math.floor(Math.random() * 100) + 1
    let wins = undefined
    console.log(number)
    if (number > 99) { wins = 2}
    if (number > 90 && number <= 99) { wins = 3}
    if (number > 65 && number <= 90) { wins = 1}
    if (number <= 65) { wins = -1}
    loadGame(wins)
    const arrayCol = [
    col1 = [...document.getElementsByClassName("cards0")],
    col2 = [...document.getElementsByClassName("cards1")],
    col3 = [...document.getElementsByClassName("cards2")]
    ] 
    for (let i = 0; i < arrayCol.length; i++) {
        arrayCol[i].forEach(div => {
            if (i === 0) {
            div.id = "animation"
            } else {
                div.id = "animation" + i
            }
        })
    }
    setTimeout(function(){
        win(number)
    }, 6000)
    // win(number)
}
}


document.addEventListener('keydown', spin)


function del() {
    let delet = [...document.querySelectorAll(".cards0")]
    let delet2 = document.querySelectorAll(".cards1")
    let delet3 = document.querySelectorAll(".cards2")
console.log(delet)
    delet.forEach(elem => {console.log(elem), elem.remove()})
    delet2.forEach(elem => elem.remove())
    delet3.forEach(elem => elem.remove())
    console.log("finish")
}


// add funds
let by5 = document.getElementById("by5")
let by10 = document.getElementById("by10")
let by15 = document.getElementById("by15")

by5.onclick = function() {
    mise += 5
    miseEl.textContent = "Mise : " + mise
} 

by10.onclick = function() {
    mise += 10
    miseEl.textContent = "Mise : " + mise
} 


by15.onclick = function() {
    mise += 50
    miseEl.textContent = "Mise : " + mise
} 

// const reset = document.getElementById("reset")
// reset.onclick = function() {
//     miseEl.textContent = "Mise : " + 0
//     mise = 0
// }

// win 
function win(number) {
    const winshow = document.getElementById("title")
    if (number > 99) { 
        let won = (parseInt(mise)  * 5)
         winshow.textContent = "JackPot tu as gagné : " +  won +  "$"
        }
    if (number > 90 && number <= 99) { 
        let won = (parseInt(mise)  * 3)
        winshow.textContent = " tu as gagné : " + won +  "$"}
    if (number > 65 && number <= 90) { 
        let won = (parseInt(mise)  * 2)
        winshow.textContent = "tu as gagné : " + won +  "$"}
    if (number > 0 && number <= 65) { winshow.textContent = "PERDU CHEH " + (mise) +  "$"}
}