import { Suspense, lazy } from "react";
import { motion } from "framer-motion";

// Lazy loading 
const BentoHeader = lazy(() => import("../components/BentoHeader"));

export const Header = () => {
  return (
    <header className="container mx-auto mt-8 overflow-hidden">

      <div className="xl:flex justify-between items-center xl:mt-[-150px]">
        <div className="xl:flex flex-col items-center">
          <motion.h1 
            className="w-full xl:w-[747px] h-auto xl:h-[159px] mb-16 tracking-wider order-1 md:order-none mt-16 text-center xl:text-left px-6 xl:mx-0"
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
              className="order-2 md:order-none"
            >
              <BentoHeader />
            </motion.div>
          </Suspense>
        </div>

        <motion.div 
          className="mr-[-80px] z-[-1]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <img
            className="w-auto h-auto hidden xl:block"
            src="HeaderImage.webp"
            alt="Cocoa Grains"
          />
        </motion.div>
      </div>
    </header>
  );
};