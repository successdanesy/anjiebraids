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

  //fuction for the accordion in the rules section
  function toggleAccordion(element) {
    const item = element.parentElement;
    const allItems = document.querySelectorAll('.accordion-item');
    
    // Optionally allow only one open at a time
    allItems.forEach(i => {
      if (i !== item) i.classList.remove('active');
    });

    item.classList.toggle('active');
  }