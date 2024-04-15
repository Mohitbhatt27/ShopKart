import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainRoutes from './routes/MainRoutes'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    
    <div className="app-wrapper">
      {/* Common header for all pages */}
      <ToastContainer/>
      <Header color="light" light={true} expand="md" container="md" />
      <MainRoutes />

      {/* Common footer for all pages */}
      <Footer />
    </div>
  );
}

export default App;
