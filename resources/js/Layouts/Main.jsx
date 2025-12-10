import NavBar from "../Components/common/navbar/NavBar";
import Footer from "../Components/common/footer/Footer";
import ScrollToTop from "../Components/common/scrollToTop/ScrollToTop";
import { useEffect, useState } from "react";

const Main = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div
      data-theme={"light"}
      className={`relative transition-opacity duration-700 motion-reduce:transition-none ${mounted ? "opacity-100" : "opacity-0"}`}
    >
      <NavBar />
      {children}
      <div className="bg-[#2A374A]">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Main;
