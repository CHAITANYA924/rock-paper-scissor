
let choises = document.querySelectorAll(".choise");
let msg = document.querySelector("#msg")
let yourCount = 0;
let compCount = 0;
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
choises.forEach((choise)=>{
    choise.addEventListener("click",()=>{
        let userChoise = choise.getAttribute("id")
        usergame(userChoise);
    })
})
//user choise//

let usergame=(user)=>{
    console.log("this is userChoise=",user)
    let compCho = compChoise()
    console.log("This is computer choise=", compCho)
    if(user === compCho){
        msg.innerText='match was draw';
         msg.style.backgroundColor = "yellow";
    msg.style.color = "green";
        console.log("match was draw")
    }else{
        let choise = true;
        if(user ==="rock"){
        choise= compCho === "paper" ? false:true;
        }else if(user === "paper"){
            choise = compCho === "scissors" ? false:true;
        }else{
                choise = compCho === "rock" ? false:true;
        }
        ownGame(choise,user,compCho)
    }
}
//computer Choise//
let compChoise=()=>{
    let arr = ["rock","paper","scissors"];
    let ranInx = Math.floor(Math.random()*3);
    return arr[ranInx]


}

let ownGame=(choise,user,compCho)=>{
if(choise){
    yourCount ++;
    userScore.innerText= yourCount ++;
    msg.innerText = `${user} own by ${compCho}`
    msg.style.backgroundColor = "green"
    msg.style.color = "white"
    console.log("user own the match")
}else{
    compCount ++;
    compScore.innerText= yourCount ++;
    msg.innerText=`${compCho} own by ${user}`;
     msg.style.backgroundColor = "red"
    msg.style.color = "black"
  console.log("computer own the match")
}
}