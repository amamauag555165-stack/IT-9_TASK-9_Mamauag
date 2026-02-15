let currentlevel=3;
// current level


function Addlevel(){

    if (currentlevel < 6 ){
    currentlevel ++; //increment curent level by 1
}

    let display = document.getElementById("currlevel");
    display.innerText = "Level " + currentlevel;
}