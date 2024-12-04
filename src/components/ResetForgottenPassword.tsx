import React, { useState } from "react";

const ResetForgottenPassword: React.FC = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    const errors = {
      email: "",
      newPassword: "",
      confirmNewPassword: "",
    };

    if (!formValues.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Invalid email format.";
    }
    if (!formValues.newPassword) errors.newPassword = "New password is required.";
    if (!formValues.confirmNewPassword) {
      errors.confirmNewPassword = "Confirm new password is required.";
    } else if (formValues.newPassword !== formValues.confirmNewPassword) {
      errors.confirmNewPassword = "Passwords do not match.";
    }

    setFormErrors(errors);
    return Object.values(errors).every((error) => error === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Password reset successfully!");
    }
  };

  const isFormValid = Object.values(formValues).every((value) => value.trim() !== "");

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center mt-5">
      <div className="w-100">
        <h2 className="text-center mb-4">Reset Forgotten Password</h2>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto border p-4 rounded shadow"
          style={{ width: "50%" }}
        >
          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
              value={formValues.email}
              onChange={handleChange}
            />
            {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
          </div>

          {/* New Password Field */}
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">New Password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              className={`form-control ${formErrors.newPassword ? "is-invalid" : ""}`}
              value={formValues.newPassword}
              onChange={handleChange}
            />
            {formErrors.newPassword && <div className="invalid-feedback">{formErrors.newPassword}</div>}
          </div>

          {/* Confirm New Password Field */}
          <div className="mb-3">
            <label htmlFor="confirmNewPassword" className="form-label">Confirm New Password</label>
            <input
              type="password"
              id="confirmNewPassword"
              name="confirmNewPassword"
              className={`form-control ${formErrors.confirmNewPassword ? "is-invalid" : ""}`}
              value={formValues.confirmNewPassword}
              onChange={handleChange}
            />
            {formErrors.confirmNewPassword && (
              <div className="invalid-feedback">{formErrors.confirmNewPassword}</div>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!isFormValid}
              style={{ cursor: isFormValid ? "pointer" : "not-allowed" }}
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetForgottenPassword;
