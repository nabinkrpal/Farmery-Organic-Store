// Responsive nav hamburger menu on mobile
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (hamburger && navLinks) {
    hamburger.onclick = () => navLinks.classList.toggle("show");
  }

  // Featured products on homepage
  if (document.getElementById("featured-products")) {
    const featured = [
      {
        img: "images/apple.jpg",
        name: "Organic Apples",
        price: "₹120/kg",
        badge: "Low CO₂",
      },
      {
        img: "images/soap.jpg",
        name: "Zero-Waste Soap",
        price: "₹80",
        badge: "Zero-Waste",
      },
      {
        img: "images/broccoli.jpg",
        name: "Local Broccoli",
        price: "₹95/kg",
        badge: "Locally Sourced",
      },
    ];
    const container = document.getElementById("featured-products");
    featured.forEach((p) => {
      container.innerHTML += `
        <div class="product-card">
          <img src="${p.img}" alt="${p.name}">
          <h3>${p.name} <span class="eco-badge">${p.badge}</span></h3>
          <div class="price">${p.price}</div>
        </div>
      `;
    });
  }

  // Simple testimonials carousel
  const testimonials = [
    {
      text: "Fast, green delivery and amazing produce! I love knowing who grew my spinach.",
      author: "Meena S., Mumbai",
    },
    {
      text: "Finally a platform where organic is transparent and affordable.",
      author: "Rajiv P., Bengaluru",
    },
    {
      text: "Switched to zero-waste shampoo from here. Works wonders and no plastic!",
      author: "Shivani D., Pune",
    },
  ];
  let tIndex = 0;
  if (document.querySelector(".testimonials")) {
    const container = document.querySelector(".testimonials");
    function renderTestimonial(i) {
      container.innerHTML = `
        <div class="testimonial-card">
          <div>${testimonials[i].text}</div>
          <div class="author">— ${testimonials[i].author}</div>
          <div class="testimonial-controls">
            <button onclick="window.prevTestimonial()">&lt;</button>
            <button onclick="window.nextTestimonial()">&gt;</button>
          </div>
        </div>`;
    }
    window.nextTestimonial = function () {
      tIndex = (tIndex + 1) % testimonials.length;
      renderTestimonial(tIndex);
    };
    window.prevTestimonial = function () {
      tIndex = (tIndex - 1 + testimonials.length) % testimonials.length;
      renderTestimonial(tIndex);
    };
    renderTestimonial(0);
  }

  // "Did you know" fact (footer)
  if (document.getElementById("did-you-know")) {
    const facts = [
      "Did you know? Buying local can reduce food miles by over 30%.",
      "Did you know? Composting reduces methane emissions from landfills.",
      "Did you know? Bike delivery = zero CO₂ emissions per order!",
    ];
    document.getElementById("did-you-know").textContent =
      facts[Math.floor(Math.random() * facts.length)];
  }
});

if(document.getElementById('product-grid')) {
  const allProducts = [
  { img: 'images/apple.jpg', name: 'Organic Apples', price: '₹120/kg', badge: 'Low CO₂', category: 'Fruits' },
  { img: 'images/soap.jpg', name: 'Zero-Waste Soap', price: '₹80', badge: 'Zero-Waste', category: 'Personal Care' },
  { img: 'images/broccoli.jpg', name: 'Local Broccoli', price: '₹95/kg', badge: 'Locally Sourced', category: 'Vegetables' },
  { img: 'images/bag.jpg', name: 'Reusable Jute Bag', price: '₹150', badge: 'Reusable Item', category: 'Zero-Waste' },
  { img: 'images/shampoo.jpg', name: 'Organic Shampoo Bar', price: '₹180', badge: 'Zero-Waste', category: 'Personal Care' },
  { img: 'images/banana.jpg', name: 'Organic Bananas', price: '₹60/kg', badge: 'Locally Sourced', category: 'Fruits' },
  { img: 'images/tea.jpg', name: 'Herbal Tea Leaves', price: '₹250/100g', badge: 'Organic', category: 'Personal Care' },
  { img: 'images/carrots.jpg', name: 'Organic Carrots', price: '₹80/kg', badge: 'Low CO₂', category: 'Vegetables' },
  { img: 'images/candles.jpg', name: 'Handmade Beeswax Candles', price: '₹90/each', badge: 'Eco-Friendly', category: 'Zero-Waste' },
  { img: 'images/lentils.jpg', name: 'Organic Lentils', price: '₹130/kg', badge: 'Organic', category: 'Vegetables' }
];
  function showProducts(list) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';
    list.forEach(p => {
      grid.innerHTML += `
        <div class="product-card">
          <img src="${p.img}" alt="${p.name}">
          <h3>${p.name} <span class="eco-badge">${p.badge}</span></h3>
          <div class="price">${p.price}</div>
        </div>
      `;
    });
  }
  showProducts(allProducts);

  document.getElementById('filter-category').addEventListener('change', e => {
    let c = e.target.value;
    showProducts(c === 'All' ? allProducts : allProducts.filter(p => p.category === c));
  });
  document.getElementById('search').addEventListener('input', e => {
    let t = e.target.value.toLowerCase();
    showProducts(allProducts.filter(p => p.name.toLowerCase().includes(t)));
  });
}

