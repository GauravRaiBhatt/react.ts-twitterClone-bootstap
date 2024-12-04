import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoTo from "./GoTo";

const Login: React.FC = () => {
  // state variable
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    const errors = {
      email: "",
      password: "",
    };

    if (!formValues.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Invalid email format.";
    }
    if (!formValues.password) errors.password = "Password is required.";

    setFormErrors(errors);
    return Object.values(errors).every((error) => error === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true)
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
        backgroundColor: "#f0f8ff",
        height: "100vh",
        paddingTop: "2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Back Icon */}
      <GoTo path="/" />

      {/* Login Form Container */}
      <div
        className="card shadow-lg p-4"
        style={{ width: "400px", borderRadius: "10px" }}
      >
        <h2 className="text-center mb-4 text-primary">Login</h2>

        <form onSubmit={handleSubmit} noValidate>
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

          {/* Forgot Password */}
          <div className="mb-3 text-end">
            <Link
              to="/recreate-password"
              className="text-decoration-none text-primary"
            >
              Forgot Password?
            </Link>
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
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
