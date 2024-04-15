// CSS imports
import { Link } from "react-router-dom";
import Auth from "../../components/Auth/Auth";
import "./Auth.css";
import axios from "axios";
import { signin } from "../../apis/fakeStoreProdApis";
import { useRef } from "react";

function Login() {
  const authRef = useRef(null);

  async function onAuthFormSubmit(formDetails) {
    try {
      await axios.post(signin(), {
        username: formDetails.username,
        email: formDetails.email,
        password: formDetails.password,
      });
    } catch (error) {
      authRef.current.resetFormData();
      console.log(error);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <h2 className="home-title text-center">Welcome to Shop Cart</h2>
      </div>
      <div className="login-wrapper" id="loginForm">
        <h4 className="text-center">Login</h4>
        <Auth onSubmit={onAuthFormSubmit} ref={authRef} />
        <div className="signup-btn text-center" id="showSignupBtn">
          <Link to="/signup">Do not have an Account? Sign Up Here</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
