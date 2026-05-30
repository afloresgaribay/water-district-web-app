function checkMeter() {
document.getElementById("status-value").textContent = "Checked ✅";

var today = new Date();
var dateString = today.toLocaleDateString();

document.getElementById("message").textContent = "✅ Meter checked on " + dateString + ".No issues found.";
document.querySelector("button").disabled = true;
document.querySelector("button").textContent = "Check Complete";
}

function resetMeter(){
  document.getElementById("status-value").textContent = "Active";
  document.getElementById("message").textContent = "";
  document.querySelector("button").disabled = false;
  document.querySelector("button").textContent = "Check Meter Status";
}

/* checkMeter() runs when the button is clicked 
   resetMeter() resets everything back to normal */

/* document references the HTML page
   getElementById finds HTML element by it's id
   .textContent references the text inside the element
   querySelector finds and returns the first HTML element */

/* new Date() references JavaScript's built-in clock
 .toLocaleDateString() converts the date to a readable string */

/* .disabled = true makes the button unclickable */

  
