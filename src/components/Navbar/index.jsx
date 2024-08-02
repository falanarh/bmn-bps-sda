import { useState } from "react";
import { BiBuildings } from "react-icons/bi";
import { IoClose, IoMenu } from "react-icons/io5";
import {
  MdGridView,
  MdOutlineDarkMode,
  MdOutlineNotifications,
} from "react-icons/md";
import { PiUserCircleDuotone } from "react-icons/pi";
import { TbBuildingWarehouse, TbLogout } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserClicked, setIsUserClicked] = useState(false);

  return (
    <nav className="w-full bg-white">
      <div className="flex flex-col items-center justify-between font-nunito">
        <div className="flex justify-between items-center w-full text-lg font-semibold text-pdark px-2 md:px-[10%] py-4 md:py-2 border-b border-slate-300 md:border-b-0 md:border-none">
          <div className="flex items-center">
            <button
              className="focus:outline-none size-[30px] mr-4 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <IoMenu
                className={`${
                  isMenuOpen ? "hidden" : "block"
                } text-[30px] font-bold`}
              />
              <IoClose
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } text-[30px] font-bold`}
              />
            </button>
            <img
              src="/public/images/bps-logo.png"
              className="mr-2 md:size-10 size-8"
              alt="BPS Logo"
            />
            <Link to="/" className="hidden font-bold md:block">
              BMN BPS Kabupaten Sidoarjo
            </Link>
            <Link to="/" className="font-bold md:hidden">
              BMN BPS Sidoarjo
            </Link>
          </div>
          <div className="flex items-center">
            <MdOutlineDarkMode className="text-[24px] mr-2" />
            <MdOutlineNotifications className="text-[24px] mr-2" />
            <PiUserCircleDuotone
              className="text-[36px] mr-2"
              onClick={() => setIsUserClicked(!isUserClicked)}
            />
            <div className="hidden md:flex md:flex-col">
              <p className="text-[16px]/[16px] font-bold">Falana</p>
              <p className="text-[14px]/[18px] font-quicksand">Admin</p>
            </div>
            <div className={`flex flex-col ${isUserClicked ? "block" : "hidden"} border border-slate-300 p-2 rounded-md absolute top-14 right-5 bg-white z-10 shadow-lg`}>
              <p className="text-[16px] font-bold">Falana</p>
              <p className="text-[14px] font-quicksand">Admin</p>
              <p className="text-[16px] font-bold text-red-500 flex items-center">Logout <TbLogout className="ml-1" /></p>
            </div>
          </div>
        </div>
        <div
          className={`w-full font-semibold border-t border-b border-slate-300 md:flex text-pdark md:px-[10%] transform transition-transform duration-500 ease-in-out ${
            isMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
          } md:max-h-none md:transform-none md:transition-none`}
        >
          <Link
            to="/"
            className={`flex px-3 py-4 ${
              location.pathname === "/" ? "md:border-b-2 md:border-black" : ""
            } transition-all duration-100 ease-in-out`}
          >
            <MdGridView className="text-[24px] mr-2 text-slate-500" />
            Beranda
          </Link>
          <Link
            to="/bmn"
            className={`flex px-3 py-4 ${
              location.pathname === "/bmn"
                ? "md:border-b-2 md:border-black"
                : ""
            } transition-all duration-100 ease-in-out`}
          >
            <TbBuildingWarehouse className="text-[24px] mr-2 text-slate-500" />
            BMN
          </Link>
          <Link
            to="/ruang"
            className={`flex px-3 py-4 ${
              location.pathname === "/ruang"
                ? "md:border-b-2 md:border-black"
                : ""
            } transition-all duration-100 ease-in-out`}
          >
            <BiBuildings className="text-[24px] mr-2 text-slate-500" />
            Ruang
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
