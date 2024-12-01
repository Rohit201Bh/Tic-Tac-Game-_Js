let boxes= document.querySelectorAll(".Box");
let resetbtn= document.querySelector("#reset");
let newGame= document.querySelector("#newgame");
let msgContainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");


let turnO=true;  // playerX, playerO

const winPatterns =[       // to store winning pattrens
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const resetGame = () =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((Box) => {
    Box.addEventListener("click", () => {
    if(turnO){   // turn of player O
        Box.innerText ="0";
        turnO=false;
    } else {     //turn of player X 
        Box.innerText ="X";
        turnO= true;
    }
    Box.disabled=true;
    checkWinner();
    });

});

const disableBoxes =() =>{ // after winning game one cannot click on boxso butten is disabled.
    for(let Box of boxes){
        Box.disabled=true;
    }
}
const enableBoxes =() =>{ // after winning game one cannot click on boxso butten is disabled.
    for(let Box of boxes){
        Box.disabled=false;
        Box.innerText="";// to empty boxex after new game
    }
}

const showWinner=(winner) => {
    msg.innerText=`❤️Yeeee Congratulations Winner is ${winner} 🥳🥳`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
    


const checkWinner= () => {
    for(let pattren of winPatterns) {

        let pos1Val= boxes[pattren[0]].innerText;
        let pos2Val= boxes[pattren[1]].innerText;
        let pos3Val= boxes[pattren[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !="" ) {
            if(pos1Val===pos2Val && pos2Val ===pos3Val) {
                showWinner(pos1Val);
            }

        }
    }   
}

newGame.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);