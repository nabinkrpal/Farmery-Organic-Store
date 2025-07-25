// js/products.js

// Define your product data
const products = [
  {
    id: 1,
    name: "Organic Apples",
    image: "images/apple.jpg",
    price: "₹120/kg",
    category: "Fruits",
    badge: "Low CO₂",
    farmer: "Jaya Kumari",
    carbonFootprint: "0.8kg CO₂",
    origin: "Nashik, Maharashtra",
    description: "Fresh, juicy organic apples grown with zero chemical pesticides."
  },
  {
    id: 2,
    name: "Zero-Waste Soap",
    image: "images/soap.jpg",
    price: "₹80",
    category: "Personal Care",
    badge: "Zero-Waste",
    farmer: "Green Bar Co.",
    carbonFootprint: "Low",
    origin: "Kochi, Kerala",
    description: "Eco-friendly, handmade soap with no plastic packaging."
  },
  {
    id: 3,
    name: "Local Broccoli",
    image: "images/broccoli.jpg",
    price: "₹95/kg",
    category: "Vegetables",
    badge: "Locally Sourced",
    farmer: "Fresh Roots Farm",
    carbonFootprint: "0.5kg CO₂",
    origin: "Ooty, Tamil Nadu",
    description: "Crunchy and fresh organic broccoli from the hills of Ooty."
  },
  {
    id: 4,
    name: "Reusable Jute Bag",
    image: "images/bag.jpg",
    price: "₹150",
    category: "Zero-Waste",
    badge: "Reusable Item",
    farmer: "Sahara Women Co-op",
    carbonFootprint: "Negligible",
    origin: "Kolhapur, Maharashtra",
    description: "Plastic-free, compostable jute bag for everyday shopping needs."
  },
  {
    id: 5,
    name: "Organic Shampoo Bar",
    image: "images/shampoo.jpg",
    price: "₹180",
    category: "Personal Care",
    badge: "Zero-Waste",
    farmer: "Earth Care",
    carbonFootprint: "Low",
    origin: "Pune, Maharashtra",
    description: "Chemical-free solid shampoo bar with zero plastic packaging."
  },
  {
    id: 6,
    name: "Organic Bananas",
    image: "images/banana.jpg",
    price: "₹60/kg",
    category: "Fruits",
    badge: "Locally Sourced",
    farmer: "Sunrise Farms",
    carbonFootprint: "0.7kg CO₂",
    origin: "Wayanad, Kerala",
    description: "Sweet and fresh organic bananas delivered from nearby groves."
  },
  {
    id: 7,
    name: "Herbal Tea Leaves",
    image: "images/tea.jpg",
    price: "₹250/100g",
    category: "Personal Care",
    badge: "Organic",
    farmer: "Green Leaf Plantation",
    carbonFootprint: "Low",
    origin: "Darjeeling, West Bengal",
    description: "Premium herbal tea leaves grown naturally in the mountains."
  },
  {
    id: 8,
    name: "Organic Carrots",
    image: "images/carrots.jpg",
    price: "₹80/kg",
    category: "Vegetables",
    badge: "Low CO₂",
    farmer: "Rooted Farms",
    carbonFootprint: "0.4kg CO₂",
    origin: "Punjab",
    description: "Crunchy and nutrient-rich organic carrots, freshly harvested."
  },
  {
    id: 9,
    name: "Handmade Beeswax Candles",
    image: "images/candles.jpg",
    price: "₹90/each",
    category: "Zero-Waste",
    badge: "Eco-Friendly",
    farmer: "Honey Glow",
    carbonFootprint: "Negligible",
    origin: "Nagpur, Maharashtra",
    description: "Natural beeswax candles with zero synthetic ingredients."
  },
  {
    id: 10,
    name: "Organic Lentils",
    image: "images/lentils.jpg",
    price: "₹130/kg",
    category: "Vegetables",
    badge: "Organic",
    farmer: "Village Pulse",
    carbonFootprint: "Low",
    origin: "Rajasthan",
    description: "Nutrient-dense organic lentils, ideal for sustainable cooking."
  }

];

// Export it globally (if needed)
window.products = products;
