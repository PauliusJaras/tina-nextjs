export default function Pagination({
  itemsPerPage,
  totalItems,
  paginate,
}: {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber) => void;
}) {
  const pageNumbers: number[] = [];

  //return the total number of pages
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  //renders page list with its controls passed by paginate function
  return (
    <nav>
      <ul className="mt-4 flex gap-2">
        {pageNumbers.map((pageNumber, index) => {
          return (
            <li
              className="h-6 w-6 bg-black text-center text-white hover:cursor-pointer hover:opacity-50"
              key={index}
              onClick={() => paginate(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
