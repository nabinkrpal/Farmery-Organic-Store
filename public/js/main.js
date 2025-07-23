// Responsive nav hamburger menu on mobile
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if(hamburger && navLinks) {
    hamburger.onclick = () => navLinks.classList.toggle('show');
  }

  // Featured products on homepage
  if(document.getElementById('featured-products')) {
    const featured = [
      { img: 'images/apple.jpg', name: 'Organic Apples', price: '₹120/kg', badge: 'Low CO₂' },
      { img: 'images/soap.jpg', name: 'Zero-Waste Soap', price: '₹80', badge: 'Zero-Waste' },
      { img: 'images/broccoli.jpg', name: 'Local Broccoli', price: '₹95/kg', badge: 'Locally Sourced' }
    ];
    const container = document.getElementById('featured-products');
    featured.forEach(p => {
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
      author: "Meena S., Mumbai"
    },
    {
      text: "Finally a platform where organic is transparent and affordable.",
      author: "Rajiv P., Bengaluru"
    },
    {
      text: "Switched to zero-waste shampoo from here. Works wonders and no plastic!",
      author: "Shivani D., Pune"
    }
  ];
  let tIndex = 0;
  if(document.querySelector('.testimonials')) {
    const container = document.querySelector('.testimonials');
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
    window.nextTestimonial = function() {
      tIndex = (tIndex+1)%testimonials.length;
      renderTestimonial(tIndex);
    }
    window.prevTestimonial = function() {
      tIndex = (tIndex-1+testimonials.length)%testimonials.length;
      renderTestimonial(tIndex);
    }
    renderTestimonial(0);
  }

  // "Did you know" fact (footer)
  if(document.getElementById('did-you-know')) {
    const facts = [
      "Did you know? Buying local can reduce food miles by over 30%.",
      "Did you know? Composting reduces methane emissions from landfills.",
      "Did you know? Bike delivery = zero CO₂ emissions per order!"
    ];
    document.getElementById('did-you-know').textContent = facts[Math.floor(Math.random()*facts.length)];
  }
});

// Simulate shop grid (shop.html)
if(document.getElementById('product-grid')) {
  const allProducts = [
    { img: 'images/apple.jpg', name: 'Organic Apples', price: '₹120/kg', badge: 'Low CO₂', category: 'Fruits' },
    { img: 'images/orange.jpg', name: 'Mandarin Oranges', price: '₹100/kg', badge: 'Low CO₂', category: 'Fruits' },
    { img: 'images/broccoli.jpg', name: 'Local Broccoli', price: '₹95/kg', badge: 'Locally Sourced', category: 'Vegetables' },
    { img: 'images/soap.jpg', name: 'Zero-Waste Soap', price: '₹80', badge: 'Zero-Waste', category: 'Personal Care' },
    { img: 'images/bag.jpg', name: 'Reusable Jute Bag', price: '₹150', badge: 'Zero-Waste', category: 'Zero-Waste' },
    { img: 'images/shampoo.jpg', name: 'Organic Shampoo Bar', price: '₹180', badge: 'Zero-Waste', category: 'Personal Care' }
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
if(document.getElementById('newsletter')) {
  document.getElementById('newsletter').onsubmit = function(e) {
    e.preventDefault(); alert("Thank you for subscribing! 🌱");
  }
}

// Contact form
if(document.querySelector('.contact-form form')) {
  document.querySelector('.contact-form form').onsubmit = function(e) {
    e.preventDefault();
    alert("Thank you for contacting us! We'll reply soon.");
  }
}
