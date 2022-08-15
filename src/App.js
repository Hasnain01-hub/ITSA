import logo from "./logo.svg";
import "./App.css";
import { React, useEffect, useState, useHistory } from "react";
import { useDispatch } from "react-redux";
import Header from "./Components/Header/Header";
import { Route, Switch } from "react-router-dom";
import Login from "./Components/Header/Login/Signup/Login";
import { auth, db } from "./Firebase";
import Signup from "./Components/Header/Login/Signup/Signup.js";

import Main from "./Components/Header/Home/Main";
import Contactus from "./Components/Contact/Contactus";
import About from "./Components/Header/Home/About";
import Event from "./Components/Event/Event";
import Addevent from "./Components/Event/AddEvent/Addevent";
import AdminRoute from "./Components/Header/Routes/Admin_routes";
import RetriveContact from "./Components/Contact/Retrive contact/RetriveContact";
import { Footer } from "antd/lib/layout/layout";
import Fotter from "./Components/Footer/Fotter";
function App() {
  const dispatch = useDispatch();
  var separatedString1;
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        await db
          .collection("users")
          // .where('uid', '==', user.email)
          .doc(user.email)
          .get()
          .then((doc) => {
            if (doc && doc.exists) {
              separatedString1 = doc.data();
              // console.log("hello data", doc.data());
              //use separatedString1
            }
            dispatch({
              type: "LOGGED_USER",
              payload: {
                name: separatedString1.name,
                email: separatedString1.email,
                token: idTokenResult.token,
                role: separatedString1.role,
                id: separatedString1.email,
              },
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/contactus" component={Contactus} />
        <Route exact path="/aboutus" component={About} />
        <Route exact path="/events" component={Event} />
        {/* <Route exact path="/addevents" component={Addevent} />
        <Route exact path="/admin-contact" component={RetriveContact} /> */}
        <AdminRoute exact path="/admin-contact" component={RetriveContact} /> 
         <AdminRoute exact path="/addevents" component={Addevent} />
        
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
      <Fotter/>
    </>
  );
}

export default App;
