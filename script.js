document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuIcon.classList.toggle("active"); // <-- Adds/removes the .active class for the X
  });
});


//function for sidebar menu
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('nav-links').classList.toggle('active');
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

  //function for sticky navbar with color when scrolling
  const mainMenu = document.querySelector('.main-head');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    mainMenu.classList.add('slidedown');
  } else {
    mainMenu.classList.remove('slidedown');
  }
});
