import SvgIcon from "../svgIcon";
import clsx from "clsx";
import { useMenuStore } from "../../stores/zustandStore";

//Component that renders a dropdown menu with addresses info on mobile screens
export default function MapDropDown({ mapData }) {
  //Zustand variables that control the menu states
  const mapIconState = useMenuStore((state) => state.mapIconState);
  const setMapIconState = useMenuStore((state) => state.setMapIconState);

  //If there's no data, doesn't render the component
  if (mapData == null) return null;

  return (
    <div onClick={setMapIconState}>
      <SvgIcon
        iconName={"map"}
        className={clsx("h-6 w-6 cursor-pointer hover:opacity-50")}
      ></SvgIcon>
      <div
        className={clsx(
          "fixed left-0 top-2 z-[60] min-h-32 w-screen border-t border-t-gray-300 bg-white shadow-md transition-all duration-500 ease-in-out",
          {
            "-translate-y-full opacity-0": !mapIconState,
            "translate-y-20 opacity-100": mapIconState,
          },
        )}
      >
        <div className="flex flex-col gap-2 p-4">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold">Adresas</h3>
            <SvgIcon iconName={"x"} />
          </div>
          {mapData.map((mapItem, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between gap-4"
              >
                <p>{mapItem?.label}</p>
                <a
                  target="_"
                  className="min-h-12 bg-blue-500 px-6 py-2 text-center font-semibold text-white"
                  href={mapItem?.mapLink}
                >
                  {mapItem?.buttonLabel}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
