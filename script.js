let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgamebtn = document.querySelector(".newbutton");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno = true;

let arr = ["apple","banana","lichi"];
arr2 = [["apple","chikk"],["potato","mashroom"],["pants","shirt"]];

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was click");
        if (turno){
            box.innerText = "x";
            turno = false;
        }else
        {
            box.innerText = "o";
            turno = true;
        }
    
        box.disabled = true;

        checkwinner();
    });
});

const disabledBox = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabledBox = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}



const showWinner =(winner) =>{
    msg.innerText = `congratulations winner ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledBox();

};

const checkwinner = () =>{
    for( let pattern of winpattern){
       
        let pos1val =  boxes[pattern[0]].innerText; 
        let pos2val =  boxes[pattern[1]].innerText;
        let pos3val =  boxes[pattern[2]].innerText;
            
        if(pos1val != "" && pos2val !="" && pos3val != ""){

            if(pos1val === pos2val && pos2val ===pos3val){
                console.log("winner", pos1val)
                showWinner(pos1val);
            }

        }


            
    }
}


const resetgame = () =>{

    turno = true;
    enabledBox();
    msgcontainer.classList.add("hide");
}

newbutton.addEventListener("click",resetgame)
reset.addEventListener("click", resetgame)