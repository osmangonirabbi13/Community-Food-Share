import { FaGripfire } from "react-icons/fa";
import image from "../assets/Home/Support.png";
import { animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { GiHumanPyramid } from "react-icons/gi";
import { FaMedal, FaMoneyBillTrendUp } from "react-icons/fa6";
import { AiFillProject } from "react-icons/ai";

const Support = () => {
  const count1 = useMotionValue(0);
  const rounded1 = useTransform(count1, (latest) => Math.round(latest));
  const count2 = useMotionValue(0);
  const rounded2 = useTransform(count2, (latest) => Math.round(latest));
  const count3 = useMotionValue(0);
  const rounded3 = useTransform(count3, (latest) => Math.round(latest));
  const count4 = useMotionValue(0);
  const rounded4 = useTransform(count4, (latest) => Math.round(latest));

  useEffect(() => {
    const controls1 = animate(count1, 455860, { duration: 20 });
    const controls2 = animate(count2, 2052, { duration: 20 });
    const controls3 = animate(count3, 22780, { duration: 20 });
    const controls4 = animate(count4, 1707400, { duration: 20 });

    return () => {
      controls1.stop();
      controls2.stop();
      controls3.stop();
      controls4.stop();
    };
  }, [count1, count2, count3, count4]);

  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div
        className="hero"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-[#23ad0e]/60 dark:bg-black/70"></div>

        <div className="container mx-auto px-5 py-28 text-white">
          <div className="mb-10 text-center">
            <div className="flex justify-center gap-3 items-center">
              <FaGripfire className="text-2xl text-white" />
              <p className="text-xl">Food Sharing</p>
            </div>
            <h1 className="mt-4 text-3xl lg:text-6xl font-bold leading-snug max-w-4xl mx-auto">
              Be a Hand Proud to Say, After Providing The Best Non-Profit
              Support.
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 p-7 rounded-xl shadow-md dark:shadow-lg">
              <div className="flex justify-center">
                <GiHumanPyramid className="text-5xl text-[#23ad0e]" />
              </div>
              <h2 className="font-bold text-center mt-5 text-black dark:text-white">
                Total Volunteers
              </h2>
              <motion.div className="text-center text-2xl font-semibold text-black dark:text-emerald-300">
                {rounded1}
              </motion.div>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 p-7 rounded-xl shadow-md dark:shadow-lg">
              <div className="flex justify-center">
                <FaMedal className="text-5xl text-[#23ad0e]" />
              </div>
              <h2 className="font-bold text-center mt-5 text-black dark:text-white">
                Total Awards
              </h2>
              <motion.div className="text-center text-2xl text-black font-semibold dark:text-emerald-300">
                {rounded2}
              </motion.div>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 p-7 rounded-xl shadow-md dark:shadow-lg">
              <div className="flex justify-center">
                <AiFillProject className="text-5xl text-[#23ad0e]" />
              </div>
              <h2 className="font-bold text-center text-black mt-5 dark:text-white">
                Successful Projects
              </h2>
              <motion.div className="text-center text-black text-2xl font-semibold dark:text-emerald-300">
                {rounded3}
              </motion.div>
            </div>

            {/* Card 4 */}
            <div className="bg-white dark:bg-gray-800 p-7 rounded-xl shadow-md dark:shadow-lg">
              <div className="flex justify-center">
                <FaMoneyBillTrendUp className="text-5xl text-[#23ad0e]" />
              </div>
              <h2 className="font-bold text-center mt-5 text-black dark:text-white">
                Total Amount Raised
              </h2>
              <motion.div className="text-center text-2xl text-black font-semibold dark:text-emerald-300">
                {rounded4}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
