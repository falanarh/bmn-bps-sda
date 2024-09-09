import { Collapse } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { BiBuildings } from "react-icons/bi";
import { IoClose, IoMenu } from "react-icons/io5";
import {
  MdGridView,
  MdOutlineDarkMode,
  MdOutlineNotifications,
  MdOutlineWbSunny,
} from "react-icons/md";
import { PiUserCircleDuotone } from "react-icons/pi";
import { TbBuildingWarehouse, TbLogout } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isUserClicked, setIsUserClicked] = useState(false);

  const handleMenuItemClick = () => {
    if (window.innerWidth < 768) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMenuOpen(false);
    }
  }, [location]);

  return (
    <nav className="w-full bg-white dark:bg-gray-800">
      <div className="flex flex-col items-center justify-between font-dmsans">
        <div className="flex justify-between items-center w-full text-lg font-semibold text-gray-800 dark:text-white px-2 md:px-[10%] py-4 md:py-2 border-b border-gray-300 dark:border-gray-600 md:border-b-0 md:border-none">
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
              className="w-8 mr-2 md:w-10"
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
            {isDarkMode ? (
              <MdOutlineWbSunny
                className="text-[24px] mr-2 cursor-pointer"
                onClick={() => setIsDarkMode(!isDarkMode)}
              />
            ) : (
              <MdOutlineDarkMode
                className="text-[24px] mr-2 cursor-pointer"
                onClick={() => setIsDarkMode(!isDarkMode)}
              />
            )}
            <MdOutlineNotifications className="text-[24px] mr-2" />
            <PiUserCircleDuotone
              className="text-[36px] mr-2"
              onClick={() => setIsUserClicked(!isUserClicked)}
            />
            <div className="hidden md:flex md:flex-col">
              <p className="text-[16px]/[18px] font-bold">Falana</p>
              <p className="text-[14px]/[16px]">Admin</p>
            </div>
            <div
              className={`flex flex-col ${
                isUserClicked ? "block" : "hidden"
              } border border-gray-300 dark:border-gray-600 p-2 rounded-md absolute top-14 right-5 bg-white dark:bg-gray-800 z-10 shadow-lg`}
            >
              <p className="text-[16px] font-bold">Falana</p>
              <p className="text-[14px]">Admin</p>
              <p className="text-[16px] font-bold text-red-500 flex items-center">
                Logout <TbLogout className="ml-1" />
              </p>
            </div>
          </div>
        </div>
        <Collapse in={isMenuOpen} className="w-full md:block md:h-auto md:overflow-visible md:relative">
          <div
            className={`w-full font-semibold border-t border-b border-gray-300 dark:border-gray-600 md:flex text-gray-800 dark:text-white md:px-[10%] transform transition-all duration-10000 ease-in-out md:max-h-none md:transform-none md:transition-none`}
          >
            <div className="transition-transform duration-700 ease-in-out transform md:flex">
              <Link
                to="/"
                className={`flex px-3 py-4 ${
                  location.pathname === "/"
                    ? isDarkMode
                      ? "md:border-b-2 md:border-white"
                      : "md:border-b-2 md:border-black"
                    : ""
                } transform transition-all duration-400 ease-in-out`}
                onClick={handleMenuItemClick}
              >
                <MdGridView className="text-[24px] mr-2 text-gray-500 dark:text-gray-300" />
                Beranda
              </Link>
              <Link
                to="/bmn"
                className={`flex px-3 py-4 ${
                  location.pathname === "/bmn"
                    ? isDarkMode
                      ? "md:border-b-2 md:border-white"
                      : "md:border-b-2 md:border-black"
                    : ""
                } transform transition-all duration-400 ease-in-out`}
                onClick={handleMenuItemClick}
              >
                <TbBuildingWarehouse className="text-[24px] mr-2 text-gray-500 dark:text-gray-300" />
                BMN
              </Link>
              <Link
                to="/ruang"
                className={`flex px-3 py-4 ${
                  location.pathname === "/ruang"
                    ? isDarkMode
                      ? "md:border-b-2 md:border-white"
                      : "md:border-b-2 md:border-black"
                    : ""
                } transform transition-all duration-400 ease-in-out`}
                onClick={handleMenuItemClick}
              >
                <BiBuildings className="text-[24px] mr-2 text-gray-500 dark:text-gray-300" />
                Ruang
              </Link>
            </div>
          </div>
        </Collapse>
      </div>
    </nav>
  );
};

export default Navbar;
