
# VÉNORA — E-Commerce Product Experience & Grid Filtering Engine

A modern, responsive e-commerce storefront built with HTML5, CSS3, and Vanilla JavaScript. VÉNORA delivers a premium product discovery experience with dynamic filtering, intelligent sorting, product comparison, wishlist management, and interactive shopping cart functionality.

## Project Overview

VÉNORA is a front-end e-commerce experience inspired by modern premium online shopping platforms.

The application focuses on product discovery, responsive product presentation, and efficient interaction patterns. It combines an asymmetric CSS Grid layout with dynamic filtering logic and browser-based state persistence.

The project demonstrates practical front-end engineering skills through an interactive shopping experience without relying on external JavaScript frameworks.

## Key Features

### 1. Advanced Product Discovery
- Dynamic product catalog.
- Responsive asymmetric CSS Grid.
- Product category filtering.
- Real-time product search.
- Price range filtering.
- Customer rating filtering.
- In-stock product filtering.

### 2. Intelligent Sorting Engine
- Featured products.
- Price: Low to High.
- Price: High to Low.
- Highest Rated.
- Most Popular.
- Alphabetical sorting.

### 3. Interactive Shopping Experience
- Product quick-view modal.
- Add-to-cart functionality.
- Shopping cart drawer.
- Quantity management.
- Remove products from cart.
- Automatic subtotal calculation.
- Wishlist and favorites.

### 4. Product Comparison
- Compare up to three products.
- Side-by-side comparison table.
- Compare product prices.
- Compare customer ratings.
- Compare product availability.
- Compare popularity scores.

### 5. Advanced Layout Engineering
- Sticky product filtering sidebar.
- Asymmetric CSS Grid product cards.
- Responsive multi-column layouts.
- Adaptive product gallery.
- Flexible toolbar components.
- Mobile filter drawer.

### 6. Performance Optimization
- Lazy-loaded product images.
- Responsive hero image srcsets.
- Image decoding optimization.
- Efficient DOM event delegation.
- Dynamic rendering of filtered results.
- Minimal external dependencies.

### 7. Data Persistence
- LocalStorage wishlist persistence.
- LocalStorage shopping cart persistence.
- Restore saved shopping data after reload.
- Defensive handling of invalid stored data.

### 8. Responsive Design
- Desktop storefront.
- Tablet-friendly layouts.
- Mobile navigation.
- Responsive product gallery.
- Accessible form controls.
- Keyboard focus indicators.
- Reduced-motion support.

## Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic application structure |
| CSS3 | Styling and responsive design |
| JavaScript ES6+ | Interactive application logic |
| CSS Grid | Product gallery and asymmetric layouts |
| Flexbox | Responsive component alignment |
| DOM API | Dynamic product rendering |
| LocalStorage API | Persistent shopping data |
| HTML Dialog API | Product and comparison modals |
| Unsplash | Demonstration product imagery |

## Project Structure

```text
ecommerce-product-experience/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Regalson001/ecommerce-product-experience.git
```

### 2. Navigate to the project directory

```bash
cd ecommerce-product-experience
```

### 3. Open in Visual Studio Code

```bash
code .
```

### 4. Launch the application

Open `index.html` in your browser or use the Live Server extension in Visual Studio Code.

No package installation or build process is required.

## How to Use

1. Open the VÉNORA storefront.
2. Browse the available products.
3. Search for products using the search field.
4. Filter products by category.
5. Adjust the maximum price.
6. Select your preferred customer rating.
7. Filter products by stock availability.
8. Sort products using the sorting menu.
9. Save favorite products to your wishlist.
10. Open quick view to inspect product details.
11. Add products to your shopping bag.
12. Update product quantities in the cart.
13. Select two or three products to compare.
14. View the comparison table.

## Engineering Concepts Demonstrated

This project demonstrates practical implementation of:

- Advanced CSS Grid and Flexbox.
- Asymmetric product gallery layouts.
- Sticky positioning.
- JavaScript state management.
- Dynamic product filtering.
- Sorting algorithms.
- Search functionality.
- Event delegation.
- DOM manipulation.
- LocalStorage persistence.
- Responsive image loading.
- Lazy loading and image decoding.
- Modal interactions.
- Shopping cart calculations.
- Responsive interface architecture.
- Defensive HTML rendering.

## Performance Considerations

The application uses several techniques to improve the product browsing experience:

- Lazy loading for product images.
- High-priority loading for the hero image.
- Responsive image sources for the hero section.
- Image decoding hints.
- Event delegation for repeated product interactions.
- Client-side filtering without unnecessary page reloads.

## Future Enhancements

Potential improvements for future development include:

- Backend integration using REST APIs.
- User authentication and customer accounts.
- Payment gateway integration.
- Server-side product search.
- Database-backed inventory management.
- Product reviews and verified ratings.
- Pagination or infinite scrolling.
- Advanced image optimization.
- Product recommendations.
- Order tracking and checkout workflows.
- Admin product management dashboard.
- Automated end-to-end testing.

## Project Limitations

VÉNORA is currently a front-end demonstration application.

Product information is provided through static JavaScript data. Shopping cart and wishlist information are stored locally in the browser.

The checkout and newsletter interactions are demonstrations and do not process real payments or submit customer information to a backend.

Product imagery is loaded from Unsplash and requires an internet connection.

## Author

**Stephen Oyugi**

Front-End Developer | AI Automation Engineer | Machine Learning Practitioner

- GitHub: https://github.com/Regalson001
- LinkedIn: https://linkedin.com/in/stephenoyugi001

Explore my GitHub profile for additional front-end development and AI engineering projects.

## License

This project is licensed under the MIT License.

You are welcome to explore, learn from, and extend this project.

---

**Designed with intention. Engineered for discovery.**
