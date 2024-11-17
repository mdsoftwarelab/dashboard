import React, { FC, useState } from "react"
import './login.css'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthProvider";

const Login:FC = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
  
    const navigate = useNavigate();
    const validateEmail = () => {
      if (!email) {
        setEmailError("Email is required");
        return false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setEmailError("Invalid email format");
        return false;
      } else {
        setEmailError("");
        return true;
      }
    };
  
    const validatePassword = () => {
      if (!password) {
        setPasswordError("Password is required");
        return false;
      } else {
        setPasswordError("");
        return true;
      }
    };
    const handleSubmit = (e: any) => {
      e.preventDefault();
  
      if (validateEmail() && validatePassword()) {
        console.log("Login successful");
        login("dummyToken");
        navigate("/dashboard");
      }
    };
    return (

      <div className="login-container">
        <div className="login-banner">
          <h1>Hello Casino!</h1>
        </div>
        <div className="login-form-section">
        <form className="login-form" onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="abc@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={validateEmail}
                />
                <label>Password</label>
                <input
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={validatePassword}
                />
              <button
                type="submit"
                onClick={handleSubmit}
              >
                Sign In
              </button>
            </form>
        </div>
      </div>
            
    );
}

export default Login