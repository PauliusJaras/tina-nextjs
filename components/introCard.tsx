import {
  RiLightbulbFlashFill,
  RiShieldStarFill,
  RiEmpathizeFill,
  RiShakeHandsFill,
} from "react-icons/ri";

//Renders an intro card with an icon and text.
export default function IntroCard({ data }) {
  const returnIcon = (icon, className) => {
    if (icon) {
      if (icon === "Shield") return <RiShieldStarFill className={className} />;
      if (icon === "Hands") return <RiShakeHandsFill className={className} />;
      if (icon === "Client") return <RiEmpathizeFill className={className} />;
      if (icon === "Idea")
        return <RiLightbulbFlashFill className={className} />;
    } else return <RiLightbulbFlashFill className={className} />;
  };

  const { header, text, icon } = data;

  return (
    <div className="relative bg-gray-900 px-8 py-12 text-white">
      <div className="absolute right-6 top-6">
        {returnIcon(icon, "h-8 w-8")}
      </div>
      <h3 className="py-6 text-xl font-bold">{header}</h3>
      <p className="text-md font-light">{text}</p>
    </div>
  );
}
