function finalizeOrder() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (name && email && phone) {
        // Validate other required fields
        alert("Order placed successfully!");
    } else {
        alert("Please fill in the required fields.");
    }

    // Here, you should ideally send data to your server and handle it securely.
}
