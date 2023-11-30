let moleappear;
let plantappear;
let score = 0;
let gameover=false;

window.onload = function(){
    setgame();
}

function setgame (){
    //set up the grid for the game board in html
    for(i=0;i<9;i++){// i goes from 0 to 8, stops at 9 
        //<div id="0to8" ></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click",selecttile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setmole,1000);
    setInterval(setplant,2000);
}

function getrandomtile() {
    let num = Math.round(Math.random()*9);
    return num.toString();
}

function setmole(){
    if(gameover){
        return;
    }
    if (moleappear) {
        moleappear.innerHTML = "";
    }
    

    let mole = document.createElement("img");
    mole.src = "./asset/monty-mole.png";

    let num = getrandomtile();
    if(plantappear && plantappear.id == num){
        return;
    }
    moleappear = document.getElementById(num);
    moleappear.appendChild(mole);

    
}

function setplant(){
    if(gameover){
        return;
    }
    
    if(plantappear){
        plantappear.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "./asset/piranha-plant.png";

    let num = getrandomtile();
    if(moleappear && moleappear.id == num){
        return;
    }
    plantappear = document.getElementById(num);
    plantappear.appendChild(plant);
}

function selecttile(){
if(gameover){
    return;
}

    if(this == moleappear){
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if (this == plantappear){
        document.getElementById("score").innerText = "Game Over: "+score.toString();
        gameover = true;
    }
}
