import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoTo from "./GoTo";

const Signup: React.FC = () => {
  // state variable
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    const errors = {
      firstName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!formValues.firstName) errors.firstName = "First name is required.";
    if (!formValues.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Invalid email format.";
    }
    if (!formValues.password) errors.password = "Password is required.";
    if (!formValues.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required.";
    } else if (formValues.password !== formValues.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }

    setFormErrors(errors);
    return Object.values(errors).every((error) => error === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      setTimeout(() => {
        let userId = "myuserid";
        localStorage.setItem("userId", userId);
        navigate("/dashboard/home");
      }, 2000);
      // if failed => setIsLoading(false)
    }
  };

  const isFormValid = Object.values(formValues).every(
    (value) => value.trim() !== ""
  );

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "#eaf6fd", // Light, Twitter-themed blue
        height: "100vh",
        paddingTop: "2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Back Icon */}
      <GoTo path="/" />

      {/* Signup Form Container */}
      <div
        className="card shadow-lg p-4"
        style={{
          width: "400px",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      >
        <h2 className="text-center mb-4 text-primary">Create Your Account</h2>
        <form onSubmit={handleSubmit} noValidate>
          {/* First Name Field */}
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label fw-bold">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={`form-control ${
                formErrors.firstName ? "is-invalid" : ""
              }`}
              placeholder="Enter your first name"
              value={formValues.firstName}
              onChange={handleChange}
            />
            {formErrors.firstName && (
              <div className="invalid-feedback">{formErrors.firstName}</div>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
              placeholder="Enter your email"
              value={formValues.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <div className="invalid-feedback">{formErrors.email}</div>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`form-control ${
                formErrors.password ? "is-invalid" : ""
              }`}
              placeholder="Enter your password"
              value={formValues.password}
              onChange={handleChange}
            />
            {formErrors.password && (
              <div className="invalid-feedback">{formErrors.password}</div>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label fw-bold">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className={`form-control ${
                formErrors.confirmPassword ? "is-invalid" : ""
              }`}
              placeholder="Confirm your password"
              value={formValues.confirmPassword}
              onChange={handleChange}
            />
            {formErrors.confirmPassword && (
              <div className="invalid-feedback">
                {formErrors.confirmPassword}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className={`btn ${
                isFormValid ? "btn-primary" : "btn-secondary"
              } w-100 py-2`}
              disabled={!isFormValid || isLoading}
              style={{
                cursor: isFormValid ? "pointer" : "not-allowed",
              }}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
