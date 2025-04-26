let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0=true;

const winPatterns= [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] 
];

const resetGame =() => {
turn0 = true;
enableBoxes();
msgContainer.classList.add("hide");
}
 
boxes.forEach((box) =>{
box.addEventListener("click",()=> {
  
    if(turn0){
        box.innerText="0";
        turn0=false;
    } else{
        box.innerText= "X";
        turn0 = true;
    }
    box.disabled = true;

    checkWinner();

});
});

const disableBoxes = ()=> {
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText= `Congratulatons, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {

    let filledBoxes = 0;
    for(let pattern of winPatterns)
{
   

    let pos1Val =  boxes[pattern[0]].innerText;
    let pos2Val =  boxes[pattern[1]].innerText;
    let pos3Val =  boxes[pattern[2]].innerText;
    

    if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
        if(pos1Val === pos2Val && pos2Val  === pos3Val){
            console.log("winner",pos1Val);

            showWinner(pos1Val);
        }
    }
}


boxes.forEach((box) => {
    if (box.innerText !== "") filledBoxes++;
});

// If all boxes are filled and no winner, it's a draw
if (filledBoxes === 9) {
    showDraw();
}};

// Function to display draw message
const showDraw = () => {
msg.innerText = "It's a Draw!";
msgContainer.classList.remove("hide");
};


const enableBoxes = ()=> {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}


newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
