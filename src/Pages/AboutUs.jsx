import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-4 md:px-12 lg:px-32 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          About <span className="text-emerald-500">Us</span>
        </h1>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Welcome to{" "}
          <span className="text-emerald-400 font-semibold">Food Share</span> – a
          platform dedicated to reducing food waste and helping communities by
          connecting food donors and receivers. Our mission is to make food more
          accessible to those in need while promoting sustainability and
          compassion.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
        <p className="mb-6 text-justify">
          We believe that no good food should go to waste. Our vision is to
          build a society where excess food is redirected to feed those who are
          hungry – efficiently, safely, and with dignity.
        </p>

        <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Connect food donors with nearby recipients</li>
          <li>Allow volunteers to manage and deliver food safely</li>
          <li>Raise awareness about food waste and hunger</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
        <p className="mb-6 text-justify">
          We are a group of passionate developers, community workers, and
          sustainability advocates who came together with a common goal – to
          create a meaningful impact through technology and kindness.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p>
          Have questions or want to collaborate? Email us at{" "}
          <a
            href="mailto:contact@foodshare.com"
            className="text-emerald-400 underline"
          >
            contact@foodshare.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
