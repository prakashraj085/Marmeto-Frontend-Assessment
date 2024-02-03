# Marmeto-Frontend-Assessment  - https://marmetol2.netlify.app/

This repository contains a simple HTML, CSS, and JavaScript implementation for a product selection interface with tabs. Users can choose between Men, Women, and Kids categories to view corresponding products. The responsive design adapts to different screen sizes, providing an optimal user experience on various devices.

## Table of Contents

- [Usage](#usage)
- [File Structure](#file-structure)
- [Styling](#styling)
- [Product Data](#product-data)
- [JavaScript Functions](#javascript-functions)
- [Responsive Design](#responsive-design)

## Usage

To use this product selection interface, open the `index.html` file in a web browser. The interface will display three tabs: Men, Women, and Kids. Clicking on each tab will reveal products related to the selected category.

## File Structure

- `index.html`: The main HTML file that structures the product selection interface.
- `style.css`: The stylesheet file containing the styling for the interface.
- `script.js`: The JavaScript file that fetches product data and dynamically renders product cards based on the selected category.

## Styling

The styling is implemented using CSS and includes responsive design elements. The interface has a clean and modern look, making it easy for users to navigate and explore different product categories.

## Product Data

Product data is fetched from an external JSON file (`multiProduct.json`) using JavaScript. The product information includes details such as title, image, vendor, price, and compare_at_price.

## JavaScript Functions

- `renderProductCards(categories)`: Dynamically renders product cards based on the provided categories.
- `createProductCard(product)`: Creates an individual product card with details such as image, title, vendor, prices, and an "Add to Cart" button.
- `calculateDiscount(price, comparePrice)`: Calculates the discount percentage based on the original and discounted prices.
- `changeTab(tabName)`: Handles the tab switching functionality, displaying the corresponding category content based on the selected tab.

## Responsive Design

The interface is designed to be responsive across different screen sizes. Media queries in the CSS file adjust the layout and styling for mobile screens (max-width: 767px) and tablet screens (min-width: 768px and max-width: 1024px). The JavaScript function `changeTab` also adapts the display style of tabs based on the window width.
