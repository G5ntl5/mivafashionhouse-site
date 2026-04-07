// Simple Countdown Timer to African Fashion Fashion Week
function updateTimer() {
    // Set the date we're counting down to (December 15, 2026)
    var countDownDate = new Date("December 15, 2026 20:00:00").getTime();
    
    // Get today's date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the element with id="timer"
    document.getElementById("timer").innerHTML = 
        days + "Days " + hours + "Hrs " + minutes + "Min " + seconds + "Sec";
    
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").innerHTML = "EVENT STARTED!";
    }
}

// Update the count down every 1 second
var timerInterval = setInterval(updateTimer, 1000);

// Run once immediately so no delay
updateTimer();
