var counterContainer = document.querySelector(".website-counter");
var visitCount = localStorage.getItem("page_view");
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Function to update the server time display
function updateServerTime() {
  var serverTimeElement = document.getElementById("server-time");

  // Get the current date and time from the server
  var serverTime = new Date();

  // Format the server time as HH:MM:SS
  var hours = serverTime.getHours().toString().padStart(2, "0");
  var minutes = serverTime.getMinutes().toString().padStart(2, "0");
  var seconds = serverTime.getSeconds().toString().padStart(2, "0");
  var formattedTime = hours + ":" + minutes + ":" + seconds;

  // Update the server time display
  serverTimeElement.textContent = formattedTime;
}

// Update the server time every second
setInterval(updateServerTime, 1000);

var loader = document.getElementById("preload");
window.addEventListener("load",function(){
  loader.style.display="none";
})