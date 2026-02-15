function submitname() {
    // Get the value from the input
    let name = document.getElementById("submitnameform").value;

   
    let existingMessage = document.getElementById("message");


    if (!existingMessage) {
        existingMessage = document.createElement("p");
        existingMessage.id = "message";
        existingMessage.classList.add("fw-bold");
      
        let inputField = document.getElementById("submitnameform");
        inputField.parentNode.appendChild(existingMessage);
    }

    // Validate
    if (name.trim() === "") {
        existingMessage.innerText = "Error: Name cannot be empty!";
        existingMessage.style.color = "red";
    } else {
        existingMessage.innerText = "Success! Hello, " + name + " 🎉";
        existingMessage.style.color = "green";
    }
}
