import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("userData"));

    if (savedUser && email === savedUser.email && password === savedUser.password) {
      setMessage(`Welcome, ${savedUser.name}!`);
    } else {
      setMessage("Invalid email or password!");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {message && (
          <p className={message.startsWith("Welcome") ? "success" : "error"}>
            {message}
          </p>
        )}

        <button type="submit">Login</button>
      </form>

      <p className="bottom-link">
        Don’t have an account? <Link to="/signup">Signup here</Link>
      </p>
    </div>
  );
}

export default LoginForm;
