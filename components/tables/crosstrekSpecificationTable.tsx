export default function CrosstrekSpecificationTable() {
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
              className="p-2 text-base font-bold uppercase md:md:text-xl"
            >
              Crosstrek
            </td>
          </tr>
          <tr className="">
            <td
              colSpan={3}
              className="p-2 text-center text-base font-bold uppercase md:text-xl"
            >
              ADVENTURE
            </td>
            <td
              colSpan={3}
              className=" p-2 text-center text-base font-bold uppercase md:text-xl"
            >
              LIMITED / TOURING
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="text-left text-base odd:bg-gray-200 even:bg-white md:text-xl">
            <th className="p-2" colSpan={9}>
              Variklis
            </th>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Tipas
            </td>
            <td className="text-center" colSpan={6}>
              4 cilindrų horizontalus opozicinis, keturtaktis benzininis
              variklis DOHC 16 vožtuvų
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Cilindro skersmuo x stūmoklio eiga (mm)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              84,0 x 90,0
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Darbinis tūris (cm3)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              1995
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Suspaudimo laipsnis
            </td>
            <td className="p-2 text-center" colSpan={6}>
              12,5
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td colSpan={3} className="p-2">
              Degalų sistema
            </td>
            <td className="p-2 text-center" colSpan={6}>
              Tiesioginis įpurškimas
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td colSpan={3} className="p-2">
              Degalų bako talpa (lit.)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              48
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr className="text-left text-base odd:bg-white even:bg-gray-200 md:text-xl">
            <th className="p-2" colSpan={9}>
              Elektrinis variklis
            </th>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Tipas
            </td>
            <td className="text-center" colSpan={6}>
              Nuolatinio magneto kintamosios srovės sinchroniškas variklis
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Didžiausias galingumas (AG(kW))
            </td>
            <td className="p-2 text-center" colSpan={6}>
              16,7 (12,3)
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={3} className="p-2">
              Didžiausias sukimo momentas (Nm (kgfm))
            </td>
            <td className="p-2 text-center" colSpan={6}>
              66 (6,7)
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
            <td className="text-center" colSpan={6}>
              Ličio jonų baterija
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Įtampa (V)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              118,4
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={3} className="p-2">
              Talpa (Ah)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              4,8
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
              Didžiausias galingumas (AG(kW)/esant aps./min.)
            </td>
            <td className="text-center" colSpan={6}>
              136 (100) / 5600
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Didžiausias sukimo momentas (Nm (kgfm) /esant aps./min.)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              182 (18,6)/ 4,000
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={9} className="p-2">
              Didžiausias greitis (km/h)
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Greitėjimas 0–100 km/val. (sec)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              10,8
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={1} rowSpan={2}>
              WLTP
            </td>
            <td className="p-2" colSpan={1}>
              <a href="#explanations">Degalų sąnaudos*1 (litrai/100 km)</a>
            </td>
            <td className="p-2" colSpan={1}>
              vidutiniškai
            </td>
            <td className="p-2 text-center" colSpan={6}>
              7,7
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={1}>
              <a href="#explanations">CO2 emisijag *1 (g/km)</a>
            </td>
            <td className="p-2" colSpan={1}>
              vidutiniškai
            </td>
            <td className="p-2 text-center" colSpan={6}>
              174
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              <a href="#explanations">Išorės triukšmo lygis *2 (dB(A))</a>
            </td>
            <td className="p-2 text-center" colSpan={6}>
              67
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
            <td className="text-center" colSpan={6}>
              4495
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Plotis (mm)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              1800
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={3} className="p-2">
              Aukštis (mm)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              1600
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={3} className="p-2">
              Atstumas tarp ašių (mm)
            </td>
            <td className="p-2 text-center" colSpan={6}>
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
            <td className="p-2 text-center" colSpan={6}>
              1550
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={1}>
              gale (mm)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              1550
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={3} className="p-2">
              Mažiausia prošvaisa (mm)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              220
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={2} rowSpan={2} className="p-2">
              <a href="#explanations">Bagažo skyriaus tūris*3</a>
            </td>
            <td colSpan={1} className="p-2">
              nenulenkus užpakalinių sėdynių (litrai)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              385
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={1} className="p-2">
              nulenkus užpakalines sėdynes (litrai)
            </td>
            <td className="p-2 text-center" colSpan={2}>
              1314
            </td>
            <td className="p-2 text-center" colSpan={4}>
              1314/1297
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={3} className="p-2">
              Vietų skaičius (žmonės)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              5
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={3} className="p-2">
              <a href="#explanations">
                Važiuoti parengto automobilio su vairuotoju masė*4(kg)
              </a>
            </td>
            <td className="p-2 text-center" colSpan={2}>
              1692
            </td>
            <td className="p-2 text-center" colSpan={4}>
              1703
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={3} className="p-2">
              Bendroji masė (kg)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              2100
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={3} className="p-2">
              Didžiausia leidžiama vilkimo masė (kg)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              1270
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={2} rowSpan={2} className="p-2">
              Leidžiama stogo apkrova
            </td>
            <td className="p-2 " colSpan={1}>
              statinis (kg)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              185
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2 " colSpan={1}>
              dinaminis (kg)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              80
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr className="text-left text-base odd:bg-white even:bg-gray-200 md:text-xl">
            <th className="p-2" colSpan={9}>
              Transmisija
            </th>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              AWD tipas
            </td>
            <td className="text-center" colSpan={6}>
              Aktyvioji sukimo momento paskirstymo AWD sistema
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Pavarų dėžės tipas
            </td>
            <td className="p-2 text-center" colSpan={6}>
              „Lineartronic“ automatinė transmisija
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={2} rowSpan={2} className="p-2">
              Perdavimo skaičius
            </td>
            <td colSpan={1} className="p-2">
              D Lineartronic
            </td>
            <td className="p-2 text-center" colSpan={6}>
              3,601 – 0,513
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={1} className="p-2">
              Atbulinės
            </td>
            <td className="p-2 text-center" colSpan={6}>
              3,689
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Varančiosios ašies perdavimo skaičius
            </td>
            <td className="p-2 text-center" colSpan={6}>
              3,700
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr className="text-left text-base odd:bg-white even:bg-gray-200 md:text-xl">
            <th className="p-2" colSpan={9}>
              Važiuoklė
            </th>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Vairo mechanizmas
            </td>
            <td className="text-center" colSpan={6}>
              Krumpliaratinis, su elektriniu stiprintuvu
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={2} rowSpan={2}>
              Pakaba
            </td>
            <td className="p-2" colSpan={1}>
              priekyje
            </td>
            <td className="p-2 text-center" colSpan={6}>
              „McPherson“ statramsčių tipo
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={1} className="p-2">
              gale
            </td>
            <td className="p-2 text-center" colSpan={6}>
              Dvigubų skersinių svirčių tipo
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={3} className="p-2">
              Mažiausias apsisukimo skersmuo (m)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              10,8
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={2} rowSpan={2}>
              Stabdžiai
            </td>
            <td className="p-2" colSpan={1}>
              priekyje
            </td>
            <td className="p-2 text-center" colSpan={6}>
              Aušinami diskiniai
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={1} className="p-2">
              gale
            </td>
            <td className="p-2 text-center" colSpan={6}>
              Aušinami diskiniai
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td colSpan={3} className="p-2">
              Padangos / rato dydis
            </td>
            <td className="p-2 text-center" colSpan={3}>
              225/60R17, 17 x 7”J
            </td>
            <td className="p-2 text-center" colSpan={3}>
              225-55R18, 18x7”J
            </td>
          </tr>
        </tbody>
      </table>
      <div
        id="explanations"
        className="mt-4 w-full border-t border-t-gray-300 pt-4"
      >
        <p>*1 Degalų sąnaudos ir CO2 kiekis: pagal EB 715/2007 – 2018/1832AP</p>
        <p>*2 Išorės triukšmas – pagal ECE R51-03.</p>
        <p>*3 Išmatuota taikant VDA metodą (V214).</p>
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
