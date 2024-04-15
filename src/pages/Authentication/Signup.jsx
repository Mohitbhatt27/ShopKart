import { Link, useNavigate } from "react-router-dom";
import Auth from "../../components/Auth/Auth";
import "./Auth.css";
import axios from "axios";
import { signup } from "../../apis/fakeStoreProdApis";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Signup() {
  const navigate = useNavigate();

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

  async function onAuthFormSubmit(authArguments, resetForm) {
    try {
      await axios.post(signup(), {
        username: authArguments.username,
        email: authArguments.email,
        password: authArguments.password,
      });

      notifySuccess();
      navigate("/signin");
    } catch (error) {
      console.log(error);
      notifyError();
      resetForm();
    }
  }

  return (
    <div className="container">
      <div className="row">
        <h2 className="home-title text-center">Welcome to Shop Cart</h2>
      </div>
      <div className="login-wrapper" id="loginForm">
        <h4 className="text-center">Signup</h4>
        <Auth onSubmit={onAuthFormSubmit} />
        <div className="signup-btn text-center" id="showSignupBtn">
          <Link to="/signin">Already have an Account? Sign In Here</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
