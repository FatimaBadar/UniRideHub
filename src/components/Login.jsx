import { useState } from "react";
import axios from 'axios';

const Login = (props) => {
  const [userInfo, setUserInfo] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    // Make an API request
    try {
      const response = await axios.post("https://localhost:7249/api/Auth/authenticate", {
        method: "POST",
        body: JSON.stringify({ phoneNumber, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("API response:", data);
        setUserInfo(data);
      } else {
        // Handle errors
        console.error("API request failed:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 style={{ textAlign: "center", margin: "30px 0px" }}>Sign In</h3>
      <div className="mb-3">
        <label style={{ width: "280px" }}>Phone number</label>
        <input
          type="tel"
          className="form-control"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="mb-3 d-flex justify-content-between align-center">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
        <p className="forgot-password">
          <a href="#">Forgot password?</a>
        </p>
      </div>
      <div className="d-grid ">
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "120px" }}
        >
          Submit
        </button>
      </div>

      <div className="d-grid mt-5">
        <a
          href="#"
          onClick={() => {
            return props.handleRegister();
          }}
        >
          Don't have an account? Create one
        </a>
      </div>
    </form>
  );
};

export default Login;
