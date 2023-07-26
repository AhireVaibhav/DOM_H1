let head = document.getElementsByTagName('h1')
head[1].addEventListener('click',() => {
    head[1].innerHTML = "Hello World"
})


// Q.5

let repl = document.getElementById('replace');
function replace(){
    repl.innerHTML = "Welcome to Elevtion Academy";
}

// Q.6

let count = 0;
head[2].addEventListener('click', ()=>{
    if(count%2 === 0){
        head[2].style.color="red";
        count++
    }
    else{
        head[2].style.color = "blue";
        head[2].innerHTML = "Hello";
        count--;
    }
})


// Q .7 

let c = 0;
let parent = document.querySelector('.parent');
function direction(){
    if(c%2 === 0 ){
        parent.style.display = "block";
        c++;
    }
    else{
        parent.style.display = "flex";
        c--;
    }
}

// Q.9

let displ = document.querySelectorAll('h1')
displ[3].addEventListener("click",()=>{
    function startClock(){
        let time = new Date();
        let hrs = time.getHours();
        let min = time.getMinutes();
        let secs = time.getSeconds();
        displ[4].innerHTML = hrs + ':' + min + ':' + secs 
    }

    setInterval(()=>{
        startClock();
        displ[4].innerHTML = hrs + ":" + min + ":" + secs
    },1000)
})