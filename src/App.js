import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import BuyNow from './Pages/BuyNow/BuyNow';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Payment from './Pages/Dashboard/Payment/Payment';
import Order from './Pages/Dashboard/Order/Order';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
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
            <Dashboard></Dashboard>
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
