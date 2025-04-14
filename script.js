document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");
  const header = document.querySelector(".main-header");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuIcon.classList.toggle("active");
    header.classList.toggle("menu-open"); // Toggles background on header
  });

  // Sticky scroll color change
  const mainHeader = document.querySelector('.main-header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      mainHeader.classList.add('slidedown');
    } else {
      mainHeader.classList.remove('slidedown');
    }
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

  //function to open the modal with a caption
  function openModal(src, captionText = "") {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');

  modal.style.display = "block";
  modalImg.src = src;
  modalCaption.innerHTML = captionText;
}

//function to allow bookings only on weekends
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  const dateTimeInput = document.getElementById('date').value;
  const errorDiv = document.getElementById('dateError');

  if (!dateTimeInput) return;

  const appointmentDate = new Date(dateTimeInput);
  const day = appointmentDate.getDay(); // 0 (Sun) to 6 (Sat)
  const hour = appointmentDate.getHours();

  const isWeekend = (day === 0 || day === 6);
  const isInTimeRange = (hour >= 10 && hour < 21); // 10am - 9pm (before 21)

  if (!isWeekend || !isInTimeRange) {
    errorDiv.style.display = 'block';
    e.preventDefault();
  } else {
    errorDiv.style.display = 'none';
  }
});
  
