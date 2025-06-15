import { FaGripfire } from "react-icons/fa";
import image from "../assets/Home/Support.png";
import { animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { motion } from "motion/react";
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
    <div className="py-20">
      <div className="hero" style={{ backgroundImage: `url(${image})` }}>
        <div className="hero-overlay bg-[#23ad0e]/60"></div>
        <div className="container mx-auto px-5 py-28">
          <div className="mb-10">
            <div>
              <div className="flex justify-center gap-3">
                <div>
                  <FaGripfire className="text-2xl text-[#23ad0e]"></FaGripfire>
                </div>
                <p className="mb-4 text-xl text-white">Food Sharing</p>
              </div>
              <div>
                <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-white text-center">
                  Be a Hand Proud to Say, After Providing The Best Non-Profit
                  Support.
                </h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="bg-white p-7">
              <div className="flex justify-center">
                <GiHumanPyramid className="text-5xl text-[#23ad0e]"></GiHumanPyramid>
              </div>
              <h2 className="font-bold text-center mt-5">Total Volunteers</h2>
              <motion.div className="text-center text-2xl">
                {rounded1}
              </motion.div>
            </div>

            <div className="bg-white p-7">
              <div className="flex justify-center">
                <FaMedal className="text-5xl text-[#23ad0e]"></FaMedal>
              </div>
              <h2 className="font-bold text-center mt-5">Total Award</h2>
              <motion.div className="text-center text-2xl">
                {rounded2}
              </motion.div>
            </div>

            <div className="bg-white p-7">
              <div className="flex justify-center">
                <AiFillProject className="text-5xl text-[#23ad0e]"></AiFillProject>
              </div>
              <h2 className="font-bold text-center mt-5">
                Successful Projects
              </h2>
              <motion.div className="text-center text-2xl">
                {rounded3}
              </motion.div>
            </div>

            <div className="bg-white p-7">
              <div className="flex justify-center">
                <FaMoneyBillTrendUp className="text-5xl text-[#23ad0e]"></FaMoneyBillTrendUp>
              </div>
              <h2 className="font-bold text-center mt-5">
                Total Amount Raised
              </h2>
              <motion.div className="text-center text-2xl">
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
