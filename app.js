let images=document.querySelectorAll(".img");
let comp=document.querySelector(".compChoice");
let resulti=document.querySelector(".result");
let result;
let h=comp.children.item(0);
let playerChoice;
let imazh=document.querySelector(".imazhh");
let userScore=document.querySelector(".userScore");
let compScore=document.querySelector(".compScore");
let scoreOfUser=0;
let scoreOfComp=0;
images.forEach(img=> {
img.addEventListener('click', ()=>{
addOpacity();
img.classList.remove("opacity");
playerChoice=img.alt;
let comp=generateCompChoice();
resultFunc(comp,playerChoice);
createImg(comp);
finalResult(scoreOfUser,scoreOfComp);

})
})




function generateCompChoice() {
let choices=["rock", "scissors", "paper"];
let random= Math.floor(Math.random() *3);

let compChoice=choices[random];
console.log(compChoice);
return compChoice;
}

function createImg(choice){
let source=`${choice}.jpg`;
h.setAttribute("src",source );
imazh.style.visibility="visible";
}

function resultFunc(comp, user) {
if(user==comp) {

result="It's a draw"

}
else if((user=="paper" && comp=="rock")
|| (user=="scissors" && comp=="paper")
|| (user=="rock" && comp=="scissors")) {
result="User wins!";
scoreOfUser++;

}
else {

result="Computer wins!";
scoreOfComp++;
}

resulti.innerHTML=result;
userScore.innerHTML=scoreOfUser;
compScore.innerHTML=scoreOfComp;

}


function addOpacity() {

images.forEach(img=> {
img.classList.add("opacity");


})

}



function finalResult(userRes, compRes) {

if(userRes==10)
{
userScore.innerHTML=scoreOfUser;
alert("User won!")
resulti.innerHTML="<b>Not played yet</b>";
scoreOfUser=0;
scoreOfComp=0;
userScore.innerHTML=scoreOfUser;
compScore.innerHTML=scoreOfComp;
imazh.style.visibility="hidden";
addOpacity();


}
else if(compRes==10) {
    alert("Compr won!")
    resulti.innerHTML="<b>Not played yet</b>";
    scoreOfUser=0;
    scoreOfComp=0;
    userScore.innerHTML=scoreOfUser;
    compScore.innerHTML=scoreOfComp
    imazh.style.visibility="hidden";
    addOpacity();
}

}