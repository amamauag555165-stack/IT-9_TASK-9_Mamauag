function check(doorNumber) {
    if (doorNumber === 2) {
        result.textContent = " Correct! Quest Complete";
        result.className = "alert alert-success mt-3 mb-0";
    } else {
        result.textContent = " Wrong door. Try again!";
        result.className = "alert alert-danger mt-3 mb-0";
    }
}