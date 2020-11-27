import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { actionType } from "./Reducer";
import { useStateVaule } from "./StateProvider";

function Login() {
  const [{}, dispatch] = useStateVaule();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionType.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c543.png"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to Whatsapp</h1>
        </div>

        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
