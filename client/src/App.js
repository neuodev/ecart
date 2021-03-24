import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchScreen from './screens/SearchScreen';
import Ad from './components/HomeScreen/Ad';
import MiniNav from './components/HomeScreen/MiniNav';
import MainNavbar from './components/HomeScreen/MainNavbar';
import Footer from './components/HomeScreen/Footer';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import Checkouts from './screens/Checkouts';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import AccountScreen from './screens/AccountScreen';
import store from './store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Ad />
        <MiniNav />
        <Switch>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/products' exact component={SearchScreen} />
          <Route path='/product/:id' exact component={ProductScreen} />
          <Route path='/cart/:id' exact component={CartScreen} />
          <Route path='/checkouts' component={Checkouts} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/account' component={AccountScreen} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
