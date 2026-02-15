let coincount = 0;

const conDisplay = document.getElementById("coinDisplay");


function append() {
    coincount++;                // increase coin count
    coinDisplay.textContent = coincount; // update display
}

function decrease() {
    if (coincount > 0) {
        coincount--;            // decrease coin count
        coinDisplay.textContent = coincount; // update display
    }
}