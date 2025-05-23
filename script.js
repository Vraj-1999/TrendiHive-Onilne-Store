// === Product Data ===
// Sample product data
const products = [
  // Electronics
  { id: 1, name: "Wireless Headphones", price: 59.99, category: "electronics", image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad" },
  { id: 2, name: "Smart Watch", price: 99.99, category: "electronics", image: "https://images.unsplash.com/photo-1519744346363-3f45f0b2313f" },
  { id: 3, name: "Laptop Stand", price: 29.99, category: "electronics", image: "https://images.unsplash.com/photo-1555617989-dc00f4c47f1f" },
  { id: 4, name: "Bluetooth Speaker", price: 45.00, category: "electronics", image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad" },
  { id: 5, name: "Wireless Mouse", price: 19.99, category: "electronics", image: "https://images.unsplash.com/photo-1587825140708-6d69d3b6c74f" },
  { id: 6, name: "USB-C Hub", price: 25.99, category: "electronics", image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9" },
  { id: 7, name: "4K Monitor", price: 299.99, category: "electronics", image: "https://images.unsplash.com/photo-1593642532400-2682810df593" },
  { id: 8, name: "Gaming Keyboard", price: 75.00, category: "electronics", image: "https://images.unsplash.com/photo-1579370318440-c56b1b6e32f4" },
  { id: 9, name: "Webcam", price: 49.99, category: "electronics", image: "https://images.unsplash.com/photo-1605379399642-870262d3d051" },
  { id: 10, name: "External SSD", price: 120.00, category: "electronics", image: "https://images.unsplash.com/photo-1610057096900-47e16c8fe8c1" },
  { id: 11, name: "USB-C Hub", price: 25.99, category: "electronics", image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9" },
  { id: 12, name: "4K Monitor", price: 299.99, category: "electronics", image: "https://images.unsplash.com/photo-1593642532400-2682810df593" },
  { id: 13, name: "Gaming Keyboard", price: 75.00, category: "electronics", image: "https://images.unsplash.com/photo-1579370318440-c56b1b6e32f4" },
  { id: 14, name: "Webcam", price: 49.99, category: "electronics", image: "https://images.unsplash.com/photo-1605379399642-870262d3d051" },
  { id: 15, name: "External SSD", price: 120.00, category: "electronics", image: "https://images.unsplash.com/photo-1610057096900-47e16c8fe8c1" },
  
  // Kitchen
  { id: 16, name: "Blender", price: 59.99, category: "kitchen", image: "https://images.unsplash.com/photo-1601041390505-1c750941d6b0" },
  { id: 17, name: "Toaster", price: 39.99, category: "kitchen", image: "https://images.unsplash.com/photo-1601041390334-6223b4c2440e" },
  { id: 18, name: "Coffee Maker", price: 79.99, category: "kitchen", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0" },
  { id: 19, name: "Microwave Oven", price: 89.99, category: "kitchen", image: "https://images.unsplash.com/photo-1601041390505-1c750941d6b0" },
  { id: 20, name: "Electric Kettle", price: 29.99, category: "kitchen", image: "https://images.unsplash.com/photo-1628741383135-41397897d922" },
  { id: 21, name: "Air Fryer", price: 99.99, category: "kitchen", image: "https://images.unsplash.com/photo-1643091073496-e3e0462c2160" },
  { id: 22, name: "Rice Cooker", price: 49.99, category: "kitchen", image: "https://images.unsplash.com/photo-1590080875513-899e96ff58a7" },
  { id: 23, name: "Juicer", price: 55.00, category: "kitchen", image: "https://images.unsplash.com/photo-1604754742629-3b3b9da250f4" },
  { id: 24, name: "Knife Set", price: 45.99, category: "kitchen", image: "https://images.unsplash.com/photo-1578659613364-0bbfcd4f02ef" },
  { id: 25, name: "Cooking Pot Set", price: 99.99, category: "kitchen", image: "https://images.unsplash.com/photo-1621985743435-2d7bfb5f1bc7" },
  { id: 26, name: "Air Fryer", price: 99.99, category: "kitchen", image: "https://images.unsplash.com/photo-1643091073496-e3e0462c2160" },
  { id: 27, name: "Rice Cooker", price: 49.99, category: "kitchen", image: "https://images.unsplash.com/photo-1590080875513-899e96ff58a7" },
  { id: 28, name: "Juicer", price: 55.00, category: "kitchen", image: "https://images.unsplash.com/photo-1604754742629-3b3b9da250f4" },
  { id: 29, name: "Knife Set", price: 45.99, category: "kitchen", image: "https://images.unsplash.com/photo-1578659613364-0bbfcd4f02ef" },
  { id: 30, name: "Cooking Pot Set", price: 99.99, category: "kitchen", image: "https://images.unsplash.com/photo-1621985743435-2d7bfb5f1bc7" },

  // Fitness
  { id: 31, name: "Running Shoes", price: 79.99, category: "fitness", image: "https://images.unsplash.com/photo-1599058917212-d750089bc7f9" },
  { id: 32, name: "Backpack", price: 39.99, category: "fitness", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095" },
  { id: 33, name: "Water Bottle", price: 12.99, category: "fitness", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb" },
  { id: 34, name: "Sunglasses", price: 19.99, category: "fitness", image: "https://images.unsplash.com/photo-1517849845537-4d257902454a" },
  { id: 35, name: "Yoga Mat", price: 25.00, category: "fitness", image: "https://images.unsplash.com/photo-1605106702847-19a2165d1cdd" },
  { id: 36, name: "Dumbbell Set", price: 55.00, category: "fitness", image: "https://images.unsplash.com/photo-1599058917212-d750089bc7f9" },
  { id: 37, name: "Jump Rope", price: 10.99, category: "fitness", image: "https://images.unsplash.com/photo-1610057096900-47e16c8fe8c1" },
  { id: 38, name: "Fitness Tracker", price: 65.00, category: "fitness", image: "https://images.unsplash.com/photo-1611078489935-1a564ecc2e09" },
  { id: 39, name: "Resistance Bands", price: 15.00, category: "fitness", image: "https://images.unsplash.com/photo-1610057096900-47e16c8fe8c1" },
  { id: 40, name: "Treadmill", price: 499.99, category: "fitness", image: "https://images.unsplash.com/photo-1606813904515-7fd39e499e88" },
  { id: 41, name: "Dumbbell Set", price: 55.00, category: "fitness", image: "https://images.unsplash.com/photo-1599058917212-d750089bc7f9" },
  { id: 42, name: "Jump Rope", price: 10.99, category: "fitness", image: "https://images.unsplash.com/photo-1610057096900-47e16c8fe8c1" },
  { id: 43, name: "Fitness Tracker", price: 65.00, category: "fitness", image: "https://images.unsplash.com/photo-1611078489935-1a564ecc2e09" },
  { id: 44, name: "Resistance Bands", price: 15.00, category: "fitness", image: "https://images.unsplash.com/photo-1610057096900-47e16c8fe8c1" },
  { id: 45, name: "Treadmill", price: 499.99, category: "fitness", image: "https://images.unsplash.com/photo-1606813904515-7fd39e499e88" }
];
  
  // === DOM Elements ===
  const productList = document.getElementById('productList');
  const categoryButtons = document.querySelectorAll('.category-btn');
  
  // === Render Products ===
  function renderProducts(category = 'all') {
    if (!productList) return; // only if productList exists on page
  
    productList.innerHTML = '';
  
    const filteredProducts = category === 'all'
      ? products
      : products.filter(p => p.category === category);
  
    if (filteredProducts.length === 0) {
      productList.innerHTML = '<p>No products found.</p>';
      return;
    }
  
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}" 
               onerror="this.onerror=null; const imgs=['image/1.jpg','image/2.jpg','image/3.jpg','image/4.jpg','image/5.jpeg','image/6.jpg','image/7.jpeg','image/8.jpeg','image/9.jpeg','image/10.jpeg','image/11.jpg','image/12.webp']; this.src=imgs[Math.floor(Math.random()*imgs.length)];" />
          <h3>${product.name}</h3>
          <p>$${product.price.toFixed(2)}</p>
          <button>Add to Cart</button>
        `;
        // Add to cart button functionality (example)
        card.querySelector('button').addEventListener('click', () => {
          addToCart(product);
        });
      
        productList.appendChild(card);
    });
    
      
  }
  
  // === Add to Cart ===
  function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  }
  
  // === Category Buttons Event Listeners ===
  document.addEventListener('DOMContentLoaded', () => {
    categoryButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
  
        const category = btn.getAttribute('data-category');
        renderProducts(category);
      });
    });
  
    // Render all products on page load
    renderProducts('all');
  });
  

  // Load cart from localStorage or initialize empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count in header
function updateCartCount() {
  const countElem = document.getElementById('cart-count');
  if (!countElem) return;
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  countElem.textContent = totalCount;
}

// Add product to cart
function addToCart(product) {
  if (!product.id) {
    console.error('Product missing id:', product);
    return;
  }
  
  const existingIndex = cart.findIndex(item => item.id === product.id);
  if (existingIndex !== -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(`${product.name} added to cart!`);
}

// Display products and add event listeners for add to cart buttons
function displayProducts(products) {
  const productList = document.getElementById('productList');
  if (!productList) return;
  
  productList.innerHTML = ''; // Clear existing
  
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" 
           onerror="this.onerror=null; const imgs=['image/1.jpg','image/2.jpg','image/3.jpg','image/4.jpg','image/5.jpeg','image/6.jpeg','image/7.jpeg','image/8.jpeg','image/9.jpeg','image/10.jpeg','image/11.jpg','image/12.webp']; this.src=imgs[Math.floor(Math.random()*imgs.length)];" />
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    `;
    
    card.querySelector('button').addEventListener('click', () => {
      addToCart(product);
    });
    
    productList.appendChild(card);
  });
}

// On page load, update cart count
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  // Example: load products here or fetch from your API
  // displayProducts(yourProductsArray);
});

document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElem = document.getElementById('cart-total');
    const cartCountElem = document.getElementById('cart-count');
  
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartCount() {
      const cartCountElem = document.getElementById('cart-count');
      if (cartCountElem) {
        cartCountElem.textContent = cart.length;
      }
    }
  
    function displayCartItems() {
      const cartItemsContainer = document.getElementById('cart-items');
      const cartTotalElem = document.getElementById('cart-total');
  
      if (!cartItemsContainer || !cartTotalElem) return;
  
      cartItemsContainer.innerHTML = '';
  
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        cartTotalElem.textContent = '0.00';
        return;
      }
  
      let total = 0;
  
      cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
  
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
          <img src="${item.image}" alt="${item.name}"
            onerror="this.onerror=null; const imgs=['image/1.jpg','image/2.jpg','image/3.jpg','image/4.jpg','image/5.jpeg','image/6.jpeg','image/7.jpeg','image/8.jpeg','image/9.jpeg','image/10.jpeg','image/11.jpg','image/12.webp']; this.src=imgs[Math.floor(Math.random()*imgs.length)];" />
          <h3>${item.name}</h3>
          <p>Price: $${item.price.toFixed(2)}</p>
          <p>Quantity: ${item.quantity}</p>
          <p>Total: $${itemTotal.toFixed(2)}</p>
          <button class="remove-btn" data-index="${index}">Remove</button>
        `;
        cartItemsContainer.appendChild(card);
      });
  
      cartTotalElem.textContent = total.toFixed(2);
  
      const checkoutBtn = document.createElement('button');
      checkoutBtn.textContent = 'Checkout';
      checkoutBtn.className = 'checkout-btn';
      checkoutBtn.addEventListener('click', () => {
        alert('Checkout functionality is not implemented yet.');
      });
      cartItemsContainer.appendChild(checkoutBtn);
  
      const removeButtons = document.querySelectorAll('.remove-btn');
      removeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const index = btn.getAttribute('data-index');
          cart.splice(index, 1);
          localStorage.setItem('cart', JSON.stringify(cart));
          updateCartCount();
          displayCartItems();
        });
      });
    }
  
    // Run on page load
    updateCartCount();
    displayCartItems();
  });
  
  document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const message = document.getElementById("message");
    message.style.color = "green";
    message.textContent = "Account created successfully!";
    // You can add real sign-up logic here
  });