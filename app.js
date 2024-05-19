let gameSeq=[];
let userSeq=[];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;
let highlvl = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false)
    {
        console.log("Game Started");
        started = true; 
        levelUp();
    } 
});

function gameFlash(btn){
    btn.classList.add("flash");  
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}
function userFlash(btn){
    btn.classList.add("userFlash");  
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },200);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level} Highest Level ${highlvl}`;

    let rndInd =  Math.floor(Math.random()*3);
    let rndClr =  btns[rndInd];
    let rndBtn = document.querySelector(`.${rndClr}`);
    gameSeq.push(rndClr);
    console.log(gameSeq);
    gameFlash(rndBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx])
    {
        if(userSeq.length == gameSeq.length)
        {
            setTimeout(levelUp,1000)
        }
    }
        else{
            h2.innerHTML = `Game Over!Your Score was <b>${level}</b><br> Press Any Key`;
            highlvl = level; 
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor="white";
            },150);
            reset();
        }

}

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);


}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns)
{
    btn.addEventListener('click',btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}