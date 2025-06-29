import React from "react";
import { BiCalendar } from "react-icons/bi";
import { HiHandRaised } from "react-icons/hi2";

const Newsletter = () => {
  return (
    <div className="relative isolate overflow-hidden bg-secondary/50 py-12 sm:py-24 lg:py-30">
      <div className="mx-auto max-w-6xl lg:max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:gap-y-16 lg:max-w-none lg:grid-cols-2">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <BiCalendar aria-hidden="true" className="size-6 text-white" />
              </div>
              <dt className="mt-4 text-lg font-bold">Weekly recipes</dt>

              <dd className="mt-2 text-base/6 text-white">
                Stay inspired with our{" "}
                <strong className="font-bold">weekly recipes</strong> featuring
                fresh recipes, cooking tips, and seasonal favorites.
              </dd>
            </div>

            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HiHandRaised
                  aria-hidden="true"
                  className="size-6 text-white"
                />
              </div>

              <dt className="mt-4 text-lg font-bold">No spam</dt>

              <dd className="mt-2 text-base/6 text-white">
                We respect your inbox —{" "}
                <strong className="font-bold">no spam</strong>, just flavorful
                updates you'll actually want to read.
              </dd>
            </div>
          </dl>

          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Subscribe to our Newsletter
            </h2>

            <p className="mt-2 lg:mt-4 text-lg text-base-100">
              Get the latest recipes, cooking tips, and tasty updates delivered
              straight to your inbox. No spam, just flavor. 🍽️
            </p>

            <div className="mt-5 flex max-w-md justify-center lg:justify-start gap-x-3 md:gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>

              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white/90 px-3.5 py-2 text-primary placeholder-primary focus:outline-none focus:ring-1 focus:ring-secondary outline-1 -outline-offset-1 outline-white/10  focus:-outline-offset-2 focus-visible:outline-secondary"
              />

              <button
                type="submit"
                className="flex-none btn border-none rounded-md cursor-pointer bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1155/678 w-288.75 bg-linear-to-tr from-[#887979] to-[#884c43] opacity-30"
        />
      </div>
    </div>
  );
};

export default Newsletter;
