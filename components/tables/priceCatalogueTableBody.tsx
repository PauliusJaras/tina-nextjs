import clsx from "clsx";

export default function PriceCatalogueTableBody({ tableData }) {
  return (
    <>
      <div className="my-8"></div>
      <tbody className="border border-gray-300 text-center">
        <tr className="">
          <td
            className="text-nowrap px-1 py-1 text-left text-sm font-bold hover:bg-gray-300 md:px-6 md:py-3 md:text-xl"
            scope="colgroup"
          >
            {tableData?.header}
          </td>
        </tr>
        {tableData?.rows?.map((row, index) => {
          return (
            <tr key={index}>
              {row?.map((r, index) => {
                if (index > 5) {
                  return (
//                    <p
//                      className="px-1 py-1 text-xs text-red-500 md:px-6 md:py-3 md:text-base whitespace-nowrap"
//                      key={index}
//                    >
//                      {r}
//                    </p>
                  <td
                    key={index}
                    className={clsx(
                      "border border-gray-300 text-nowrap text-red-500 px-1 py-1 text-xs hover:bg-gray-300 md:px-6 md:py-3 md:text-base",
                    )}
                  >
                    {r}
                  </td>

                  );
                }
                return (
                  <td
                    key={index}
                    className={clsx(
                      "border border-gray-300 px-1 py-1 text-xs hover:bg-gray-300 md:px-6 md:py-3 md:text-base",
                      {
                        "text-nowrap text-left": index === 0,
                        "text-nowrap": index === 5  ,
                      },
                    )}
                  >
                    {r}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
      {tableData?.pText && (
        <div className="relative pb-8">
          <p className="text-nowrap absolute py-2">{tableData?.pText}</p>
        </div>
      )}
            {tableData?.pText2 && (
        <div className="relative pb-8">
          <p className="text-nowrap absolute py-2">{tableData?.pText2}</p>
        </div>
      )}
      

    </>
  );
}
