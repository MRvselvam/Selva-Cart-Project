import React, { useState } from "react";
import * as Images from "../../ImageFolder/Image";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully");
      setEmail(""); // Clear email input
      setPassword(""); // Clear password input
      setConfirmPassword(""); // Clear confirm password input
    }
  };

  const validate = () => {
    const error = {};
    if (!email) {
      error.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = "Email format is incorrect";
    }

    if (!password) {
      error.password = "Password is required";
    } else if (password.length < 8) {
      error.password = "Password must be at least 8 characters long";
    }

    if (!confirmPassword) {
      error.confirmPassword = "Confirm Password is required";
    } else if (confirmPassword !== password) {
      error.confirmPassword = "Passwords do not match";
    }

    return error;
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="container mt-5" style={{ height: "81vh" }}>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <form onSubmit={handleSubmit}>
            <h4 className="mb-3 fw-bold">Sign In</h4>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-muted">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="mb-3 position-relative">
              <label htmlFor="password" className="form-label text-muted">
                <strong>Password</strong>
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-link position-absolute end-0 top-0"
                style={{ marginTop: "32px" }}
                onClick={togglePasswordVisibility}
              >
                <img
                  src={passwordVisible ? Images.openEye : Images.closeEye}
                  alt="Togile passward visiblity"
                  style={{ width: "20px", height: "20px" }}
                  className="mb-4"
                />
              </button>
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            <div className="mb-3 position-relative">
              <label
                htmlFor="confirmPassword"
                className="form-label text-muted"
              >
                <strong>Confirm Password</strong>
              </label>
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                className={`form-control ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-link position-absolute end-0 top-0"
                style={{ marginTop: "32px" }}
                onClick={toggleConfirmPasswordVisibility}
              >
                <img
                  src={
                    confirmPasswordVisible ? Images.openEye : Images.closeEye
                  }
                  alt="Togile passward visiblity"
                  style={{ width: "20px", height: "20px" }}
                  className="mb-4"
                />
              </button>
              {errors.confirmPassword && (
                <div className="invalid-feedback">{errors.confirmPassword}</div>
              )}
            </div>
            <button
              type="submit"
              className="fw-bold form-control btn btn-primary mt-3 mb-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
