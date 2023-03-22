import {  Close, Menu } from "@mui/icons-material";
import { Avatar, IconButton} from "@mui/material";
import { useState } from "react";

export default function Navbar() {
  const navArray = [
    { name: "Home", link: "/" },
    {
      name: "Products",
      link: "/products",
      children: ["Product 1", "Product 2"],
    },
    {
      name: "Resources",
      link: "/resources",
      children: ["Resource 1", "Resource 2"],
    },
    { name: "Pricing", link: "/pricing" },
  ];

  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full top-0 left-0 fixed bg-white shadow z-50">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <h2 className="text-2xl font-bold text-black">Untitled Ui</h2>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-600 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ?  <IconButton children={<Close />} color={"black"}/> : <IconButton children={<Menu />} color={"black"}/>}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {navArray.map((item) => {
                return (
                  <li className=" hover:text-indigo-400 cursor-pointer shadow-sm" key={item.name}>
                    {item.name}
                  </li>
                );
              })}
            </ul>

            <div className="mt-3 space-y-2 lg:hidden  md:hidden cursor-pointer">
            <Avatar />
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
        <Avatar />
        </div>
      </div>
    </nav>
  );
}
