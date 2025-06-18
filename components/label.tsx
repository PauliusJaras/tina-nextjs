//Renders car label component
export default function Label({ labelText }) {
  return (
    <p className="inline border border-red-500 px-4 py-1 text-xs font-bold uppercase text-red-500">
      {labelText}
    </p>
  );
}
