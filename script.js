
"use strict";

/* =========================================
   VÉNORA — E-COMMERCE APPLICATION
========================================= */

const PRODUCTS = [
  {
    id: 1,
    name: "Studio Wireless Headphones",
    category: "Technology",
    price: 189,
    oldPrice: 229,
    rating: 4.9,
    reviews: 128,
    popularity: 98,
    stock: true,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&auto=format&fit=crop&q=80",
    description: "Experience rich, immersive sound with a refined wireless design, comfortable ear cushions, and long-lasting battery performance."
  },
  {
    id: 2,
    name: "Minimal Leather Tote",
    category: "Fashion",
    price: 145,
    oldPrice: null,
    rating: 4.7,
    reviews: 86,
    popularity: 90,
    stock: true,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=700&auto=format&fit=crop&q=80",
    description: "A timeless everyday tote crafted with a minimalist silhouette and versatile styling."
  },
  {
    id: 3,
    name: "Sculptural Ceramic Vase",
    category: "Home",
    price: 78,
    oldPrice: 95,
    rating: 4.8,
    reviews: 64,
    popularity: 76,
    stock: true,
    badge: "Limited",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=700&auto=format&fit=crop&q=80",
    description: "A decorative sculptural ceramic piece designed to bring understated character to your living space."
  },
  {
    id: 4,
    name: "Classic Everyday Sneakers",
    category: "Fashion",
    price: 110,
    oldPrice: null,
    rating: 4.6,
    reviews: 152,
    popularity: 95,
    stock: true,
    badge: "New",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&auto=format&fit=crop&q=80",
    description: "Comfortable everyday sneakers with a clean silhouette and versatile styling."
  },
  {
    id: 5,
    name: "Modern Smart Watch",
    category: "Technology",
    price: 249,
    oldPrice: 289,
    rating: 4.9,
    reviews: 210,
    popularity: 99,
    stock: true,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&auto=format&fit=crop&q=80",
    description: "A sophisticated smartwatch combining everyday functionality, activity tracking, and contemporary design."
  },
  {
    id: 6,
    name: "Essential Skincare Set",
    category: "Accessories",
    price: 65,
    oldPrice: null,
    rating: 4.5,
    reviews: 74,
    popularity: 72,
    stock: true,
    badge: "New",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700&auto=format&fit=crop&q=80",
    description: "A thoughtfully assembled skincare collection for a simple, consistent daily routine."
  },
  {
    id: 7,
    name: "Architectural Table Lamp",
    category: "Home",
    price: 135,
    oldPrice: 159,
    rating: 4.8,
    reviews: 97,
    popularity: 88,
    stock: true,
    badge: "Featured",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=700&auto=format&fit=crop&q=80",
    description: "An elegant statement lighting piece that adds warmth and character to contemporary interiors."
  },
  {
    id: 8,
    name: "Premium Travel Backpack",
    category: "Accessories",
    price: 119,
    oldPrice: null,
    rating: 4.6,
    reviews: 109,
    popularity: 84,
    stock: false,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop&q=80",
    description: "A versatile travel backpack with organized storage and a streamlined everyday design."
  },
  {
    id: 9,
    name: "Contemporary Sunglasses",
    category: "Fashion",
    price: 89,
    oldPrice: 105,
    rating: 4.7,
    reviews: 58,
    popularity: 81,
    stock: true,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700&auto=format&fit=crop&q=80",
    description: "Contemporary sunglasses with a timeless frame designed to complement everyday outfits."
  },
  {
    id: 10,
    name: "Portable Bluetooth Speaker",
    category: "Technology",
    price: 99,
    oldPrice: null,
    rating: 4.4,
    reviews: 115,
    popularity: 87,
    stock: true,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=700&auto=format&fit=crop&q=80",
    description: "Enjoy portable audio with a compact speaker designed for convenient everyday listening."
  },
  {
    id: 11,
    name: "Premium Linen Cushion",
    category: "Home",
    price: 42,
    oldPrice: null,
    rating: 4.3,
    reviews: 43,
    popularity: 67,
    stock: true,
    badge: "Essential",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=700&auto=format&fit=crop&q=80",
    description: "A soft decorative cushion with a relaxed aesthetic for contemporary living spaces."
  },
  {
    id: 12,
    name: "Leather Wristwatch",
    category: "Accessories",
    price: 175,
    oldPrice: 210,
    rating: 4.9,
    reviews: 138,
    popularity: 96,
    stock: true,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=700&auto=format&fit=crop&q=80",
    description: "A classic wristwatch combining refined detailing with a versatile leather strap."
  }
];

