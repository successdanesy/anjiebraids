document.querySelector("form").addEventListener("submit", function(event) {
    let fileInput = document.getElementById("proof");
    if (fileInput.files.length === 0) {
        event.preventDefault();
        alert("Please upload proof of payment.");
    }
});
