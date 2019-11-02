var secretNumber = Math.floor(Math.random() * 10);
var numInput = document.querySelector("input");
var message = document.getElementById("message");
var num = document.getElementById("correctNum");

//check for changes on the input field
numInput.addEventListener("change", function () {
	//check if guess
	console.log(this.value);
	if (this.value == secretNumber) {
	    //YOU GOT IT RIGHT
	    message.textContent = "You got it right";
	    num.textContent = secretNumber;
	} else if (this.value > secretNumber) {
	    //Too high. Guess again
	    message.textContent = "Too high. Guess again";
	} else {
	    //Too Low. Guess again!
	    message.textContent = "Too Low. Guess again";
	}
	
});