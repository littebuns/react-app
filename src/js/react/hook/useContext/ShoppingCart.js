import React, { useState, useContext } from "react";

// 创建购物车上下文
const CartContext = React.createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart }}>
      <div className="App">
        <Header />
        <ProductList />
        <Cart />
      </div>
    </CartContext.Provider>
  );
}

function Header() {
  return <h1>Shopping App</h1>;
}

function ProductList() {
  const { addItemToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];

  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => addItemToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <p>{item.name}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
}

export default App;
