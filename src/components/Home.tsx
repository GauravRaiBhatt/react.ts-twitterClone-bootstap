import React from "react";
import { Link } from "react-router-dom";
import twitterLogo from "../assets/twitter.png";

const Home: React.FC = () => {
  return (
    <div className="d-flex flex-column vh-100">
      {/* Main Content */}
      <main className="d-flex flex-grow-1">
        {/* Left Section */}
        <div
          className="d-flex flex-column justify-content-center align-items-center w-50 text-center p-5 border-end"
          style={{ backgroundColor: "#F5F8FA" }}
        >
          <img
            src={twitterLogo}
            alt="Twitter Logo"
            className="img-fluid mb-4"
            style={{ maxWidth: "200px" }}
          />
          <h2 className="text-dark mb-3">Connect, Share, and Explore</h2>
          <p className="text-muted">
            Stay connected with your friends and followers. Share your thoughts,
            photos, and updates instantly. Join the conversation and explore the
            world like never before!
          </p>
        </div>

        {/* Right Section */}
        <div className="d-flex flex-column justify-content-center align-items-center w-50 p-5">
          <h1 className="text-primary mb-4" style={{ fontSize: "4.5rem" }}>
            Twitter
          </h1>
          <h3 className="text-dark mb-4">Join the Community</h3>
          <p className="text-muted mb-4 text-center">
            Sign up to get started or log in to continue exploring the latest
            trends, tweets, and topics.
          </p>
          <Link
            to="/login"
            className="btn btn-primary mb-3 w-50 py-2"
            style={{ fontSize: "1.1rem" }}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="btn btn-outline-primary mb-3 w-50 py-2"
            style={{ fontSize: "1.1rem" }}
          >
            Signup
          </Link>
        </div>
      </main>

      {/* Footer Section */}
      <footer
        className="text-center text-muted py-2"
        style={{ fontSize: "0.9rem", backgroundColor: "#F5F8FA" }}
      >
        © 2024 Twitter Clone. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
