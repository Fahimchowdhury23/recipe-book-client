import React, { use, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail, HiOutlinePhotograph } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import toast from "react-hot-toast";
import AuthContext from "../Contexts/AuthContext";

const Register = () => {
  const { createUser, updateUser, googleSignIn } = use(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasMinLength = password.length >= 6;

    toast.dismiss();

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

    const profile = {
      displayName,
      photoURL,
    };

    setLoading(true);

    createUser(email, password)
      .then((result) => {
        updateUser(profile)
          .then(() => {
            toast.dismiss();
            toast.success(
              `Woohoo! ${result?.user?.displayName}, you're officially in. Let's have some fun!.`,
              {
                duration: 3000,
                className: "text-center",
              }
            );
            setLoading(false);
            navigate("/");
          })
          .catch((error) => {
            toast.dismiss();
            toast.error("Current User is not updating", error?.message);
          });
      })
      .catch((error) => {
        toast.dismiss();
        if (error.code === "auth/email-already-in-use") {
          toast.error("That email is already taken. Try logging in?");
        } else if (error.code === "auth/weak-password") {
          toast.error(
            "Your password is too weak. Try adding numbers or symbols."
          );
        } else {
          toast.error("Oops, something went wrong. Please try again.");
        }
      });
  };

  const handleGoogleSignIn = () => {
    setGoogleLoading(true);
    googleSignIn()
      .then((result) => {
        toast.dismiss();
        toast.success(
          `Hey there, ${result?.user?.displayName} You just made a great choice joining us! Let's rock!.`,
          {
            duration: 3000,
            className: "text-center",
          }
        );
        setGoogleLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setGoogleLoading(false);
        toast.dismiss();
        toast.error("Something went wrong", error?.message);
      })
      .finally(() => setGoogleLoading(false));
  };

  return (
    <section className="md:py-4 lg:py-7">
      <title>Register Page | Recipe Book</title>
      <h2 className="text-center text-2xl lg:text-3xl font-bold text-secondary drop-shadow mb-2 lg:mb-4">
        Let's Get started!
      </h2>

      <div className="w-full max-w-xl lg:max-w-2xl p-5 pb-3 md:px-8 mx-auto rounded-xl lg:rounded-2xl bg-white/20 backdrop-blur-xl shadow-xl">
        {/* Google Sign In */}

        <button
          onClick={handleGoogleSignIn}
          className="btn rounded-2xl w-full font-semibold bg-primary text-secondary border-none transition backdrop-blur-xl"
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

        <form
          onSubmit={handleRegister}
          className="flex flex-col gap-2 md:gap-3"
        >
          <div className="flex items-center pt-3 pb-1">
            <p className="border-b-2 w-[10%] md:w-[20%] border-accent/70"></p>
            <p className="text-center text-sm md:text-base w-[80%] md:w-[60%] text-accent/70">
              Or Continue by filling up this form
            </p>
            <p className="border-b-2 w-[10%] md:w-[20%] border-accent/70"></p>
          </div>

          {/* Name Field */}

          <label className="flex items-center gap-2 text-accent/70">
            <FaRegCircleUser size={24} />
            Username
          </label>

          <input
            type="text"
            name="name"
            required
            className="px-3 py-2 rounded-xl bg-white text-secondary placeholder-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
            placeholder="Your Full Name"
          />

          {/* Photo URL Field */}

          <label className="flex items-center gap-2 text-accent/70">
            <HiOutlinePhotograph size={24} />
            Photo URL
          </label>
          <input
            type="text"
            name="photo"
            required
            className="px-3 py-2 rounded-xl bg-white text-secondary placeholder-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
            placeholder="Your Photo URL"
          />

          {/* Email Field */}

          <label className="flex items-center gap-2 text-accent/70">
            <HiOutlineMail size={24} />
            Email
          </label>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            className="px-3 py-2 rounded-xl bg-white text-secondary placeholder-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
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
              className="px-3 py-2 w-full rounded-xl bg-white text-secondary placeholder-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
              placeholder="Password"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowPass(!showPass);
              }}
              className="absolute top-3 right-5 cursor-pointer text-secondary  text-2xl"
            >
              {showPass ? <LuEye></LuEye> : <LuEyeClosed></LuEyeClosed>}
            </button>
          </div>

          <button
            type="submit"
            className="w-full btn py-2 rounded-2xl border-none text-lg bg-primary text-secondary font-medium transition backdrop-blur-xl"
          >
            {loading ? (
              <span className="loading loading-spinner text-secondary"></span>
            ) : (
              "Register"
            )}
          </button>
        </form>

        <p className="font-semibold mt-3 w-1/2 mx-auto whitespace-nowrap flex items-center justify-center hover:underline text-accent">
          <Link to="/auth/login">Already have an account?</Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
