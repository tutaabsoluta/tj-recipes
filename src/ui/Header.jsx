import { BentoHeader } from "../components";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="container mx-auto mt-8 overflow-hidden">
      <Navbar />

      <div className="flex justify-between items-center mt-[-150px]">
        <div className="flex flex-col items-center">
          <h1 className="w-[747px] h-[159px] mb-16 tracking-wider">
            Totor and Jadou, a universe dedicated to ecological recipes and
            everyday tips for less than €5
          </h1>

          <BentoHeader />
        </div>
        <div className="mr-[-80px]">
          <img
            className="w-auto h-auto"
            src="HeaderImage.png"
            alt="Cocoa Grains"
          />
        </div>
      </div>
    </header>
  );
};
