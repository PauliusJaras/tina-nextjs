//Returns page title component based on the title param
export default function PageTitle({ title = "Puslapis" }) {
  return (
    <>
      <h1 className="py-2 text-3xl font-semibold normal-case text-gray-800">
        {title[0].toUpperCase() + title.slice(1)}
      </h1>
      <div className="relative my-4">
        <div className="full-border border-b-4 border-b-blue-500"></div>
        {/* <div className="color-border absolute bottom-0 w-48 border-b-4 border-b-blue-500"></div> */}
      </div>
    </>
  );
}
