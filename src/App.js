import logo from "./logo.svg";
import "./App.css";
import {React,useEffect,useState,useHistory} from 'react';
import {useDispatch} from 'react-redux';
import Header from "./Components/Header/Header";
import { Route, Switch } from "react-router-dom";
import Login from "./Components/Header/Login/Signup/Login";
import { auth, db } from "./Firebase";
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

            })
          }).catch((error) => {
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
        <Route exact path="/login" component={Login} />
      </Switch>
    </>
  );
}

export default App;
