import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import toast from "react-hot-toast";
import AuthContext from "../Contexts/AuthContext";

const Login = () => {
  const { signInUser, googleSignIn } = use(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  // SignIn With Email and Password

  const handleLogIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasMinLength = password.length >= 6;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    toast.dismiss();

    if (!email) {
      toast.error("Please enter your email first.");
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!hasUppercase) {
      toast.error("Password must include at least one uppercase letter.");
      return;
    }
    if (!hasLowercase) {
      toast.error("Password must include at least one lowercase letter.");
      return;
    }
    if (!hasDigit) {
      toast.error("Password must include at least one digit.");
      return;
    }
    if (!hasMinLength) {
      toast.error("Must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    signInUser(email, password)
      .then((result) => {
        toast.dismiss();
        toast.success(`Welcome back, ${result?.user?.displayName}!`, {
          duration: 1000,
          className: "text-center",
        });
        setLoading(false);
        navigate(state || "/");
      })
      .catch((error) => {
        toast.dismiss();
        toast.error("Invalid username or password", error?.message);
        setLoading(false);
      });
  };

  // SignIn With Google

  const handleGoogleSignIn = () => {
    setGoogleLoading(true);

    googleSignIn()
      .then((result) => {
        toast.dismiss();
        toast.success(
          `Welcome, ${result?.user?.displayName}! You're logged in.`,
          {
            duration: 1000,
            className: "text-center",
          }
        );
        setGoogleLoading(false);
        navigate(state || "/");
      })
      .catch((error) => {
        setGoogleLoading(false);
        toast.dismiss();
        toast.error("Something went wrong", error?.message);
      })
      .finally(() => setGoogleLoading(false));
  };

  return (
    <section className="pb-4 md:py-6 lg:py-16">
      <title>Login | Recipe Book</title>
      <div className="grid grid-cols-1 max-w-2xl lg:max-w-full mx-auto lg:mx-0 gap-2 md:gap-4 lg:gap-0 lg:grid-cols-2">
        <div className="flex flex-col w-full rounded-xl lg:rounded-r-none items-center justify-center bg-[#EDC9AF] shadow-xl">
          <h2 className="text-center pt-6 lg:pt-0 text-3xl md:text-4xl font-bold text-accent drop-shadow md:mb-4 lg:mb-8">
            {state ? "You have to Login first!" : "Welcome Back!"}
          </h2>
          <img
            src="https://i.ibb.co/WpNg6ywr/Humaaans-3-Characters.png"
            alt="3 characters having conversation"
          />
        </div>

        <div className="w-full py-3 md:py-6 xl:py-8 rounded-xl lg:border-l-0 lg:rounded-3xl lg:rounded-l-none lg:rounded-r-xl border border-primary shadow-xl">
          <div className="w-11/12 mx-auto">
            {/* Google Sign In */}

            <button
              onClick={handleGoogleSignIn}
              className="btn rounded-xl w-full font-semibold bg-primary/80 hover:bg-primary text-secondary border-none transition-all backdrop-blur-xl"
            >
              {googleLoading ? (
                <span className="loading loading-spinner text-secondary"></span>
              ) : (
                <>
                  <FcGoogle size={24} className="bg-white rounded-full p-0.5" />
                  Continue with Google
                </>
              )}
            </button>

            {/* Login Form */}

            <form
              onSubmit={handleLogIn}
              className="flex flex-col gap-2 md:gap-3"
            >
              <div className="flex items-center pt-3 pb-1">
                <p className="border-b-2 w-[15%] md:w-[20%] lg:w-[15%] xl:w-[20%] border-accent/70"></p>
                <p className="text-center text-xs whitespace-nowrap md:text-base w-[70%] md:w-[60%] lg:w-[70%] xl:w-[60%] text-accent/70">
                  Or Continue with Email / Password
                </p>
                <p className="border-b-2 w-[15%] md:w-[20%] lg:w-[15%] xl:w-[20%] border-accent/70"></p>
              </div>

              {/* Email Field*/}

              <label className="flex items-center gap-2 text-accent/70">
                <HiOutlineMail size={24} />
                Email
              </label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                className="px-3 py-2 md:py-3 rounded-xl bg-white text-secondary placeholder-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                placeholder="Email address"
              />

              {/* Password Field */}

              <label className="flex items-center gap-2 text-accent/70">
                <MdLockOutline size={24} /> Password
              </label>

              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  className="px-3 py-2 md:py-3 w-full rounded-xl bg-white text-secondary placeholder-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                  placeholder="Password"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPass(!showPass);
                  }}
                  className="absolute top-3 right-5 cursor-pointer text-secondary text-2xl"
                >
                  {showPass ? <LuEye></LuEye> : <LuEyeClosed></LuEyeClosed>}
                </button>
              </div>

              <a className="text-sm text-secondary cursor-pointer hover:underline">
                Forgotten password?
              </a>

              <button
                type="submit"
                className="w-full btn py-2 rounded-xl border-0 text-lg bg-primary/80 hover:bg-primary text-secondary font-medium transition-all backdrop-blur-xl"
              >
                {loading ? (
                  <span className="loading loading-spinner text-secondary"></span>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            <p className="mt-2 md:mt-3 justify-center flex gap-1 text-accent/80">
              New to Recipe Book?
              <Link
                to="/auth/register"
                className="font-semibold hover:underline text-accent"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
