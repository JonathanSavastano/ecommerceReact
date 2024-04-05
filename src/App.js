// import necessary libraries
import './App.css';
import Product from './components/Products';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product)
  {
    setCartItems(prevItems => [...prevItems, product]);
  }

  return (
    <Router>
      <div className="App">
      <h1>Welcome to my e-commerce website</h1>
      <Link to="/cart">Go to Cart</Link>
      <Switch>
        <Route path="/cart">
          <Cart cartItems={cartItems} />
        </Route>
        <Route path="/">
          <Product addToCart={addToCart} />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
