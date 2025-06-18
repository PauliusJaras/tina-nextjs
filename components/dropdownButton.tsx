"use client";

import React, { useState } from "react";
import SvgIcon from "./svgIcon";
import clsx from "clsx";
import Link from "next/link";
import { useMenuStore } from "../stores/zustandStore";

//Dropdown button for the mobile version menu
export default function DropDownButton({ buttonData }) {
  const menuOpen = useMenuStore((state) => state.menuOpen);
  const setMenuOpen = useMenuStore((state) => state.setMenuOpen);
  const [buttonOpen, setButtonOpen] = useState(false);

  const handleClick = () => {
    setButtonOpen((state) => !state);
  };

  const handleMenuState = () => {
    setMenuOpen(menuOpen);
  };

  return (
    <div className="flex cursor-pointer flex-col border-b border-b-gray-500 bg-black/90 px-8 py-4 text-white">
      <button
        onClick={handleClick}
        className="flex w-full items-center justify-between"
      >
        <h5 className="py-2 text-lg font-semibold">{buttonData?.label}</h5>
        <span>
          <SvgIcon
            className="h-6 w-6 hover:opacity-80"
            iconName={clsx({ arrowUp: buttonOpen, arrowDown: !buttonOpen })}
          />
        </span>
      </button>
      <div
        className={clsx(
          "grid overflow-hidden transition-all duration-300 ease-in-out",
          {
            "grid-rows-[1fr] border-t border-t-white opacity-100": buttonOpen,
            "grid-rows-[0fr] opacity-0": !buttonOpen,
          },
        )}
      >
        <div className="flex flex-col divide-y divide-gray-500 overflow-hidden text-sm font-bold text-blue-500">
          {buttonData?.sublinks?.map((sublink, index) => {
            return (
              <Link
                key={sublink?.label + index}
                onClick={handleMenuState}
                className="py-4"
                href={sublink?.link?.url || "/"}
              >
                {sublink?.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
