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

// Existing closeModal function
function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.classList.add('fade-out');
  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove('fade-out');
  }, 400);
}

// Add this to close modal when clicking outside the image
window.addEventListener('click', function (event) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');

  if (event.target === modal) {
    closeModal();
  }
});

function outsideClick(event) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  // If clicked target is the modal itself (not the image or close button)
  if (event.target === modal) {
    closeModal();
  }
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

//function for live price display
const stylePrices = {
  "Fulani Braids - $140": 140,
  "Jumbo Braids - $80": 80,
  "Large Braids - $100": 100,
  "Medium Braids - $150": 150,
  "Small Braids - $220": 220,
  "Men's Braids - $40": 40,
  "Stitch Braids - $80": 80
};

const extrasPrices = {
  "Home Service": 50, // base rate
  "Boho Braids": 20,
  "Blow Drying": 20,
  "Hair Stretch": 20,
  "Beads Medium": 20,
  "Beads Small": 30
};

const styleSelect = document.getElementById('hairstyle');
const checkboxes = document.querySelectorAll('input[name="extras"]');
const priceOutput = document.getElementById('priceOutput');

function updatePrice() {
  let total = 0;

  const selectedStyle = styleSelect.value;
  if (selectedStyle && stylePrices[selectedStyle]) {
    total += stylePrices[selectedStyle];
  }

  checkboxes.forEach(box => {
    if (box.checked && extrasPrices[box.value]) {
      total += extrasPrices[box.value];
    }
  });

  priceOutput.textContent = `$${total}`;
}

styleSelect.addEventListener('change', updatePrice);
checkboxes.forEach(box => box.addEventListener('change', updatePrice));
  
