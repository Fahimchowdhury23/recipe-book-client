import React from "react";
import { motion } from "motion/react";

const Contact = () => {
  const branches = [
    {
      name: "Downtown Branch",
      address: "123 Main Street, City Center, Dhaka",
      phone: "+880 1234 567890",
    },
    {
      name: "Uptown Branch",
      address: "456 North Avenue, Gulshan, Dhaka",
      phone: "+880 2345 678901",
    },
    {
      name: "Lakeside Branch",
      address: "789 Lake Road, Banani, Dhaka",
      phone: "+880 3456 789012",
    },
    {
      name: "Hillview Branch",
      address: "321 Hill Street, Chittagong",
      phone: "+880 4567 890123",
    },
    {
      name: "Beachside Branch",
      address: "654 Ocean Drive, Cox's Bazar",
      phone: "+880 5678 901234",
    },
    {
      name: "Tech Park Branch",
      address: "987 Silicon Blvd, Rajshahi",
      phone: "+880 6789 012345",
    },
  ];

  return (
    <motion.div
      className="max-w-7xl mx-auto px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-4xl font-bold text-center text-accent mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Let's Get in Touch
      </motion.h2>

      <motion.p
        className="text-lg  text-center mb-4 lg:mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        We're growing fast! Find us at any of our six locations across the
        country. Whether you're craving recipes or looking to connect, there's
        always a branch near you.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {branches.map((branch, index) => (
          <motion.div
            key={index}
            className="card bg-base-100 shadow-md border-1 border-accent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <div className="card-body">
              <h3 className="card-title text-lg text-accent">{branch.name}</h3>
              <p>{branch.address}</p>
              <p>{branch.phone}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Contact;
