import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    pin: "",
    address: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const { name, age, email, phone, pin, address, password } = formData;

    if (!name || !age || !email || !phone || !pin || !address || !password) {
      return "All fields are required!";
    }

    if (!/^\d{10}$/.test(phone)) {
      return "Phone number must be 10 digits!";
    }

    if (!/^\d{6}$/.test(pin)) {
      return "PIN must be 6 digits!";
    }

    if (/^(\d)\1{5}$/.test(pin)) {
      return "PIN cannot be all the same digits!";
    }

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    localStorage.setItem("userData", JSON.stringify(formData));
    setSuccess("Sign-Up Successful! Redirecting to Login...");
    setTimeout(() => navigate("/login"), 2000);
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="pin"
          placeholder="Enter 6-digit PIN"
          value={formData.pin}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Enter Address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <button type="submit">Register</button>
      </form>

      <p className="bottom-link">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default SignupForm;