/* =========================================
   APPLICATION STATE
========================================= */

const STORAGE = {
  wishlist: "venora-wishlist",
  cart: "venora-cart"
};

function loadArray(key) {
  try {
    const data = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

let state = {
  category: "all",
  maxPrice: 1000,
  rating: 0,
  inStock: false,
  search: "",
  sort: "featured",
  wishlist: loadArray(STORAGE.wishlist).filter(id =>
    PRODUCTS.some(product => product.id === id)
  ),
  cart: loadArray(STORAGE.cart)
    .filter(item =>
      PRODUCTS.some(product => product.id === item.id) &&
      Number.isInteger(item.quantity) &&
      item.quantity > 0
    ),
  comparison: []
};

/* =========================================
   DOM ELEMENTS
========================================= */

const productGrid = document.getElementById("productGrid");
const resultsCount = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");
const activeFilters = document.getElementById("activeFilters");

const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const sortSelect = document.getElementById("sortSelect");
const productSearch = document.getElementById("productSearch");

const quickViewDialog = document.getElementById("quickViewDialog");
const compareDialog = document.getElementById("compareDialog");

const drawerOverlay = document.getElementById("drawerOverlay");
const toast = document.getElementById("toast");

/* =========================================
   SAFE HTML AND FORMATTING
========================================= */

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function formatPrice(price) {
  return "$" + Number(price).toFixed(2);
}

function getProduct(id) {
  return PRODUCTS.find(product => product.id === Number(id));
}

function saveState() {
  try {
    localStorage.setItem(STORAGE.wishlist, JSON.stringify(state.wishlist));
    localStorage.setItem(STORAGE.cart, JSON.stringify(state.cart));
  } catch (error) {
    console.error("Unable to save shopping data:", error);
    showToast("Browser storage is unavailable.");
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2300);
}

/* =========================================
   FILTER ENGINE
========================================= */

function getFilteredProducts() {
  let filtered = PRODUCTS.filter(product => {
    const matchesCategory =
      state.category === "all" ||
      product.category === state.category;

    const matchesPrice = product.price <= state.maxPrice;

    const matchesRating = product.rating >= state.rating;

    const matchesStock =
      !state.inStock || product.stock;

    const searchable =
      `${product.name} ${product.category} ${product.description}`.toLowerCase();

    const matchesSearch = searchable.includes(state.search);

    return (
      matchesCategory &&
      matchesPrice &&
      matchesRating &&
      matchesStock &&
      matchesSearch
    );
  });

  switch (state.sort) {
    case "price-low":
      filtered.sort((a, b) => a.price - b.price);
      break;

    case "price-high":
      filtered.sort((a, b) => b.price - a.price);
      break;

    case "rating":
      filtered.sort((a, b) => b.rating - a.rating);
      break;

    case "popular":
      filtered.sort((a, b) => b.popularity - a.popularity);
      break;

    case "name":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;

    default:
      filtered.sort((a, b) => a.id - b.id);
  }

  return filtered;
}

/* =========================================
   PRODUCT CARD RENDERING
========================================= */

function createProductCard(product, index) {
  const wished = state.wishlist.includes(product.id);
  const compared = state.comparison.includes(product.id);

  const featured = index === 0 && state.sort === "featured";

  const badgeClass = product.badge === "Sale" ? "sale" : "";

  return `
    <article class="product-card ${featured ? "featured-card" : ""}">

      <div class="product-image-wrap">

        <span class="product-badge ${badgeClass}">
          ${escapeHTML(product.badge)}
        </span>

        <button
          class="wishlist-toggle ${wished ? "active" : ""}"
          data-wishlist="${product.id}"
          type="button"
          aria-label="${wished ? "Remove from" : "Add to"} wishlist: ${escapeHTML(product.name)}"
          aria-pressed="${wished}"
        >${wished ? "♥" : "♡"}</button>

        <img
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
          decoding="async"
          width="700"
          height="700"
        >

        <button
          class="quick-view-button"
          data-quickview="${product.id}"
          type="button"
        >Quick view ↗</button>
      </div>

      <div class="product-details">
        <span class="product-category">${escapeHTML(product.category)}</span>

        <h3>${escapeHTML(product.name)}</h3>

        <div class="product-rating">
          ★★★★★ <span>${product.rating.toFixed(1)} (${product.reviews} reviews)</span>
        </div>

        <div class="product-price-row">
          <div class="product-price">
            ${formatPrice(product.price)}
            ${
              product.oldPrice
                ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>`
                : ""
            }
          </div>

          <button
            class="add-cart-button"
            data-addcart="${product.id}"
            type="button"
            ${!product.stock ? "disabled" : ""}
          >
            ${product.stock ? "Add to bag +" : "Out of stock"}
          </button>
        </div>

        <label class="compare-label">
          <input
            type="checkbox"
            data-compare="${product.id}"
            ${compared ? "checked" : ""}
          >
          Compare product
        </label>
      </div>
    </article>
  `;
}

function renderProducts() {
  const filtered = getFilteredProducts();

  resultsCount.textContent =
    `Showing ${filtered.length} of ${PRODUCTS.length} products`;

  productGrid.innerHTML = filtered
    .map(createProductCard)
    .join("");

  emptyState.classList.toggle("hidden", filtered.length !== 0);
  productGrid.classList.toggle("hidden", filtered.length === 0);

  renderActiveFilters();
  renderWishlistCount();
  renderComparisonBar();
  renderCategoryCounts();
}

/* =========================================
   CATEGORY COUNTS
========================================= */

function renderCategoryCounts() {
  const allCount = document.getElementById("count-all");

  allCount.textContent = PRODUCTS.length;
}

/* =========================================
   ACTIVE FILTER CHIPS
========================================= */

function renderActiveFilters() {
  const chips = [];

  if (state.category !== "all") {
    chips.push({
      label: state.category,
      clear: () => setCategory("all")
    });
  }

  if (state.maxPrice < 1000) {
    chips.push({
      label: `Up to ${formatPrice(state.maxPrice)}`,
      clear: () => setPrice(1000)
    });
  }

  if (state.rating > 0) {
    chips.push({
      label: `${state.rating}+ stars`,
      clear: () => setRating(0)
    });
  }

  if (state.inStock) {
    chips.push({
      label: "In stock",
      clear: () => setStock(false)
    });
  }

  if (state.search) {
    chips.push({
      label: `Search: ${state.search}`,
      clear: () => setSearch("")
    });
  }

  activeFilters.innerHTML = chips.map((chip, index) => `
    <span class="filter-chip">
      ${escapeHTML(chip.label)}
      <button type="button" data-remove-filter="${index}" aria-label="Remove ${escapeHTML(chip.label)}">✕</button>
    </span>
  `).join("");

  activeFilters.querySelectorAll("[data-remove-filter]").forEach(button => {
    button.addEventListener("click", () => {
      chips[Number(button.dataset.removeFilter)].clear();
    });
  });
}

/* =========================================
   FILTER CONTROL FUNCTIONS
========================================= */

function setCategory(category) {
  state.category = category;
  document.querySelectorAll('input[name="category"]').forEach(input => {
    input.checked = input.value === category;
  });
  renderProducts();
}

function setPrice(price) {
  state.maxPrice = price;
  priceRange.value = price;
  priceValue.textContent = formatPrice(price);
  document.getElementById("maxPriceLabel").textContent = formatPrice(price);
  renderProducts();
}

function setRating(rating) {
  state.rating = rating;
  document.querySelectorAll('input[name="rating"]').forEach(input => {
    input.checked = Number(input.value) === rating;
  });
  renderProducts();
}

function setStock(value) {
  state.inStock = value;
  document.getElementById("inStockFilter").checked = value;
  renderProducts();
}

function setSearch(value) {
  state.search = value.trim().toLowerCase();
  productSearch.value = value;
  renderProducts();
}

function resetFilters() {
  state.category = "all";
  state.maxPrice = 1000;
  state.rating = 0;
  state.inStock = false;
  state.search = "";
  state.sort = "featured";

  document.querySelector('input[name="category"][value="all"]').checked = true;
  document.querySelector('input[name="rating"][value="0"]').checked = true;

  priceRange.value = 1000;
  priceValue.textContent = "$1,000";
  document.getElementById("maxPriceLabel").textContent = "$1,000";

  document.getElementById("inStockFilter").checked = false;

  productSearch.value = "";
  sortSelect.value = "featured";

  renderProducts();
}

/* =========================================
   WISHLIST
========================================= */

function toggleWishlist(id) {
  id = Number(id);

  if (state.wishlist.includes(id)) {
    state.wishlist = state.wishlist.filter(item => item !== id);
    showToast("Removed from your wishlist.");
  } else {
    state.wishlist.push(id);
    showToast("Added to your wishlist.");
  }

  saveState();
  renderProducts();
}

function renderWishlistCount() {
  document.getElementById("wishlistCount").textContent =
    state.wishlist.length;
}

function showWishlist() {
  const wishedProducts = state.wishlist
    .map(getProduct)
    .filter(Boolean);

  state.category = "all";
  state.search = "";

  productSearch.value = "";
  document.querySelector('input[name="category"][value="all"]').checked = true;

  productGrid.innerHTML = wishedProducts.length
    ? wishedProducts.map(createProductCard).join("")
    : "";

  productGrid.classList.toggle("hidden", !wishedProducts.length);
  emptyState.classList.toggle("hidden", wishedProducts.length > 0);

  if (!wishedProducts.length) {
    emptyState.querySelector("h3").textContent = "Your wishlist is empty";
    emptyState.querySelector("p").textContent = "Save products you love to find them here.";
  }

  resultsCount.textContent = `${wishedProducts.length} wishlist products`;
  activeFilters.innerHTML = "";
  renderComparisonBar();
}

/* =========================================
   SHOPPING CART
========================================= */

function addToCart(id) {
  const product = getProduct(id);

  if (!product || !product.stock) {
    showToast("This product is currently unavailable.");
    return;
  }

  const existing = state.cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity++;
  } else {
    state.cart.push({
      id: product.id,
      quantity: 1
    });
  }

  saveState();
  renderCart();
  showToast(`${product.name} added to your bag.`);
}

function changeQuantity(id, amount) {
  const item = state.cart.find(item => item.id === Number(id));

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    state.cart = state.cart.filter(cartItem => cartItem.id !== Number(id));
  }

  saveState();
  renderCart();
}

function removeFromCart(id) {
  state.cart = state.cart.filter(item => item.id !== Number(id));
  saveState();
  renderCart();
  showToast("Product removed from bag.");
}

function renderCart() {
  const quantity = state.cart.reduce(
    (sum, item) => sum + item.quantity, 0
  );

  const total = state.cart.reduce((sum, item) => {
    const product = getProduct(item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  document.getElementById("cartCount").textContent = quantity;
  document.getElementById("drawerCartCount").textContent = `(${quantity})`;
  document.getElementById("cartTotal").textContent = formatPrice(total);

  const cartItems = document.getElementById("cartItems");

  if (!state.cart.length) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <h3>Your bag is empty.</h3>
        <p>Discover something worth keeping.</p>
      </div>
    `;
    return;
  }

  cartItems.innerHTML = state.cart.map(item => {
    const product = getProduct(item.id);

    if (!product) return "";

    return `
      <article class="cart-item">
        <img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}">

        <div>
          <h3>${escapeHTML(product.name)}</h3>
          <strong>${formatPrice(product.price)}</strong>

          <div class="cart-item-actions">
            <button data-quantity="-1" data-id="${product.id}" aria-label="Decrease quantity">−</button>
            <span>${item.quantity}</span>
            <button data-quantity="1" data-id="${product.id}" aria-label="Increase quantity">+</button>
            <button class="remove-item" data-remove-cart="${product.id}">Remove</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function openCart() {
  renderCart();
  drawerOverlay.classList.remove("hidden");
  document.getElementById("closeCart").focus();
}

function closeCart() {
  drawerOverlay.classList.add("hidden");
  document.getElementById("cartBtn").focus();
}

/* =========================================
   PRODUCT QUICK VIEW
========================================= */

function openQuickView(id) {
  const product = getProduct(id);

  if (!product) return;

  document.getElementById("quickViewContent").innerHTML = `
    <div class="quick-view-layout">
      <img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}">

      <div class="quick-view-details">
        <span class="eyebrow">${escapeHTML(product.category)}</span>
        <h2>${escapeHTML(product.name)}</h2>

        <div class="product-rating">
          ★★★★★ <span>${product.rating.toFixed(1)} (${product.reviews} reviews)</span>
        </div>

        <div class="product-price">${formatPrice(product.price)}</div>

        <p>${escapeHTML(product.description)}</p>

        <p>${product.stock ? "✓ Available in stock" : "Currently out of stock"}</p>

        <button
          class="add-cart-button"
          data-addcart="${product.id}"
          ${!product.stock ? "disabled" : ""}
        >
          ${product.stock ? "Add to bag +" : "Out of stock"}
        </button>
      </div>
    </div>
  `;

  quickViewDialog.showModal();
}

/* =========================================
   PRODUCT COMPARISON ENGINE
========================================= */

function toggleComparison(id, checked) {
  id = Number(id);

  if (checked && !state.comparison.includes(id)) {
    if (state.comparison.length >= 3) {
      showToast("Compare up to three products at a time.");
      renderProducts();
      return;
    }

    state.comparison.push(id);
  }

  if (!checked) {
    state.comparison = state.comparison.filter(item => item !== id);
  }

  renderComparisonBar();
}

function renderComparisonBar() {
  const bar = document.getElementById("comparisonBar");

  bar.classList.toggle("hidden", state.comparison.length === 0);

  document.getElementById("compareCount").textContent =
    state.comparison.length;
}

function clearComparison() {
  state.comparison = [];
  renderProducts();
}

function openComparison() {
  if (state.comparison.length < 2) {
    showToast("Select at least two products to compare.");
    return;
  }

  const products = state.comparison.map(getProduct).filter(Boolean);

  const rows = [
    ["Product", product => escapeHTML(product.name)],
    ["Category", product => escapeHTML(product.category)],
    ["Price", product => formatPrice(product.price)],
    ["Rating", product => `★ ${product.rating}/5`],
    ["Reviews", product => product.reviews],
    ["Availability", product => product.stock ? "In stock" : "Unavailable"],
    ["Popularity", product => `${product.popularity}/100`]
  ];

  document.getElementById("comparisonContent").innerHTML = `
    <div class="comparison-table-wrap">
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Specification</th>
            ${products.map(product => `
              <th>${escapeHTML(product.name)}</th>
            `).join("")}
          </tr>
        </thead>

        <tbody>
          ${rows.map(([label, getter]) => `
            <tr>
              <td>${label}</td>
              ${products.map(product => `
                <td>${getter(product)}</td>
              `).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;

  compareDialog.showModal();
}

/* =========================================
   GLOBAL EVENT DELEGATION
========================================= */

document.addEventListener("click", event => {
  const wishlist = event.target.closest("[data-wishlist]");
  const addCart = event.target.closest("[data-addcart]");
  const quickView = event.target.closest("[data-quickview]");
  const closeButton = event.target.closest("[data-close]");

  if (wishlist) {
    toggleWishlist(wishlist.dataset.wishlist);
  }

  if (addCart) {
    addToCart(addCart.dataset.addcart);
  }

  if (quickView) {
    openQuickView(quickView.dataset.quickview);
  }

  if (closeButton) {
    document.getElementById(closeButton.dataset.close).close();
  }
});

/* =========================================
   CART EVENT DELEGATION
========================================= */

document.getElementById("cartItems").addEventListener("click", event => {
  const quantityButton = event.target.closest("[data-quantity]");
  const removeButton = event.target.closest("[data-remove-cart]");

  if (quantityButton) {
    changeQuantity(
      quantityButton.dataset.id,
      Number(quantityButton.dataset.quantity)
    );
  }

  if (removeButton) {
    removeFromCart(removeButton.dataset.removeCart);
  }
});

/* =========================================
   FILTER EVENTS
========================================= */

document.querySelectorAll('input[name="category"]').forEach(input => {
  input.addEventListener("change", () => {
    setCategory(input.value);
  });
});

document.querySelectorAll('input[name="rating"]').forEach(input => {
  input.addEventListener("change", () => {
    setRating(Number(input.value));
  });
});

priceRange.addEventListener("input", () => {
  state.maxPrice = Number(priceRange.value);

  priceValue.textContent = formatPrice(state.maxPrice);
  document.getElementById("maxPriceLabel").textContent =
    formatPrice(state.maxPrice);

  renderProducts();
});

document.getElementById("inStockFilter").addEventListener("change", event => {
  setStock(event.target.checked);
});

productSearch.addEventListener("input", event => {
  state.search = event.target.value.trim().toLowerCase();
  renderProducts();
});

sortSelect.addEventListener("change", event => {
  state.sort = event.target.value;
  renderProducts();
});

document.getElementById("clearFilters").addEventListener("click", resetFilters);
document.getElementById("resetEmptyState").addEventListener("click", resetFilters);

/* =========================================
   COMPARISON EVENTS
========================================= */

productGrid.addEventListener("change", event => {
  const checkbox = event.target.closest("[data-compare]");

  if (!checkbox) return;

  toggleComparison(checkbox.dataset.compare, checkbox.checked);
});

document.getElementById("clearCompare").addEventListener("click", clearComparison);
document.getElementById("openCompare").addEventListener("click", openComparison);

/* =========================================
   HEADER AND NAVIGATION
========================================= */

document.getElementById("cartBtn").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);

drawerOverlay.addEventListener("click", event => {
  if (event.target === drawerOverlay) {
    closeCart();
  }
});

document.getElementById("wishlistBtn").addEventListener("click", showWishlist);

document.getElementById("headerSearchBtn").addEventListener("click", () => {
  productSearch.focus();
  document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("mobileMenuBtn").addEventListener("click", () => {
  document.querySelector(".main-nav").classList.toggle("open");
});

document.querySelectorAll("[data-category-link]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();

    setCategory(link.dataset.categoryLink);

    document.querySelector(".main-nav").classList.remove("open");

    document.getElementById("shop").scrollIntoView({
      behavior: "smooth"
    });
  });
});

/* =========================================
   MOBILE FILTER DRAWER
========================================= */

document.getElementById("mobileFilterBtn").addEventListener("click", () => {
  document.getElementById("filterSidebar").classList.add("mobile-open");
});

document.getElementById("mobileApplyFilters").addEventListener("click", () => {
  document.getElementById("filterSidebar").classList.remove("mobile-open");
});

/* =========================================
   NEWSLETTER DEMO
========================================= */

document.getElementById("newsletterForm").addEventListener("submit", event => {
  event.preventDefault();

  if (!event.target.reportValidity()) return;

  showToast("Thank you for subscribing to VÉNORA!");

  event.target.reset();
});

/* =========================================
   DEMO CHECKOUT
========================================= */

document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (!state.cart.length) {
    showToast("Your shopping bag is empty.");
    return;
  }

  showToast("Demo checkout: payment integration is not configured.");
});

/* =========================================
   MODAL KEYBOARD AND FOCUS
========================================= */

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    document.getElementById("filterSidebar").classList.remove("mobile-open");
  }
});

/* =========================================
   INITIALIZE APPLICATION
========================================= */

function initializeApp() {
  renderProducts();
  renderCart();
  renderWishlistCount();

  setPrice(1000);
  renderProducts();

  console.log("VÉNORA storefront initialized successfully.");
}

initializeApp();
