import { IoLogoInstagram } from "react-icons/io5";
import { ImPinterest2 } from "react-icons/im";

export const Footer = () => {
  return (
    <footer className=" bg-gradient-to-r from-darkBlue to-slate-800 py-16 mt-32">
      <div className="flex flex-col items-center tracking-widest">
        <img src="Logo.webp" alt="Logo Image" className="w-[212px] h-[67px]" />
        <p className="text-warmOrange uppercase mt-20 text-xs">Community</p>
        <h2 className="text-center">Follow us on our social networks</h2>
        <p className="max-w-xs md:max-w-xl xl:max-w-6xl text-center mt-8 text-softBlueGray mb-8">
          Join us on social media to share, learn, and grow together in our
          quest for eco-friendly and cost-effective recipes. Your voice matters,
          and we look forward to welcoming you to our engaged community!
        </p>
        <div className="flex items-center gap-8 mt-4">
          <div className="flex flex-col items-center">
            <IoLogoInstagram color="white" className="w-[40px] h-[40px]" />
            <p className="text-softBlueGray text-[20px] tracking-wide">Instagram</p>
          </div>
          <div className="flex flex-col items-center">
            <ImPinterest2 color="white" className="w-[40px] h-[40px]" />
            <p className="text-softBlueGray text-[20px] tracking-wide">Pinterest</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
