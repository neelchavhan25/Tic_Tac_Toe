let turn ="X";
let gameover=false;

//function to change the turn
const ChangeTurn=()=>{
    return turn==="X"?"0":"X";
}

//function check win
const Checkwin=()=>{
    let boxtexts=document.getElementsByClassName("boxtext");
   let wins=[[0,1,2,2.5,5,0],
             [3,4,5,2.5,15,0],
             [6,7,8,2.5,25,0],
             [1,4,7,-7,15,90],
             [2,5,8,2.5,15,90],
             [0,3,6,13,15,90],
             [0,4,8,2.5,15,45],
             [2,4,6,2.5,15,135]
        ]
    wins.forEach(e=>{
        if(boxtexts[e[0]].innerText===boxtexts[e[1]].innerText && boxtexts[e[1]].innerText===boxtexts[e[2]].innerText && boxtexts[e[0]].innerText!==""){
            document.getElementsByClassName("info")[0].innerText=boxtexts[e[0]].innerText +" has won the game";
            document.querySelector(".line").style.width="25vw";
            document.querySelector(".line").style.transform=`translate(${e[3]}vw, ${e[4]}vw)rotate(${e[5]}deg)`;
            gameover=true;
            document.querySelector(".container").classList.add("disable");
            
        }
    })
}
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext= element.querySelector(".boxtext");
    element.addEventListener("click",(e)=>{
        if(boxtext.innerText== ""){
            boxtext.innerText=turn;
            turn =ChangeTurn();
            Checkwin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText="turn for "+turn;
            }
            
        }
       
    })
});

let reset=document.querySelector("button");
reset.addEventListener("click",()=>{
    let boxs=document.getElementsByClassName("box");
    Array.from(boxs).forEach(element =>{
        let boxtext= element.querySelector(".boxtext");
        boxtext.innerText="";
    })
    turn="X";
    document.getElementsByClassName("info")[0].innerText="turn for "+turn;
    document.querySelector(".line").style.width="0";
    document.querySelector(".container").classList.remove("disable");

})