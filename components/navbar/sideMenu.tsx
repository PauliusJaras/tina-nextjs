"use client";

import Link from "next/link";
import SvgIcon from "../svgIcon";
import { tinaField } from "tinacms/dist/react";
import { useMenuStore } from "../../stores/zustandStore";

export default function SideMenu({ data }) {
  const phoneIconState = useMenuStore((state) => state.phoneIconState);
  const setPhoneIconState = useMenuStore((state) => state.setPhoneIconState);
  const mapIconState = useMenuStore((state) => state.mapIconState);
  const setMapIconState = useMenuStore((state) => state.setMapIconState);
  const setMenuOpen = useMenuStore((state) => state.setMenuOpen);
  const menuOpen = useMenuStore((state) => state.menuOpen);

  const stateHandler = () => {
    if (phoneIconState) {
      setPhoneIconState();
    }
    if (mapIconState) {
      setMapIconState();
    }
  };

  const handleClick = () => {
    if (menuOpen) {
      setMenuOpen(menuOpen);
    }
  };

  return (
    <aside
      onClick={stateHandler}
      className="fixed bottom-0 z-[70] w-full lg:right-0 lg:top-0 lg:z-[60] lg:h-screen lg:w-auto"
    >
      <div className="hidden h-full flex-col items-end justify-center gap-1 text-white lg:flex">
        {data?.map((item, index) => {
          return (
            <Link
              href={item?.url || "/"}
              key={index}
              className="group/item flex cursor-pointer flex-row-reverse overflow-hidden"
            >
              <div
                data-tina-field={item && tinaField(item, "icon")}
                className="border-l border-l-black bg-gray-900 p-2"
              >
                <SvgIcon
                  iconName={item?.icon || "register"}
                  className={"h-6 w-6 self-center"}
                />
              </div>
              <div className="absolute -z-10 h-10 w-48 translate-x-full bg-gray-900 p-2 text-xs font-extralight opacity-0 transition-all duration-300 ease-in-out group-hover/item:translate-x-0 group-hover/item:opacity-100">
                <div className="flex h-full w-full items-center">
                  {item?.label}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div
        onClick={handleClick}
        className="flex h-full w-full justify-stretch divide-x divide-black bg-gradient-to-b from-gray-900 to-gray-700 text-white lg:hidden"
      >
        {data?.map((item, index) => {
          return (
            <Link
              href={item?.url || "/"}
              key={index}
              className={
                "flex h-full w-full cursor-pointer flex-col items-center justify-stretch self-center px-1 py-4"
              }
            >
              <SvgIcon
                iconName={item?.icon || "register"}
                className={"h-4 w-4 self-center sm:h-6 sm:w-6"}
              />
              <p className="text-wrap pt-2 text-center text-xs font-light">
                {item?.label}
              </p>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
