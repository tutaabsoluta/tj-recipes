import { motion } from "framer-motion";
import { BlogCard } from "./BlogCard";

export const Blog = () => {
  return (
    <section className="container mx-auto my-16 tracking-widest">
      <p className="text-warmOrange uppercase text-sm">Ecological Tips</p>
      <h3 className="mb-12 text-4xl">Our recipes and ecological tips</h3>

      <motion.div 
        className="grid grid-cols-2 gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        </motion.div>
    </section>
  );
};
