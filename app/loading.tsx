import Spinner from "../components/loading/spinner";

//Renders loading spinner on a black screen
export default function Loading() {
  return (
    <div className="absolute left-0 top-0 z-[101] flex h-screen w-screen items-center justify-center bg-black">
      <Spinner></Spinner>
    </div>
  );
}
