// scripts.js
window.onload = function () {
    // Set the date for the start of Ramadan (change this date as needed)
    const ramadanStartDate = new Date("2025-03-26T00:00:00").getTime();

    // Update the countdown every 1 second
    const countdown = setInterval(function () {
        let now = new Date().getTime();
        let distance = ramadanStartDate - now;

        // Time calculations
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the "countdown-timer" element
        document.getElementById("countdown-timer").innerHTML =
            days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        // If the countdown is over
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById("countdown-timer").innerHTML = "Ramadan Mubarak!";
        }
    }, 1000);
};
