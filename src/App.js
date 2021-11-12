import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import BuyNow from './Pages/BuyNow/BuyNow';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Payment from './Pages/Dashboard/Payment/Payment';
import Order from './Pages/Dashboard/Order/Order';
import Explore from './Pages/Explore/Explore';
import Dashboards from './Pages/Dashboard/Dashboards/Dashboards';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/explore">
            <Explore></Explore>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>

          <Route path="/payment">
            <Payment></Payment>
          </Route>

          <Route path="/my-order">
            <Order></Order>
          </Route>

          <Route path="/dashboard">
            <Dashboards></Dashboards>
          </Route>

          <PrivateRoute path="/buy-now/:buyNowId">
            <BuyNow></BuyNow>
          </PrivateRoute>

        </Switch>
      </Router>
    </AuthProvider>

  );
}

export default App;
