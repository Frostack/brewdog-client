import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Header from './Header';
import BeerScreen from './BeerScreen/BeerScreen';
import CartScreen from './CartScreen/CartScreen';
import BeerModal from './UI/Modal/BeerModal';
import ErrorModal from './UI/Modal/ErrorModal';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Redirect exact from="/" to="/ " />
        <Route exact path="/ " component={BeerScreen} />
        <Route exact path="/pizzas" component={BeerScreen} />
        <Route exact path="/steaks" component={BeerScreen} />
        <Route exact path="/favorites" component={BeerScreen} />
        <Route exact path="/cart" component={CartScreen} />
      </Switch>
      <BeerModal />
      <ErrorModal />
    </Router>
  );
}

export default App;
