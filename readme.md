# StepInStyle

StepInStyle is a modern e-commerce website focused on providing a seamless shopping experience for clothing enthusiasts. Our platform showcases a wide variety of apparel, enabling users to browse, select, and purchase their favorite styles effortlessly.

## Features

- **User Authentication**: Secure login and sign-up process.
- **Product Catalog**: Browse through a diverse range of clothing items.
- **Shopping Cart**: Add items to the cart, modify quantities, and view the total cost.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **User-Friendly Interface**: Intuitive navigation for a smooth shopping experience.

## Responsiveness

<div align="center">
  <a href="https://ui.dev/amiresponsive?url=https://step-in-style-chi.vercel.app/" target="_blank">
    <img src="public/img/Responsive.jpeg" alt="Responsive design demonstration" />
  </a>
</div>

## Technologies Used

- **HTML**: Structure of the web pages.
- **CSS**: Styling the website for an appealing look.
- **JavaScript**: Adding interactivity and dynamic features.


## Prerequisites:
- Make sure you have [Node.js](https://nodejs.org/en/) installed.
- A GitHub account to clone the repository.
- (Optional) A text editor like [VS Code]

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/StepInStyle.git
   ```
2. Navigate to the project directory:
   ```bash
   cd StepInStyle
   ```
3. Open the `index.html` file in your browser to view the website.

## Usage

- Visit the homepage to view featured products.
- Use the navigation bar to explore different categories.
- Click on items to view details and add them to your cart.

## Local Storage Schema

The application uses local storage to manage user data and transactions. The schema is structured as follows:

```bash
Local Storage/
├── currentUser                # Stores the username of the currently logged-in user.
├── currentProduct             # Stores the product details of the currently viewed item.
├── Users                      # An array of user objects.
│   ├── username               # Unique username for the user (string).
│   │   ├── email              # User's email address (string).
│   │   ├── password           # User's password (string).
│   │   ├── number             # Transaction amount (number).
│   │   ├── cart               # Array of product objects in the user's cart.
│   │   │   ├── id             # Unique product ID (number).
│   │   │   ├── quantity       # Quantity of the product in the cart (number).
```

## Contributing

Contributions are welcome! If you have suggestions for improvements or features, please fork the repository and create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For inquiries, please reach out at [stepinstyle@example.com](mailto:nehchalsab18@gmail.com).

---
