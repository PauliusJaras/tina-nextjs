export default function ForesterSpecificationTable() {
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
              colSpan={4}
              className="p-2  text-base font-bold uppercase md:text-xl"
            >
              FORESTER 2.0i e-BOXER
            </td>
          </tr>
          <tr className="">
            <td
              colSpan={1}
              className="p-2 text-center  text-base font-bold uppercase md:text-xl"
            >
              BASE
            </td>
            <td
              colSpan={1}
              className=" p-2 text-center  text-base font-bold uppercase md:text-xl"
            >
              ACTIVE
            </td>
            <td
              colSpan={1}
              className=" p-2 text-center  text-base font-bold uppercase md:text-xl"
            >
              RIDGE
            </td>
            <td
              colSpan={1}
              className=" p-2 text-center  text-base font-bold uppercase md:text-xl"
            >
              SUMMIT
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="text-left  text-base odd:bg-gray-200 even:bg-white md:text-xl">
            <th className="p-2" colSpan={7}>
              Variklis
            </th>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Tipas
            </td>
            <td className="text-center" colSpan={4}>
              4 cilindrų horizontalus opozicinis, keturtaktis benzininis
              variklis Nuolatinio magneto kintamosios srovės sinchroniškas
              variklis
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Cilindro skersmuo x stūmoklio eiga (mm)
            </td>
            <td className="p-2 text-center" colSpan={4}>
              84,0 x 90,0
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Darbinis tūris (cm3)
            </td>
            <td className="p-2 text-center" colSpan={4}>
              1995
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Suspaudimo laipsnis
            </td>
            <td className="p-2 text-center" colSpan={4}>
              12,5
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td colSpan={3} className="p-2">
              Degalų sistema
            </td>
            <td className="p-2 text-center" colSpan={4}>
              Tiesioginis degalų įpurškimas
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td colSpan={3} className="p-2">
              Degalų bako talpa (lit.)
            </td>
            <td className="p-2 text-center" colSpan={4}>
              48
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr className="text-left  text-base odd:bg-white even:bg-gray-200 md:text-xl">
            <th className="p-2" colSpan={7}>
              Traukos baterija
            </th>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Tipas
            </td>
            <td className="text-center" colSpan={4}>
              Ličio jonų baterija
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Didžiausia variklio galia (kW)
            </td>
            <td className="text-center" colSpan={4}>
              13,5
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Įtampa (V)
            </td>
            <td className="p-2 text-center" colSpan={4}>
              118,4
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={3} className="p-2">
              Talpa (Ah)
            </td>
            <td className="p-2 text-center" colSpan={4}>
              4,8
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr className="text-left  text-base odd:bg-gray-200 even:bg-white md:text-xl">
            <th className="p-2" colSpan={7}>
              Perfomance
            </th>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Didžiausias galingumas AG(kW)/esant aps./min.
            </td>
            <td className="text-center" colSpan={4}>
              150 (110) / 5600–6000
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Didžiausias sukimo momentas Nm /esant aps./min
            </td>
            <td className="p-2 text-center" colSpan={4}>
              194 / 4000
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Didžiausias galingumas, elektrinis variklis AG /kW
            </td>
            <td className="p-2 text-center" colSpan={4}>
              16,7 / 12,3
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Didžiausias sukimo momentas, elektrinis variklis Nm
            </td>
            <td className="p-2 text-center" colSpan={4}>
              166
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td colSpan={3} className="p-2">
              Didžiausias greitis km/val.
            </td>
            <td className="p-2 text-center" colSpan={4}>
              188
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td colSpan={3} className="p-2">
              Greitėjimas 0–100 km/val. sek.
            </td>
            <td className="p-2 text-center" colSpan={4}>
              11,8
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td colSpan={3} className="p-2">
              <a href="#explanations">
                Degalų sąnaudos*1 vidutiniškai litrai/100 km
              </a>
            </td>
            <td className="p-2 text-center" colSpan={4}>
              8,1
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td colSpan={3} className="p-2">
              <a href="#explanations">CO2 emisija*1 vidutiniškai g/km</a>
            </td>
            <td className="p-2 text-center" colSpan={4}>
              185
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td colSpan={3} className="p-2">
              <a href="#explanations">External noise level*2 dB(A)</a>
            </td>
            <td className="p-2 text-center" colSpan={4}>
              67
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td colSpan={3} className="p-2">
              Aplinkosaugos klasė
            </td>
            <td className="p-2 text-center" colSpan={4}>
              Euro6d-TEMP
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr className="text-left  text-base odd:bg-white even:bg-gray-200 md:text-xl">
            <th className="p-2" colSpan={7}>
              Matmenys ir masė
            </th>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Ilgis (mm)
            </td>
            <td className="text-center" colSpan={4}>
              4640
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Plotis (mm)
            </td>
            <td className="p-2 text-center" colSpan={4}>
              1815
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={3} className="p-2">
              Aukštis (mm)
            </td>
            <td className="p-2 text-center" colSpan={4}>
              1730
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={3} className="p-2">
              Atstumas tarp ašių (mm)
            </td>
            <td className="p-2 text-center" colSpan={4}>
              2670
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={2} rowSpan={2}>
              Tarpuratis
            </td>
            <td className="p-2" colSpan={1}>
              priekyje (mm)
            </td>
            <td className="p-2 text-center" colSpan={4}>
              1565
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={1}>
              gale (mm)
            </td>
            <td className="p-2 text-center" colSpan={4}>
              1570
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={3} className="p-2">
              Mažiausia prošvaisa (mm)
            </td>
            <td className="p-2 text-center" colSpan={4}>
              220
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={3} className="p-2">
              <a href="#explanations">Bagažo skyriaus tūris*3</a>
            </td>
            <td className="p-2 text-center" colSpan={1}>
              1779
            </td>
            <td className="p-2 text-center" colSpan={3}>
              1751
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={3} className="p-2">
              Vietų skaičius (žmonės)
            </td>
            <td className="p-2 text-center" colSpan={4}>
              5
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={3} className="p-2">
              <a href="#explanations">
                Važiuoti parengto automobilio su vairuotoju masė*4(kg)
              </a>
            </td>
            <td className="p-2 text-center" colSpan={4}>
              1740-1770
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={3} className="p-2">
              Bendroji masė (kg)
            </td>
            <td className="p-2 text-center" colSpan={4}>
              2190
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={3} className="p-2">
              Didžiausia leidžiama vilkimo masė (kg)
            </td>
            <td className="p-2 text-center" colSpan={4}>
              1870
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr className="text-left  text-base odd:bg-gray-200 even:bg-white md:text-xl">
            <th className="p-2" colSpan={7}>
              Transmisija
            </th>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              AWD tipas
            </td>
            <td className="text-center" colSpan={4}>
              Aktyvioji sukimo momento paskirstymo AWD sistema
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Pavarų dėžės tipas
            </td>
            <td className="p-2 text-center" colSpan={4}>
              „Lineartronic“ automatinė transmisija
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={2} rowSpan={2}>
              Perdavimo skaičius
            </td>
            <td className="p-2" colSpan={1}>
              D Lineartronic
            </td>
            <td className="p-2 text-center" colSpan={4}>
              3,601–0,513
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={1}>
              Reverse
            </td>
            <td className="p-2 text-center" colSpan={4}>
              3,689
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Varančiosios ašies perdavimo skaičius
            </td>
            <td className="p-2 text-center" colSpan={4}>
              3,900
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr className="text-left  text-base odd:bg-gray-200 even:bg-white md:text-xl">
            <th className="p-2" colSpan={7}>
              Chassis
            </th>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Vairo mechanizmas
            </td>
            <td className="text-center" colSpan={4}>
              Krumpliaratinis, su elektriniu stiprintuvu
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={2} rowSpan={2}>
              Pakaba
            </td>
            <td className="p-2" colSpan={1}>
              priekyje
            </td>
            <td className="p-2 text-center" colSpan={4}>
              „McPherson“ statramsčių tipo
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={1}>
              gale
            </td>
            <td className="p-2 text-center" colSpan={4}>
              Dvigubų skersinių svirčių tipo
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Mažiausias apsisukimo skersmuo (m)
            </td>
            <td className="p-2 text-center" colSpan={4}>
              10,8
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={2} rowSpan={2}>
              Stabdžiai
            </td>
            <td className="p-2" colSpan={1}>
              priekyje
            </td>
            <td className="p-2 text-center" colSpan={4}>
              Aušinami diskiniai
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={1}>
              gale
            </td>
            <td className="p-2 text-center" colSpan={4}>
              Aušinami diskiniai
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Padangos / rato dydis
            </td>

            <td className="p-2 text-center" colSpan={2}>
              225/60R17, 17×7”J
            </td>
            <td className="p-2 text-center" colSpan={2}>
              225/55R18, 18×7“J
            </td>
          </tr>
        </tbody>
      </table>
      <div
        id="explanations"
        className="mt-4 w-full border-t border-t-gray-300 pt-4"
      >
        <p>*1 Degalų sąnaudos ir CO2 kiekis: pagal EB 715/2007 – 2018/1832AP</p>
        <p>*2 External noise: according to ECE R51-03</p>
        <p>*3 Išmatuota taikant VDA metodą (V214).  </p>
        <p>
          *4 Važiuoti parengto automobilio masė priklauso nuo pasirenkamos
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
