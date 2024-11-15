import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";

// Lazy loading 
const BentoHeader = lazy(() => import("../components/BentoHeader"));

export const Header = () => {
  return (
    <header className="container mx-auto mt-8 overflow-hidden">
      <Navbar />

      <div className="flex justify-between items-center mt-[-150px]">
        <div className="flex flex-col items-center">
          <motion.h1 
            className="w-[747px] h-[159px] mb-16 tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Totor and Jadou, a universe dedicated to ecological recipes and
            everyday tips for less than €5
          </motion.h1>

          <Suspense fallback={<div className="animate-pulse">...</div>}>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <BentoHeader />
            </motion.div>
          </Suspense>
        </div>

        <motion.div 
          className="mr-[-80px]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <img
            className="w-auto h-auto"
            src="HeaderImage.png"
            alt="Cocoa Grains"
          />
        </motion.div>
      </div>
    </header>
  );
};
