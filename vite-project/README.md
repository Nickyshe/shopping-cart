# Dessert Shop - Product List with Cart

A modern, responsive React application that showcases a dessert shop with a functional shopping cart. Built as a solution for the Frontend Mentor challenge.

## 🚀 Features

### Core Functionality
- **Product Display**: Beautiful grid layout showcasing dessert products
- **Shopping Cart**: Full cart functionality with add, remove, and quantity controls
- **Order Confirmation**: Modal dialog for order confirmation
- **Reset Functionality**: Start new order feature

### User Experience
- **Keyboard Navigation**: Full keyboard accessibility support
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Hover & Focus States**: Interactive elements with proper visual feedback
- **Modern UI**: Beautiful gradient design with smooth animations

### Technical Features
- **React 19**: Latest React version with modern hooks
- **Vite**: Fast development and build tooling
- **CSS Grid & Flexbox**: Modern layout techniques
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

## 🛠️ Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vite-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 User Guide

### Adding Items to Cart
- Click the "Add to Cart" button on any product card
- Use Tab to navigate and Enter/Space to add items
- Items are automatically added to the cart with quantity 1

### Managing Cart Items
- **Increase Quantity**: Click the "+" button or use keyboard navigation
- **Decrease Quantity**: Click the "-" button (disabled when quantity is 1)
- **Remove Item**: Click the "Remove" button to completely remove an item
- **View Total**: The cart automatically calculates and displays the total price

### Completing an Order
- When the cart has items, a "Confirm Order" button appears
- Click to open the order confirmation modal
- Click "Start New Order" to reset the cart and continue shopping

### Keyboard Navigation
- **Tab**: Navigate between interactive elements
- **Enter/Space**: Activate buttons and add items to cart
- **Escape**: Close the order confirmation modal
- **Arrow Keys**: Navigate through product cards

## 🎨 Design Features

### Visual Design
- **Gradient Background**: Beautiful purple gradient background
- **Glass Morphism**: Semi-transparent cards with backdrop blur
- **Smooth Animations**: Hover effects and transitions
- **Modern Typography**: Clean, readable font hierarchy

### Responsive Breakpoints
- **Desktop**: 1024px and above - Side-by-side layout
- **Tablet**: 768px to 1024px - Stacked layout
- **Mobile**: Below 768px - Single column layout

### Color Scheme
- **Primary**: Purple gradient (#667eea to #764ba2)
- **Success**: Green gradient (#27ae60 to #2ecc71)
- **Danger**: Red (#e74c3c)
- **Text**: Dark gray (#2c3e50)
- **Background**: Light gray (#f8f9fa)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Technical Details

### Project Structure
```
src/
├── component/
│   ├── Cart.jsx
│   ├── CartItem.jsx
│   ├── OrderConfirmationModal.jsx
│   ├── ProductItem.jsx
│   └── ProductList.jsx
├── assets/
│   └── waffles.jpg
├── App.jsx
├── data.json
├── index.css
└── main.jsx
```

### Key Components
- **App.jsx**: Main application component with state management
- **ProductList.jsx**: Displays the grid of products
- **ProductItem.jsx**: Individual product card component
- **Cart.jsx**: Shopping cart with total calculation
- **CartItem.jsx**: Individual cart item with quantity controls
- **OrderConfirmationModal.jsx**: Modal dialog for order confirmation

### State Management
- Uses React hooks (useState) for local state
- Cart items stored in component state
- Modal state managed separately

## 🎯 Challenge Requirements Met

✅ Add items to cart and remove them  
✅ Increase/decrease the number of items in the cart  
✅ See an order confirmation modal when clicking "Confirm Order"  
✅ Reset selections when clicking "Start New Order"  
✅ Navigate the whole project using only keyboard  
✅ View optimal layout for different screen sizes  
✅ See hover and focus states for all interactive elements  

## 🚀 Future Enhancements

- Add product categories and filtering
- Implement persistent cart storage
- Add product search functionality
- Include product reviews and ratings
- Add checkout process with payment integration
- Implement user accounts and order history

## 📄 License

This project is built for educational purposes as part of the Frontend Mentor challenge.
