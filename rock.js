let user_score=0;
let comp_score=0;
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let Userscore=document.querySelector("#user-score");
let Compscore=document.querySelector("#comp-score");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        
        playGame(userchoice);
    })

})
const getCompChoice=()=>{
    const options =["rock","paper","scissor"];
    const index=Math.floor(Math.random()*3);
    return options[index];

}
const gameDraw=()=>{
    
        msg.innerText=`Game was drawn`;
        msg.style.backgroundColor="black";
}

const playGame=(userchoice)=>{
    
    const compchoice=getCompChoice();
    if(compchoice===userchoice){
        gameDraw();
    }
    else {
        let UserWin=true;
        if(userchoice==="paper"){
            UserWin=compchoice==="scissor"? false:true;
        }
        else if( userchoice==="rock"){
            UserWin=compchoice==="paper"?false:true;
        
        }
        else{
        
            UserWin=compchoice==="rock"?false:true;
        }
        showWinner(UserWin,userchoice,compchoice);
    }

    
}
const showWinner=((UserWin,userchoice,compchoice)=>{
    if(UserWin){

        msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        Userscore.innerText=user_score++;
    }
    else{
        msg.innerText=`You Lost! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
        Compscore.innerText=comp_score++;
    }
})