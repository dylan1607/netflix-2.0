import { useState } from "react";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  const transition = () => {
    window.scrollY > 100 ? handleShow(true) : handleShow(false);
  };
  window.addEventListener("scroll", transition);

  return (
    <div
      className={`flex items-center justify-between fixed top-0 z-50 w-auto bg-transparent
    h-16 transition duration-100 ease-in ${show && "bg-black"}`}
    >
      <img
        className="fixed left-2 top-2 h-8 cursor-pointer"
        src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-1024.png"
        alt=""
      />
      <img
        className="fixed right-2 top-2 h-8 cursor-pointer"
        src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-1024.png"
        alt=""
      />
    </div>
  );
};

export default Navbar;
