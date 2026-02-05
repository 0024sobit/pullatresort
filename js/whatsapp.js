{/* <script> */}
document.getElementById("availabilityForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent actual form submission

    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;
    let adults = document.getElementById("adults").value;
    let children = document.getElementById("children").value;
    let roomtype = document.getElementById("roomtype").value;

    let message =
        "Hello, I would like to check availability:%0A" +
        "Check-in: " + checkin + "%0A" +
        "Check-out: " + checkout + "%0A" +
        "Adults: " + adults + "%0A" +
        "Children: " + children + "%0A" +
        "Room Type: " + roomtype;

    let whatsappNumber = "9744248350"; // ← your number

    let whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + message;

    window.open(whatsappURL, "_blank");
});
{/* </script> */}
