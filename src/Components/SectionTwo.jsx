import React from "react";
import { Link } from "react-router";

const SectionTwo = () => {
  const features = [
    {
      icon: "📸",
      title: "Photo-Guided Recipes",
      slogan: "Visual steps so you never miss a beat in the kitchen.",
    },
    {
      icon: "⏱️",
      title: "Time-Saving Tips",
      slogan: "Quick hacks to prep faster and cook smarter.",
    },
    {
      icon: "🌍",
      title: "Global Cuisines",
      slogan: "Travel the world from your kitchen with global flavors.",
    },
    {
      icon: "💬",
      title: "Community Tips",
      slogan: "See what others say, review and share your own tips.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-yellow-100 to-white py-10 lg:py-16">
      <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col xl:flex-row items-center gap-12">
        {/* Left Side Text Content */}

        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Bring Cooking to Life <br />
            with <span className="text-yellow-500">Flavor & Fun</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6 max-w-xl">
            Unleash your inner chef with our handpicked recipes, stunning
            step-by-step instructions, and a global food-loving community.
            Whether you're cooking for one or hosting a feast, we've got the
            recipe that fits.
          </p>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-yellow-500 text-2xl">{feature.icon}</span>
                <div>
                  <p className="font-semibold text-gray-800">{feature.title}</p>
                  <p className="text-sm text-gray-600">{feature.slogan}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center lg:text-left">
            <Link to="/allRecipes">
              <button className="mt-4 px-6 py-3 btn bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl font-semibold border-0 cursor-pointer">
                Explore Recipes
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1">
          <img
            src="https://i.ibb.co/PZcSZ0FP/istockphoto-664420980-612x612.jpg"
            alt="Cooking Fun"
            className="w-full rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
