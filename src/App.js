import "./App.css";
import React, { createContext, useEffect, useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./Components/SearchPage/SearchPage";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Signin from "./Components/Authentication/Signin";
import Login from "./Components/Authentication/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import firebase from "firebase/app";
import BookingInfo from "./Components/BookingInfo/BookingInfo";
import { userToken } from "./Components/Authentication/firebaseFunctionality";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
export const UserContext = createContext();
function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        const { displayName, email, photoURL } = user;

        let userDetails = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(userDetails);
        userToken();
      }
    });
  }, []);
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Header />
          <Switch>
            {/* <Route path="/search" component={SearchPage} /> */}
            <Route path="/home/search" component={SearchPage} />
            <PrivateRoute path="/product-details/:slug">
              <ProductDetails />
            </PrivateRoute>

            <PrivateRoute path="/bookings">
              <BookingInfo />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <AdminPanel />
            </PrivateRoute>
            {/* <Route path="/product-details/:slug" component={ProductDetails} /> */}
            <Route path="/signup" component={Signin} />
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </Switch>

          <Footer />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
