document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search');
  const categorySelect = document.getElementById('category');
  const productContainer = document.getElementById('product-container');
  const cartButton = document.getElementById('cart-button');
  const cartCounter = document.getElementById('cart-counter');

  let cartItemsCount = 0; // Initialize cart items count
  let cartProducts = [];

  // Sample product data (replace with your actual product data)
  const products = [
      { id: 1, name: 'Chair 1', category: 'chair', image: './assets/chair-img-1.png', description: 'Description of Chair 1', price: '$XX.XX' },
      { id: 2, name: 'Table 1', category: 'table', image: './assets/table-img-1.png', description: 'Description of Table 1', price: '$XX.XX' },
      { id: 3, name: 'Bed 1', category: 'bed', image: './assets/bed-img-1.png', description: 'Description of bed 1', price: '$XX.XX' },
      { id: 4, name: 'Table 2', category: 'table', image: './assets/table-img-2.png', description: 'Description of table 2', price: '$XX.XX' },
      { id: 5, name: 'Chair 2', category: 'chair', image: './assets/chair-img-2.png', description: 'Description of Chair 2', price: '$XX.XX' },
      { id: 6, name: 'Bed 2', category: 'bed', image: './assets/bed-img-2.png', description: 'Description of bed 2', price: '$XX.XX' },
      { id: 7, name: 'Door 1', category: 'door', image: './assets/door-img-1.png', description: 'Description of Door 1', price: '$XX.XX' },
      { id: 8, name: 'Wordrobe 1', category: 'wordrobe', image: './assets/wardrobe-img-1.png', description: 'Description of Wardrobe 1', price: '$XX.XX' },
      // Add more products as needed
  ];

  // Function to render product cards
  function renderProducts(filter = { category: 'all', search: '' }) {
      let filteredProducts = products;

      if (filter.category !== 'all') {
          filteredProducts = filteredProducts.filter(product => product.category === filter.category);
      }

      if (filter.search.trim() !== '') {
          const searchTerm = filter.search.toLowerCase();
          filteredProducts = filteredProducts.filter(product =>
              product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm)
          );
      }

      productContainer.innerHTML = ''; // Clear existing products

      filteredProducts.forEach(product => {
          const card = document.createElement('div');
          card.classList.add('product-card');
          card.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <p>${product.price}</p>
              <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
          `;
          productContainer.appendChild(card);
      });
  }

  // Event listener for search input and category select
  searchInput.addEventListener('input', function () {
      const searchValue = this.value;
      const categoryValue = categorySelect.value;
      renderProducts({ category: categoryValue, search: searchValue });
  });

  categorySelect.addEventListener('change', function () {
      const searchValue = searchInput.value;
      const categoryValue = this.value;
      renderProducts({ category: categoryValue, search: searchValue });
  });

  // Event listener for Add to Cart button clicks
  productContainer.addEventListener('click', function (event) {
      if (event.target.classList.contains('add-to-cart-btn')) {
          const productId = parseInt(event.target.dataset.productId);
          const product = products.find(item => item.id === productId);
          if (product) {
              // Increment cart items count and update the counter
              cartItemsCount++;
              cartCounter.textContent = cartItemsCount;

              // Add the product to the cart
              cartProducts.push(product);

              console.log('Added to cart:', product);
          }
      }
  });

  // Event listener for Cart button clicks
  cartButton.addEventListener('click', function (event) {
      event.preventDefault();
      // Show preview of products in the cart
      console.log('Cart preview:', cartProducts);
      // Here, you can display the cart preview or redirect to the cart page
  });

  // Initial rendering of products
  renderProducts();
});
