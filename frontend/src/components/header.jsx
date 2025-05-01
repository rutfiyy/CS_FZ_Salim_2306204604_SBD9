import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-black text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between py-2 px-8">
        <nav className="flex gap-8">
          <div className="flex items-center">
            <button
              onClick={() => navigate("/")}
              className="text-xl font-semibold hover:text-gray-400 cursor-pointer"
            >
              Home
            </button>
          </div>

          <div className="flex items-center">
            <button
              onClick={() => navigate("/browse")}
              className="text-xl font-semibold hover:text-gray-400 cursor-pointer"
            >
              Browse
            </button>
          </div>

          <div className="flex items-center">
            <button
              onClick={() => navigate("/register")}
              className="text-xl font-semibold hover:text-gray-400 cursor-pointer"
            >
              Register
            </button>
          </div>

          <div className="flex items-center">
            <button
              onClick={() => navigate("/login")}
              className="text-xl font-semibold hover:text-gray-400 cursor-pointer"
            >
              Login
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;