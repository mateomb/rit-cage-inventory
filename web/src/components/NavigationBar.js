import React, { useState } from "react";
import "../App.css";

export default function NavigationBar() {
  const [navBarOpen, isNavBarOpen] = useState(false);
  const [iconClick, isIconClick] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-200`;

  return (
    <div>
      <div className="flex bg-orange border-b-2 border-gray-300">
        <div
          className={`flex flex-col h-20 w-12 rounded justify-center items-center group hover:cursor-pointer ${
            navBarOpen ? "ml-96" : "ml-2"
          }`}
          onClick={() => isNavBarOpen(!navBarOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${
              navBarOpen ? "rotate-45 translate-y-3 " : ""
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              navBarOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              navBarOpen ? "-rotate-45 -translate-y-3" : ""
            }`}
          />
        </div>
        <h1 className={`pt-6 text-white text-xl font-bold ml-2`}>
          RIT Cage Inventory
        </h1>
      </div>

      <div
        className={`flex flex-col group h-screen absolute top-0 shadow bg-white w-96 ${
          navBarOpen ? "visible" : "hidden"
        }`}
      >
        <div className="border-b-2 border-gray-600">
          <div className="flex ml-12 p-4 ">
            <img
              class=" object-cover w-16 h-16 rounded-full"
              src="http://cdn.onlinewebfonts.com/svg/img_568657.png"
              alt="Profile image"
            />
            <div className="ml-5">
              <p className="font-bold text-xl mt-2">Username</p>
              <p className="ml-8">role</p>
            </div>
          </div>
        </div>
        {/** navigation bar */}
        <div
          className="flex bg-gray-200 text-black py-4 pl-16 hover:cursor-pointer hover:bg-gray-300"
          onClick={() => isIconClick(!iconClick)}
        >
          <p className="font-bold text-xl mt-3">Cage Inventory</p>
          <i
            className={`ml-5 mt-4 fas ${
              iconClick ? "fa-chevron-up" : "fa-chevron-down"
            }`}
          ></i>
        </div>
        <div className={`${iconClick ? "visible" : "hidden"}`}>
          <ul>
            <li className="bg-gray-100 hover:bg-gray-200">
              <a href="/Home">
                <div className="border-b-2 p-3">
                  <p className="font-bold text-xl mt-3 ml-20">Inventory</p>
                </div>
              </a>
            </li>
            <li className="bg-gray-100 hover:bg-gray-200">
              <a href="/Courses">
                <div className="border-b-2 p-3">
                  <p className="font-bold text-xl mt-3 ml-20">Kits</p>
                </div>
              </a>
            </li>
            <li className="bg-gray-100 hover:bg-gray-200">
              <a className={``} href="/Active">
                <div className=" border-b-2 p-3">
                  <p className="font-bold text-xl mt-3 ml-20">
                    Impending returns
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
