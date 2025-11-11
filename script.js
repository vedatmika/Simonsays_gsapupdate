
// two arrays are created as a container to store game sequence which is generated randomnly and userSequence which are the buttons pressed by the user
let gameSeq = [];
let userSeq = [];



//For selecting a random button first we have made an array of all the buttons
let btns = ["yellow", "red", "purple", "green"];
// making variable started to make it true whenever a key is pressed on a whole document 
// so we add queryselector to the whole document and make it true 
// and variable level is used to keep track of level and based on that number
// we are making changes in the game
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;

        levelUp()
    }
});





function gameFlash(btn) {
    //we have made a class flash that will run for only slight duration 
    //making background colour of the random button white and then removing 
    //the white colour
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn) {
    //we have made a class flash that will run for only slight duration 
    //making background colour of the clicked button green and then removing 
    //the white colour
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}






function levelUp() {
    // after leveling up the usersequence is again emptied 
    userSeq = [];
    level++;
    h2.innerText = `Level-${level}`;
    //random button choose
    let randIdx = Math.floor(Math.random() * 3);
    //selecting the color of randIdx
    let randColor = btns[randIdx];
    //randcolor will generate one the 4 classes which are in array yellow,green,red,blue
    //Thus selecting a button that will have the class same as the generated color
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    //ab jaise hi random colour generate hoga usko humlog usse gameseq mein add krdenge
    console.log(gameSeq);
    gameFlash(randBtn);

}






//check answer fucntion to check if the user pressed button is matching last button of the game sequence
function checkAns(idx) {
    // console.log("current level",level)
    if (userSeq[idx] === gameSeq[idx]) {
        //length of level , array of user sequence and game sequence will be same
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        //if user pressed button is not same as last button of game sequence then the game will be over.
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br/>Press any key to start again.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 300)//after 3ms the body will again be white after red  background flash
        reset();
    }
}



//btn press function is triggered whenever user presses a new button firstly userflash is triggered which gives the button green colour and the
// checkAnswer function is triggered which will check that whether the user input is same as the last element in the game sequence
// and accordingly if the answer is true it will level up and if wrong the game gets over after which reset() is triggered.
function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}
//we are collecting all buttons in allBtns and then we iterate to 
// add event listner in it whenever we click a particular button
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress)
}




function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

// document.addEventListener("DOMContentLoaded", function() {
//     const music = document.getElementById("background-music");
//     music.play().catch(function(error) {
//         console.log("Autoplay was prevented. Trying to play again with user interaction.");
//     });

//     document.addEventListener("click", function() {
//         music.play();
//     });
// });





// Gsap
gsap.from(".yellow",{
    x:-1200,
    rotate:360,
    duration:1.5,
})
gsap.from(".green",{
    x:10,
    stagger:1,
    rotate:360,
    duration:1.5,
})
gsap.from(".red",{
    y:100,
    stagger:1,
    rotate:360,
    duration:1.5,
})
gsap.from(".purple",{
    x:-1200,
    stagger:1,
    rotate:360,
    duration:1.5,
})
gsap.from(".heading2",{
    y:-100,
    duration:1,
    
})
gsap.from(".gamename",{
    y:-100,
    duration:1,
    stagger:1,

})

