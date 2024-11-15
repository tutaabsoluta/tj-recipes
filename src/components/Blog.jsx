import { BlogCard } from "./BlogCard";

export const Blog = () => {
  return (
    <section className="container mx-auto my-16 tracking-widest">
      <p className="text-warmOrange uppercase text-sm">Ecological Tips</p>
      <h3 className="mb-12 text-4xl">Our recipes and ecological tips</h3>

        <div className="grid grid-cols-2 gap-10">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />

        </div>
    </section>
  );
};
