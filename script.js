//your JS code here. If required.
function updateTimer() {
  // Get current date & time
  let now = new Date();

  // Format it as readable string
  let dateTime = now.toLocaleString();

  // Display in timer <p>
  document.getElementById("timer").textContent = dateTime;
}

// Call immediately so it doesn’t wait 1 sec
updateTimer();

// Update every second
setInterval(updateTimer, 1000);
