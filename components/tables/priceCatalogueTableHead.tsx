export default function PriceCatalogueTableHead() {
  const columns = [
    "Modelis, komplektacija",
    "Degalai",
    "Variklis",
    "WLTP* Vidutinės degalų sąnaudos (l/100km)",
    "Vidutinė CO\u{00B2} emisija (g/km)",
    "Kaina Eur**",
    "Nuolaida Eur",
    "Galutinė kaina**",
    
  ];

  return (
    <thead className="">
      <tr className="">
        {columns.map((column, index) => {
          return (
            <th
              key={index}
              scope="col"
              className="border border-gray-300 px-1 py-1 text-sm hover:bg-gray-300 md:px-2 md:py-3 md:text-base"
            >
              <a className="" href="#explanations">
                {column}
              </a>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
