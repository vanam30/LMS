import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Overview from "./components/Overview";
import Dashboard from "./components/Dashboard"
import Forgetpassword from "./components/Forgetpassword";
import NewRegister from "./components/NewRegister";
import Adminlogin from "./components/Adminlogin";
import Register from "./components/Register";
import Password from "./components/Password";
import Profile from "./components/Profile";
import "./styles/App.css";
import "./styles/header.css";
import "./components/home.css";
import "./components/Footer.css";
import "./styles/contact.css";
import "./styles/mediaquery.css";
import "./styles/login.css";
import "./styles/newregister.css";
import "./styles/forgetpassword.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reg" element={<NewRegister />}></Route>
        <Route path="/forget" element={<Forgetpassword />}></Route>
        <Route path="/overview" element={<Overview />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/Adminlogin" element={<Adminlogin />}></Route>
        <Route path="/" element={<Adminlogin />}></Route>
        <Route path="/reg" element={<Register />}></Route>
        <Route path="/forget" element={<Password />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
