// var initialvalue = 100;
// var highscore = null;
// var randomNumber = random(100);
// function random(n){
//     return Math.floor(Math.random()*n)+1
//     console.log(Math.floor(Math.random()*n)+1);
// }

// function check(){
//     let inputnumber = document.getElementById("guess").value
//     if(inputnumber > randomNumber){
//         document.querySelector('.message').textContent ="your guess is high >"
//         document.querySelector(".chances").textContent=initialvalue--
//     }
//     else if(inputnumber < randomNumber){
//         document.querySelector('.message').textContent="your guess is Low>"
//         document.querySelector(".chances").textContent=initialvalue--
//     }
//     else{
//         document.body.style.backgroundColor = "green";
//         document.querySelector(".message").textContent = "Hurry you Won";
//         document.querySelector(".chances").textContent=initialvalue
//         highscore=initialvalue;
//         document.querySelector(".highscore")
//         document.querySelector(".btn").style.visibility ="hidden;"
//     }

// }


var initialValue = 100;
var randomNo = random(100);
var highs = null;
var swap = 0;

function playagain(){
    initialValue =100
    document.body.style.backgroundColor = "gray"
    document.querySelector(".chances").textContent = initialValue
    document.querySelector(".box").textContent = '?'
    document.getElementById("selectno").value = ' '
    document.querySelector(".msg").textContent = "Start Guessing..."
    document.querySelector("#check").style.visibility = "visible"
    randomNo = random(100);

}

function random(n) {
    return Math.floor(Math.random()*n)+1
}

console.log(randomNo);

function check(){
    if(initialValue != 0){
        let inputValue =document.getElementById("selectno").value
        if(inputValue > randomNo){
            document.querySelector(".msg").innerHTML = "Your Guess is High 😒😒"
            initialValue--
            document.querySelector(".chances").textContent = initialValue
        }
        else if(inputValue < randomNo){
            document.querySelector(".msg").innerHTML = "Your Guess is Low 😒😒"
            initialValue--
            document.querySelector(".chances").textContent = initialValue
        }
        else {
            document.querySelector(".msg").innerHTML = "you WON 😍👏"
            document.querySelector(".chances").textContent = --initialValue
            highs = initialValue;
            document.querySelector(".highscore").innerHTML = highs
            
            
            
            // if(swap<initialValue){
            //     swap = initialValue;
            //     highs = swap;
            //     document.querySelector(".highscore").innerHTML = highs
            // }
            // else{
            //     highs =initialValue;
            //     swap = highs;
            //     document.querySelector(".highscore").innerHTML = highs;
            // }
            
            
            document.querySelector("#check").style.visibility = "hidden"
            document.querySelector(".box").textContent=randomNo
            document.querySelector(".box").style.backgroundColor = "red";
            // document.body.style.backgroundColor = "gray"
            document.body.style.backgroundColor = "yellowgreen";

        }
    }
    else{
        document.querySelector(".guess").textContent = "Game Over Your score is zero ... Play Again:"
    }
}
























