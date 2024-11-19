export const Hero = () => {
  return (
    <section className="container md:w-[700px] md:mx-auto bg-gradient-to-r from-darkBlue to-slate-800 rounded-[35px] px-8 md:px-16 pt-16 pb-40 tracking-widest relative mt-16 mx-4 w-auto xl:w-auto">
      <p className="text-warmOrange uppercase text-center mb-2 text-sm">
        Our purpose
      </p>
      <h3 className="text-center mb-8">Our ambitions and values</h3>
      <p className="leading-relaxed text-sm md:text-xl text-center xl:text-left">
        Our eco-friendly and budget-friendly recipe blog was born from our deep
        commitment to sustainable and affordable food for all. We firmly believe
        that ecology and well-being should not be a luxury, but accessible to
        everyone. Our mission is to share delicious and nutritious recipes that
        respect the planet while protecting your wallet.
      </p>
      <br />
      <p className="leading-relaxed text-sm md:text-xl text-center xl:text-left">
        We promote the use of organic, responsibly grown ingredients and
        encourage our readers to favor local products to reduce their carbon
        footprint. By joining our community, you will discover not only how to
        eat well inexpensively, but also how every little gesture counts in
        preserving our environment. Together, we can make a meaningful
        difference while enjoying tasty, planet-friendly meals.
      </p>
      <img
        src="Sign.png"
        alt="Signature"
        className="absolute -bottom-1 md:-bottom-8 right-16"
      />
    </section>
  );
};
