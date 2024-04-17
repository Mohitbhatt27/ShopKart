// CSS imports
import { Link, useNavigate } from "react-router-dom";
import Auth from "../../components/Auth/Auth";
import "./Auth.css";
import axios from "axios";
import { signin } from "../../apis/fakeStoreProdApis";
import { useRef, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import UserContext from "../../context/UserContext";


function Login() {
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

  const authRef = useRef(null);
  const navigate = useNavigate();
  const [token, setToken] = useCookies(["jwt-token"]);
  const { setUser } = useContext(UserContext);
  async function onAuthFormSubmit(formDetails) {
    try {
      const response = await axios.post(
        signin(),
        {
          username: formDetails.username,
          email: formDetails.email,
          password: formDetails.password,
        },
        { withCredentials: true }
      );
      const tokenDetails = jwtDecode(response.data.token);
      setUser({ username: tokenDetails.user, id: tokenDetails.id });
      setToken("jwt-token", response.data.token, { httpOnly: true });
      notifySuccess();
      navigate("/");
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
          <Link to="/signup">Donot have an Account? Sign Up Here</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
