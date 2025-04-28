# Heikkinen_Johannes_auto

This project is a React application for handling car data, featuring a shopping cart functionality. It allows users to view car details, add cars to a shopping cart, and see a summary of their cart contents along with the total price.

## Project Structure

```
Heikkinen_Johannes_auto
├── public
│   └── autovarasto.json
├── src
│   ├── components
│   │   ├── CartSummary.jsx
│   │   ├── CarDetails.jsx
│   │   └── ShoppingCart.jsx
│   ├── data
│   │   └── autovarasto.json
│   ├── App.jsx
│   ├── main.jsx
│   └── styles
│       └── app.css
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd Heikkinen_Johannes_auto
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm run dev
   ```

4. **Access the application**:
   Open your browser and navigate to `http://localhost:3000`.

## Features

- View detailed information about cars.
- Add cars to the shopping cart.
- View a summary of the shopping cart contents.
- Calculate the total price of the items in the cart.

## Data Source

The application uses `autovarasto.json` located in the `public` and `src/data` directories as the default data source for car information. The JSON file contains an array of car objects with properties such as id, price, name, model, manufacturing year, options, and additional details.

## License

This project is licensed under the MIT License.