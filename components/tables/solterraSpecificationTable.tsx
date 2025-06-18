export default function SolterraSpecificationTable() {
  return (
    <div className="w-[90vw] overflow-x-auto text-xs md:w-[85vw] md:text-base 3xl:w-[50vw]">
      <table className="mt-4 w-full">
        <thead>
          <tr className="">
            <td rowSpan={4} colSpan={3} className="min-w-[600px]">
              &nbsp;
            </td>
            <td
              align="center"
              colSpan={6}
              className="p-2 text-base font-bold uppercase md:text-xl"
            >
              Solterra
            </td>
          </tr>
          <tr className="">
            <td
              colSpan={2}
              className="p-2 text-center text-base font-bold uppercase md:text-xl"
            >
              Limited
            </td>
            <td
              colSpan={2}
              className=" p-2 text-center text-base font-bold uppercase md:text-xl"
            >
              Touring
            </td>
            <td
              colSpan={2}
              className="p-2 text-center text-base font-bold uppercase md:text-xl"
            >
              TOURING+
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="text-left text-base odd:bg-gray-200 even:bg-white md:text-xl">
            <th className="p-2" colSpan={9}>
              Elektrinis variklis
            </th>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Tipas
            </td>
            <td className="text-center" colSpan={6}>
              Nuolatinio magneto kintamosios srovės sinchroniškas variklis
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={2} rowSpan={2}>
              Variklio vieta
            </td>
            <td colSpan={1} className="p-2 text-center">
              priekyje
            </td>
            <td className="p-2 text-center" colSpan={6}>
              Vienas variklis
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td colSpan={1} className="p-2 text-center">
              gale
            </td>
            <td className="p-2 text-center" colSpan={6}>
              Vienas variklis
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={2} rowSpan={3}>
              Didžiausias galingumas
            </td>
            <td colSpan={1} className="p-2 text-center">
              Priekinis variklis (AG (kW))
            </td>
            <td className="p-2 text-center" colSpan={6}>
              109 (80)
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td colSpan={1} className="p-2 text-center">
              Galinis variklis (AG (kW))
            </td>
            <td className="p-2 text-center" colSpan={6}>
              109 (80)
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td colSpan={1} className="p-2 text-center">
              Sistema (AG (kW))
            </td>
            <td className="p-2 text-center" colSpan={6}>
              218 (160)
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={2} rowSpan={2}>
              Didžiausias sukimo momentas
            </td>
            <td colSpan={1} className="p-2 text-center">
              Priekinis variklis (Nm)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              168,5
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td colSpan={1} className="p-2 text-center">
              Galinis variklis (Nm)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              168,5
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr className="text-left text-base odd:bg-white even:bg-gray-200 md:text-xl">
            <th className="p-2" colSpan={9}>
              Duomenys
            </th>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Didžiausias greitis (km/val.)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              160
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Greitėjimas 0–100 km/val. (sec.)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              6,9
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Maksimalus nuvažiuojamas atstumas vienu įkrovimu (WLTP) (km)
            </td>
            <td className="p-2 text-center" colSpan={2}>
              465
            </td>
            <td className="p-2 text-center" colSpan={4}>
              414
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr className="text-left text-base odd:bg-white even:bg-gray-200 md:text-xl">
            <th className="p-2" colSpan={9}>
              Traukos baterija
            </th>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Tipas
            </td>
            <td className="p-2 text-center" colSpan={6}>
              Ličio jonų baterija
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Didžiausia variklio galia (kWh)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              71,4
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Įtampa (V)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              355,2
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Elementų skaičius (units)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              96
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr className="text-left text-base odd:bg-gray-200 even:bg-white md:text-xl">
            <th className="p-2" colSpan={9}>
              Krovimo funkcija
            </th>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Maksimali kintamosios srovės įkroviklio galia (kW)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              11
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Maksimali nuolatinės srovės įkroviklio galia (kW)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              150
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={2} rowSpan={2}>
              Krovimo jungtis
            </td>
            <td className="p-2 text-center" colSpan={1}>
              Tipas
            </td>
            <td className="p-2 text-center" colSpan={6}>
              AC (Type2) / DC (CCS2)
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2 text-center" colSpan={1}>
              Vieta
            </td>
            <td className="p-2 text-center" colSpan={6}>
              Priekyje kairėje
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr className="text-left text-base odd:bg-white even:bg-gray-200 md:text-xl">
            <th className="p-2" colSpan={9}>
              Matmenys ir masė
            </th>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Ilgis (mm)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              4690
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Plotis (mm)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              1860
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Aukštis (mm)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              1650
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Atstumas tarp ašių (mm)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              2850
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={2} rowSpan={2}>
              Tarpuratis
            </td>
            <td className="p-2 text-center" colSpan={1}>
              priekyje (mm)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              1600
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2 text-center" colSpan={1}>
              gale (mm)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              1610
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Mažiausia prošvaisa (esant tuščio automobilio masei) (mm)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              210
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              <a href="#explanations">
                Bagažo skyriaus tūris*1 Dviejų lygių bagažo skyrius (lit.)
              </a>
            </td>
            <td className="p-2 text-center" colSpan={2}>
              421/452
            </td>
            <td className="p-2 text-center" colSpan={4}>
              410/441
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Vietų skaičius (žmonės)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              5
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              <a href="#explanations">
                Važiuoti parengto automobilio su vairuotoju masė *2 (kg)
              </a>
            </td>
            <td className="p-2 text-center" colSpan={2}>
              2010
            </td>
            <td className="p-2 text-center" colSpan={2}>
              2020
            </td>
            <td className="p-2 text-center" colSpan={2}>
              2035
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Bendroji masė (kg)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              2550
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Didžiausia leidžiama vilkimo masė (kg)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              750
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr className="text-left text-base odd:bg-gray-200 even:bg-white md:text-xl">
            <th className="p-2" colSpan={9}>
              Važiuoklė
            </th>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Vairo mechanizmas
            </td>
            <td className="p-2 text-center" colSpan={6}>
              Elektrinis vairo stiprintuvas
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={2} rowSpan={2}>
              Pakaba (nepriklausoma 4 ratų)
            </td>
            <td className="p-2 text-center" colSpan={1}>
              priekyje
            </td>
            <td className="p-2 text-center" colSpan={6}>
              „McPherson“ statramsčių tipo
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2 text-center" colSpan={1}>
              gale
            </td>
            <td className="p-2 text-center" colSpan={6}>
              Dvigubų skersinių svirčių tipo
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Mažiausias apsisukimo skersmuo(m)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              11,2
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={2} rowSpan={2}>
              Stabdžiai
            </td>
            <td className="p-2 text-center" colSpan={1}>
              priekyje
            </td>
            <td className="p-2 text-center" colSpan={6}>
              Aušinami diskiniai
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2 text-center" colSpan={1}>
              gale
            </td>
            <td className="p-2 text-center" colSpan={6}>
              Aušinami diskiniai
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Transmisija
            </td>
            <td className="p-2 text-center" colSpan={6}>
              AWD tipas
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Padangos / rato dydis
            </td>
            <td className="p-2 text-center" colSpan={2}>
              235/60R18, 18×7,5”J
            </td>
            <td className="p-2 text-center" colSpan={4}>
              235/50R20, 20×7,5”J
            </td>
          </tr>
        </tbody>
      </table>
      <div
        id="explanations"
        className="mt-4 w-full border-t border-t-gray-300 pt-4"
      >
        <p>*1 Išmatuota taikant VDA metodą (V214).</p>
        <p>
          *2 Važiuoti parengto automobilio masė priklauso nuo pasirenkamos
          automobilio įrangos.
        </p>
        <p className="mt-4">
          Įmonė pasilieka teisę keisti techninius duomenis ir įrangą be
          išankstinio įspėjimo. Techniniai duomenys ir įranga gali būti keičiami
          atsižvelgiant į vietos sąlygas ir taisykles. Informaciją apie
          pakeitimus dėl vietos sąlygų galite gauti iš jūsų vietovėje
          veikiančios SUBARU atstovybės. Brošiūroje pavaizduoti automobiliai
          skirti tarptautinei rinkai ir gali būti pavaizduoti su įranga, kuri
          neparduodama Lietuvoje.
        </p>
      </div>
    </div>
  );
}
