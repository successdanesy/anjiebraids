document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});


//JavaScript for Modal
  function openModal(src) {
    document.getElementById('modalImage').src = src;
    document.getElementById('imageModal').style.display = "block";
  }

  function closeModal() {
    document.getElementById('imageModal').style.display = "none";
  }