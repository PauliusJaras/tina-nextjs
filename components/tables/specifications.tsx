import CrosstrekSpecificationTable from "./crosstrekSpecificationTable";
import ForesterSpecificationTable from "./foresterSpecificationTable";
import Forester2025SpecificationTable from "./forester2025SpecificationTable";
import OutbackSpecificationTable from "./outbackSpecificationTable";
import SolterraSpecificationTable from "./solterraSpecificationTable";

const modelComponent = [
  {
    model: "forester",
    component: <ForesterSpecificationTable />,
  },
  {
    model: "forester e-boxer",
    component: <ForesterSpecificationTable />,
  },
  {
    model: "naujasis forester",
    component: <Forester2025SpecificationTable />,
  },
  {
    model: "crosstrek",
    component: <CrosstrekSpecificationTable />,
  },
  {
    model: "solterra",
    component: <SolterraSpecificationTable />,
  },
  {
    model: "outback",
    component: <OutbackSpecificationTable />,
  },
];

//Returns selected car specifications
export default function Specifications({ model }) {
  if (model == null) {
    return null;
  }

  return (
    <div className="mt-4 flex flex-col justify-center">
      {modelComponent?.map((currentItem) => {
        if (currentItem.model === model.toLowerCase())
          return currentItem.component;
      })}
    </div>
  );
}
