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
            toast.error("Current User is not updating", error?.message);
          });
      })
      .catch((error) => {
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
        toast.error("Something went wrong", error?.message);
      })
      .finally(() => setGoogleLoading(false));
  };

  return (
    <section className="py-8">
      <title>Register Page</title>
      <h2 className="text-center text-3xl font-bold text-secondary drop-shadow mb-8">
        Let's Get started!
      </h2>

      <div className="w-full max-w-xl lg:max-w-2xl p-10 mx-auto rounded-3xl bg-white/20 backdrop-blur-xl shadow-xl">
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

        <form onSubmit={handleRegister} className="flex flex-col gap-3">
          <div className="flex items-center py-3">
            <p className="border-b-2 w-[20%] border-[#7B3F00]/70"></p>
            <p className="text-center w-[60%] text-[#7B3F00]/70">
              Or Continue by filling up this form
            </p>
            <p className="border-b-2 w-[20%] border-[#7B3F00]/70"></p>
          </div>

          {/* Name Field */}

          <label className="flex items-center gap-2 text-[#7B3F00]/70">
            <FaRegCircleUser size={24} />
            Username
          </label>

          <input
            type="text"
            name="name"
            required
            className="px-4 py-3 rounded-xl bg-white text-secondary placeholder-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
            placeholder="Your Full Name"
          />

          {/* Photo URL Field */}

          <label className="flex items-center gap-2 text-[#7B3F00]/70">
            <HiOutlinePhotograph size={24} />
            Photo URL
          </label>
          <input
            type="text"
            name="photo"
            required
            className="px-4 py-3 rounded-xl bg-white text-secondary placeholder-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
            placeholder="Your Photo URL"
          />

          {/* Email Field */}

          <label className="flex items-center gap-2 text-[#7B3F00]/70">
            <HiOutlineMail size={24} />
            Email
          </label>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            className="px-4 py-3 rounded-xl bg-white text-secondary placeholder-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
            placeholder="Email address"
          />

          {/* Password Field */}

          <label className="flex items-center gap-2 text-[#7B3F00]/70">
            <MdLockOutline size={24} /> Password
          </label>

          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              autoComplete="current-password"
              required
              className="px-4 py-3 w-full rounded-xl bg-white text-secondary placeholder-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
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
            className="w-full btn py-3 rounded-2xl border-none text-lg bg-primary text-secondary font-medium transition backdrop-blur-xl"
          >
            {loading ? (
              <span className="loading loading-spinner text-secondary"></span>
            ) : (
              "Register"
            )}
          </button>
        </form>

        <Link
          to="/auth/login"
          className="font-semibold mt-6 flex justify-center text-[#7B3F00]"
        >
          Already have an account?
        </Link>
      </div>
    </section>
  );
};

export default Register;
