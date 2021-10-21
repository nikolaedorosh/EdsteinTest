import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavigBar from "./components/Navbar";
import Profile from "./components/Profile";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigBar />
        <Route exact path='/' component={WelcomePage} />
        <Route exact path='/profile' component={Profile} />
        <Route path='/login' component={SignIn} exact />
        <Route path='/signup' component={SignUp} exact />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
