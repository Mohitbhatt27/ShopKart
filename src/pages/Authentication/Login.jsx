// CSS imports
import { Link } from "react-router-dom";
import Auth from "../../components/Auth/Auth";
import "./Auth.css";
import axios from "axios";
import { signin } from "../../apis/fakeStoreProdApis";
import { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const authRef = useRef(null);

  const notifyError = () => {
    toast.error("Something went wrong!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const notifySuccess = () =>
    toast.success("Account created successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  async function onAuthFormSubmit(formDetails) {
    try {
      await axios.post(signin(), {
        username: formDetails.username,
        email: formDetails.email,
        password: formDetails.password,
      });
      notifySuccess();
    } catch (error) {
      notifyError();
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
