import React, { useState } from "react";
import SvgIcon from "./svgIcon";

//FAQ accordion that on click opens up
export default function Accordion({ data }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="my-2 border p-4">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex w-full items-center justify-between"
      >
        <h5 className="py-2 text-lg font-medium">{data?.question}</h5>
        <span>
          {accordionOpen ? (
            <SvgIcon
              className="h-6 w-6 hover:opacity-80"
              iconName={"arrowUp"}
            />
          ) : (
            <SvgIcon
              className="h-6 w-6 hover:opacity-80"
              iconName={"arrowDown"}
            />
          )}
        </span>
      </button>
      <div
        className={
          `grid overflow-hidden transition-all duration-300 ease-in-out ` +
          (accordionOpen
            ? "grid-rows-[1fr] opacity-100 "
            : "grid-rows-[0fr] opacity-0")
        }
      >
        <div className="overflow-hidden text-sm">{data?.answer}</div>
      </div>
    </div>
  );
}
