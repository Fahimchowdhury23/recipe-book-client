import React from "react";
import { motion } from "motion/react";
import {
  FaChartLine,
  FaCloudUploadAlt,
  FaExclamationCircle,
  FaHeart,
  FaSearch,
  FaSyncAlt,
  FaUserPlus,
  FaUserShield,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaCloudUploadAlt size={30} />,
      title: "Recipe Management",
      desc: "Add, edit, and delete your own recipes with ease.",
    },
    {
      icon: <FaSearch size={30} />,
      title: "Discover",
      desc: "Explore recipes added by other users and find new favorites.",
    },
    {
      icon: <FaHeart size={30} />,
      title: "Like System",
      desc: "Like recipes and help them rise to the top in real time.",
    },
    {
      icon: <FaUserPlus size={30} />,
      title: "Authentication",
      desc: "Secure sign-up and login powered by Firebase.",
    },
    {
      icon: <FaUserShield size={30} />,
      title: "Protected Routes",
      desc: "Access personal features only after logging in.",
    },
    {
      icon: <FaExclamationCircle size={30} />,
      title: "Toasts & Alerts",
      desc: "Enjoy a smooth UX with responsive toasts and alerts.",
    },
    {
      icon: <FaChartLine size={30} />,
      title: "Real-Time Updates",
      desc: "Live like counts and updates with no page refresh.",
    },
    {
      icon: <FaSyncAlt size={30} />,
      title: "Fallbacks",
      desc: "Thoughtful loading and no-data fallbacks for smoother interaction.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="max-w-4xl lg:max-w-7xl mx-auto p-5 lg:p-7"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.h1
        className="text-4xl font-bold text-center mb-4 text-secondary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Website Features
      </motion.h1>

      <motion.p
        className="text-lg text-center text-secondary/70 mb-5 lg:mb-8 max-w-2xl mx-auto"
        variants={item}
      >
        A user-friendly and interactive recipe platform built for food lovers to
        easily gather, curate, and explore recipes — making meal planning simple
        and inspiring.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex cursor-pointer items-center gap-3 p-3 rounded-xl shadow-md bg-accent/40"
            variants={item}
          >
            <div className="text-red-500 text-2xl">{feature.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-base-200">
                {feature.title}
              </h3>
              <p className="text-base-200">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Features;
