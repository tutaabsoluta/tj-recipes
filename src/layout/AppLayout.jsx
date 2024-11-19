import { Footer, Navbar } from "../ui";

export const AppLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{ children }</main>
      <Footer />
    </div>
  );
};
