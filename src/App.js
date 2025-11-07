import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}


function WelcomePage() {
  return (
    <div className="form-container">
      <h2>Welcome</h2>
      <p style={{ marginBottom: "20px", color: "#555" }}>
        Please choose an option below:
      </p>
      <div className="nav-buttons" style={{ justifyContent: "center" }}>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
