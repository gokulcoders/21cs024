import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProductsPage from './components/All Products/AllProductsPage';
import ProductDetailsPage from "./components/Product/ProductDetailsPage";



function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={AllProductsPage} />
          <Route path="/product/:productId" component={ProductDetailsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;