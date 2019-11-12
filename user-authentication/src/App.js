import React from 'react';
import { Route } from "react-router-dom";

import './App.css';
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <>
      <Navigation />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
    </>
  );
}

export default App;
