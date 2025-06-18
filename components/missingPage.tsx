import SvgIcon from "./svgIcon";
import Link from "next/link";

//Renders missing page with different selections
export default function MissingPage({ url = "/", title = "Go back" }) {
  return (
    <main className="flex flex-col items-center justify-center p-8">
      <h3 className="py-6 text-2xl text-red-500">Puslapis nerastas</h3>
      <div className="flex bg-black px-4 py-1 text-sm font-bold text-white hover:opacity-90 xl:text-lg">
        <Link
          className="flex items-center text-white hover:text-blue-500"
          href={url || "/"}
        >
          {title}
          <SvgIcon iconName={"arrowRight"} className={"h-4 w-4"} />
        </Link>
      </div>
    </main>
  );
}