// Newsletter form
if (document.getElementById("newsletter")) {
  document.getElementById("newsletter").onsubmit = function (e) {
    e.preventDefault();
    alert("Thank you for subscribing! 🌱");
  };
}

// Contact form
if (document.querySelector(".contact-form form")) {
  document.querySelector(".contact-form form").onsubmit = function (e) {
    e.preventDefault();
    alert("Thank you for contacting us! We'll reply soon.");
  };
}

// Land slider functionality
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slider img.slide");
  const prevBtn = document.querySelector(".slider button.prev");
  const nextBtn = document.querySelector(".slider button.next");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  // Optional: Auto slide every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 3000);
});


//delivery page
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".delivery-options");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  if (!carousel || !prevBtn || !nextBtn) return;

  const cardWidth = carousel.querySelector(".delivery-card").offsetWidth;
  const gap = parseFloat(getComputedStyle(carousel).gap) || 24;

  function updateButtons() {
    prevBtn.disabled = carousel.scrollLeft <= 0;
    // +1 pixel tolerance for fractional scrollLeft
    nextBtn.disabled =
      Math.ceil(carousel.scrollLeft + carousel.clientWidth) + 1 >=
      carousel.scrollWidth;
  }

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -(cardWidth + gap), behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
  });

  // Update buttons on scroll
  carousel.addEventListener("scroll", updateButtons);

  updateButtons();

  // Optional: Add simple drag to scroll support for desktop
  let isDragging = false;
  let startX, scrollStart;
  carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX - carousel.offsetLeft;
    scrollStart = carousel.scrollLeft;
  });
  carousel.addEventListener("mouseleave", () => {
    isDragging = false;
    carousel.classList.remove("dragging");
  });
  carousel.addEventListener("mouseup", () => {
    isDragging = false;
    carousel.classList.remove("dragging");
  });
  carousel.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = startX - x; // scroll-fast factor could be added
    carousel.scrollLeft = scrollStart + walk;
  });
});


// Farmer.js

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("farmer-carousel");
  const farmers = [...carousel.querySelectorAll(".farmer-profile")];
  const prevBtn = document.getElementById("farmer-prev");
  const nextBtn = document.getElementById("farmer-next");
  let currentIndex = 0;

  function updateCarousel() {
    farmers.forEach((profile) => {
      profile.classList.remove(
        "active",
        "left",
        "right",
        "farLeft",
        "farRight"
      );
    });

    farmers.forEach((profile, idx) => {
      if (idx === currentIndex) {
        profile.classList.add("active");
      } else if (idx === (currentIndex - 1 + farmers.length) % farmers.length) {
        profile.classList.add("left");
      } else if (idx === (currentIndex + 1) % farmers.length) {
        profile.classList.add("right");
      } else if (idx === (currentIndex - 2 + farmers.length) % farmers.length) {
        profile.classList.add("farLeft");
      } else if (idx === (currentIndex + 2) % farmers.length) {
        profile.classList.add("farRight");
      }
    });
  }

  prevBtn?.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + farmers.length) % farmers.length;
    updateCarousel();
  });

  nextBtn?.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % farmers.length;
    updateCarousel();
  });

  // === Swipe support for mobile ===
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  carousel.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      // Swipe left → next
      currentIndex = (currentIndex + 1) % farmers.length;
      requestAnimationFrame(updateCarousel);
    } else if (touchEndX > touchStartX + 50) {
      // Swipe right → previous
      currentIndex = (currentIndex - 1 + farmers.length) % farmers.length;
      requestAnimationFrame(updateCarousel);
    }
  }

  updateCarousel();
});

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById('product-grid');
    if (grid && window.products) {
      grid.innerHTML = ""; // Clear if needed
      window.products.forEach(product => {
        grid.innerHTML += `
          <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name} <span class="eco-badge">${product.badge}</span></h3>
            <div class="price">${product.price}</div>
          </div>
        `;
      });
    }
  });