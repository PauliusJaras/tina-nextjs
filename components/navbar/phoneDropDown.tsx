import SvgIcon from "../svgIcon";
import clsx from "clsx";
import { useMenuStore } from "../../stores/zustandStore";

//Component that renders a dropdown menu with phone numbers info on mobile screens
export default function PhoneDropDown({ phoneData }) {
  //Zustand variables that control the menu states
  const phoneIconState = useMenuStore((state) => state.phoneIconState);
  const setPhoneIconState = useMenuStore((state) => state.setPhoneIconState);

  //If there's no data, doesn't render the component
  if (phoneData == null) return null;

  return (
    <div onClick={setPhoneIconState}>
      <SvgIcon
        iconName={"phone"}
        className={clsx("h-6 w-6 cursor-pointer hover:opacity-50")}
      ></SvgIcon>
      <div
        className={clsx(
          "fixed left-0 top-2 z-[60] min-h-32 w-screen border-t border-t-gray-300 bg-white shadow-md transition-all duration-500 ease-in-out",
          {
            "-translate-y-full opacity-0": !phoneIconState,
            "translate-y-20 opacity-100": phoneIconState,
          },
        )}
      >
        <div className="flex flex-col gap-2 p-4">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold">Susisiekite</h3>
            <SvgIcon iconName={"x"} />
          </div>
          {phoneData?.map((phoneItem, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between gap-4"
              >
                <p>
                  {phoneItem?.label} <br />
                  {phoneItem?.number}
                </p>
                <a
                  className="h-12 bg-blue-500 px-6 py-2 font-semibold text-white"
                  href={`tel:${phoneItem?.number}`}
                >
                  {phoneItem?.buttonLabel
                    ? phoneItem?.buttonLabel
                    : "Skambinti"}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
