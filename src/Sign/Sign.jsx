import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";

const Sign = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { createUser, signUpWithGmail } = useContext(AuthContext);

  const handleregistration = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;

    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Email cannot be blank");
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    }

    if (email && password.length >= 5) {
      createUser(email, password)
        .then((result) => {
          const Loggeduser = result.user;
          console.log(Loggeduser);

          // Save the user to the database
          const userSave = { email: email, name: name, role: "employee" };
          fetch("https://lms-backend-roan.vercel.app/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userSave),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire("Welcome!", "You have been registered.", "success");
                navigate("/");
              }
            });
        })
        .catch((error) => {
          console.error("Error creating user:", error);
        });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div>
        <div className="max-w-screen-xl mx-auto">
          <div className="p-20">
            <div className="card flex-shrink-0 w-2/4 mx-auto shadow-2xl bg-base-100 my-16">
              <form onSubmit={handleregistration} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                  />
                  {emailError && (
                    <p className="text-red-500 mt-2">{emailError}</p>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      className="input input-bordered w-full"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  {passwordError && (
                    <p className="text-red-500 mt-2">{passwordError}</p>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Already have an account?
                    </a>
                  </label>
                  <p>
                    <Link className="text-2xl text-black-700 mt-8" to="/login">
                      Login Now
                    </Link>
                  </p>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn bg-[#000dff] text-white"
                    type="submit"
                    value="Sign In"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
