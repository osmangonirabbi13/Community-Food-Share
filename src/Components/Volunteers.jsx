import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const volunteers = [
  {
    name: "David Martinez",
    role: "Volunteers",
    desc: "David, our Community Ambassador, connects local businesses with our food sharing platform to reduce food waste and build community unity",
    img: "https://i.ibb.co/ZpMTRCDm/vol4-7ec93344.jpg",
  },
  {
    name: "Alice Johnson",
    role: "Volunteers",
    desc: "Alice, our Community Ambassador, connects local businesses with our food sharing platform to reduce food waste and build community unity",
    img: "https://i.ibb.co/S7Q1P7h2/vol3-c66b28ad.jpg",
  },
  {
    name: "Sarah Williams",
    role: "Volunteers",
    desc: "Sarah, our Content Creator, shares compelling stories that inspire others to join our mission and showcase our community’s impact.",
    img: "https://i.ibb.co/3XBk4J8/vol2-b78219f5.jpg",
  },
  {
    name: "Michael Chen",
    role: "Volunteers",
    desc: "Michael, our Food Safety Officer, safeguards the health and well-being of our community by ensuring food shared on our platform.",
    img: "https://i.ibb.co/mVfKSfDs/vol1-7b685982.jpg",
  },
];

const Volunteers = () => {
  return (
    <section className="py-2 px-4 md:px-10 bg-white dark:bg-gray-900">
      <div className="text-center mb-12">
        <p className="text-green-600 font-semibold text-xl">Food Sharing</p>
        <h2 className="text-3xl md:text-5xl font-bold">
          OUR <span className="">VOLUNTEERS</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-xl mx-auto">
          Join our community of food enthusiasts to share delicious meals, build
          connections, and spread happiness one plate at a time.
        </p>
        <div className="h-1 w-24 bg-green-500 mx-auto mt-4 rounded"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {volunteers.map((vol, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full"
          >
            {/* ✅ Volunteer Image */}
            <img
              src={vol.img}
              alt={vol.name}
              className="w-full h-96 object-cover"
            />

            {/* Volunteer Info */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {vol.name}
              </h3>
              <p className="text-green-600 font-semibold">{vol.role}</p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 flex-grow">
                {vol.desc}
              </p>

              <button className="mt-auto w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Volunteers;
