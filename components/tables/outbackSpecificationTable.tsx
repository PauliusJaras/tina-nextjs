export default function OutbackSpecificationTable() {
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
              2.5i LINEARTRONIC
            </td>
          </tr>
          <tr className="">
            <td
              colSpan={2}
              className="p-2 text-center text-base font-bold uppercase md:text-xl"
            >
              ADVENTURE/ LIMITED
            </td>
            <td
              colSpan={2}
              className=" p-2 text-center text-base font-bold uppercase md:text-xl"
            >
              TOURING
            </td>
            <td
              colSpan={2}
              className="p-2 text-center text-base font-bold uppercase md:text-xl"
            >
              FIELD
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
              Horizontalus opozicinis, 4 cilindrų, keturtaktis benzininis
              variklis
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Cilindro skersmuo x stūmoklio eiga (mm)
            </td>
            <td className="text-center" colSpan={6}>
              94 x 90
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Darbinis tūris (cm3)
            </td>
            <td className="text-center" colSpan={6}>
              2498
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Suspaudimo laipsnis
            </td>
            <td className="text-center" colSpan={6}>
              12
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Degalų sistema
            </td>
            <td className="text-center" colSpan={6}>
              Daugiataškis įpurškimas
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Degalų bako talpa (litrai)
            </td>
            <td className="text-center" colSpan={6}>
              63
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
              Didžiausias galingumas AG (kW) /esant aps./min
            </td>
            <td className="p-2 text-center" colSpan={6}>
              169 (124) / 5000–5800
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Didžiausias sukimo momentas Nm (kgfm) /esant aps./min
            </td>
            <td className="p-2 text-center" colSpan={6}>
              252 (25,7) / 3800
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Didžiausias greitis (aukščiausia pavara) km/h
            </td>
            <td className="p-2 text-center" colSpan={6}>
              198
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Greitėjimas 0–100 km/val. sek
            </td>
            <td className="p-2 text-center" colSpan={6}>
              10,2
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={1} rowSpan={5}>
              WLTP
            </td>
            <td className="p-2" colSpan={1} rowSpan={5}>
              <a href="#explanations">Degalų sąnaudos *1 litrai/100 km</a>
            </td>
            <td className="p-2" colSpan={1}>
              mažas greitis
            </td>
            <td className="p-2 text-center" colSpan={6}>
              12,2
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={1}>
              vidutinis greitis
            </td>
            <td className="p-2 text-center" colSpan={6}>
              8,1
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={1}>
              didelis greitis
            </td>
            <td className="p-2 text-center" colSpan={6}>
              7,1
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={1}>
              labai didelis greitis
            </td>
            <td className="p-2 text-center" colSpan={6}>
              8,7
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={1}>
              vidutiniškai
            </td>
            <td className="p-2 text-center" colSpan={6}>
              8,6
            </td>
          </tr>

          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={1} rowSpan={5}>
              WLTP
            </td>
            <td className="p-2" colSpan={1} rowSpan={5}>
              <a href="#explanations">CO2 emisija *1 (g/km)</a>
            </td>
            <td className="p-2" colSpan={1}>
              mažas greitis
            </td>
            <td className="p-2 text-center" colSpan={6}>
              276
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={1}>
              vidutinis greitis
            </td>
            <td className="p-2 text-center" colSpan={6}>
              183
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={1}>
              didelis greitis
            </td>
            <td className="p-2 text-center" colSpan={6}>
              161
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={1}>
              labai didelis greitis
            </td>
            <td className="p-2 text-center" colSpan={6}>
              196
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={1}>
              vidutiniškai
            </td>
            <td className="p-2 text-center" colSpan={6}>
              193
            </td>
          </tr>

          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Aplinkosaugos klasė
            </td>
            <td className="p-2 text-center" colSpan={6}>
              Euro6d-TEMP
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              <a href="#explanations">Išorinio triukšmo lygis*2 dB(A)</a>
            </td>
            <td className="p-2 text-center" colSpan={6}>
              67
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr className="text-left text-base odd:bg-gray-200 even:bg-white md:text-xl">
            <th className="p-2" colSpan={9}>
              Matmenys ir masė
            </th>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Ilgis (mm)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              4870
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Plotis(mm)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              1875
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Aukštis su išilginiais stogo bagažinės laikikliais (mm)
            </td>
            <td className="p-2 text-center" colSpan={2}>
              1675
            </td>
            <td className="p-2 text-center" colSpan={2}>
              1675
            </td>
            <td className="p-2 text-center" colSpan={2}>
              1670
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Atstumas tarp ašių (mm)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              2745
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={2} rowSpan={2}>
              Tarpuratis
            </td>
            <td className="p-2" colSpan={1}>
              priekyje (mm)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              1570
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={1}>
              gale (mm)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              1600
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Mažiausia prošvaisa (mm)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              213
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              <a href="#explanations">Bagažo skyriaus tūris*3</a>
            </td>
            <td className="p-2 text-center" colSpan={2}>
              1822
            </td>
            <td className="p-2 text-center" colSpan={2}>
              1750
            </td>
            <td className="p-2 text-center" colSpan={2}>
              1822
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={2} rowSpan={2}>
              Pasipriešinimas judėjimui
            </td>
            <td className="p-2" colSpan={1}>
              statinis (kg)
            </td>
            <td className="p-2 text-center" colSpan={2}>
              185
            </td>
            <td className="p-2 text-center" colSpan={2}>
              185
            </td>
            <td className="p-2 text-center" colSpan={2}>
              318
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={1}>
              dinaminis (kg)
            </td>
            <td className="p-2 text-center" colSpan={2}>
              67,5
            </td>
            <td className="p-2 text-center" colSpan={2}>
              67,5
            </td>
            <td className="p-2 text-center" colSpan={2}>
              100
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={1}>
              Vietų skaičius (žmonės)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              5
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Važiuoti parengto automobilio su vairuotoju masė(kg)
            </td>
            <td className="p-2 text-center" colSpan={2}>
              1664
            </td>
            <td className="p-2 text-center" colSpan={2}>
              1664
            </td>
            <td className="p-2 text-center" colSpan={2}>
              1646
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Bendroji masė (kg)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              2200
            </td>
          </tr>
          <tr className=" odd:bg-gray-200 even:bg-white">
            <td className="p-2" colSpan={3}>
              Didžiausia leidžiama vilkimo masė (kg)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              2200
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr className="text-left text-base odd:bg-white even:bg-gray-200 md:text-xl">
            <th className="p-2" colSpan={9}>
              Varomieji ratai transmisijos
            </th>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              AWD tipas, normali kontrolė priekyje / gale (sukimo momento
              paskirstymas)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              60/40 [„Lineartronic“ su aktyviuoju sukimo momento paskirstymu]
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
            <td className="p-2" colSpan={2} rowSpan={10}>
              Perdavimo skaičius
            </td>
            <td className="p-2" colSpan={1}>
              D Lineartronic
            </td>
            <td className="p-2 text-center" colSpan={6}>
              4,066 – 0,503
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={1}>
              1 pavaros
            </td>
            <td className="p-2 text-center" colSpan={6}>
              4,066 (Rankinis režimas)
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={1}>
              2 pavaros
            </td>
            <td className="p-2 text-center" colSpan={6}>
              2,628 (Rankinis režimas)
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={1}>
              3 pavaros
            </td>
            <td className="p-2 text-center" colSpan={6}>
              1,911 (Rankinis režimas)
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={1}>
              4 pavaros
            </td>
            <td className="p-2 text-center" colSpan={6}>
              1,490 (Rankinis režimas)
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={1}>
              5 pavaros
            </td>
            <td className="p-2 text-center" colSpan={6}>
              1,166 (Rankinis režimas)
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={1}>
              6 pavaros
            </td>
            <td className="p-2 text-center" colSpan={6}>
              0,914 (Rankinis režimas)
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={1}>
              7 pavaros
            </td>
            <td className="p-2 text-center" colSpan={6}>
              0,717 (Rankinis režimas)
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={1}>
              8 pavaros
            </td>
            <td className="p-2 text-center" colSpan={6}>
              0,559 (Rankinis režimas)
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={1}>
              Atbulinės
            </td>
            <td className="p-2 text-center" colSpan={6}>
              4,379
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Varančiosios ašies perdavimo skaičius
            </td>
            <td className="p-2 text-center" colSpan={6}>
              3,900
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
            <td className="p-2 text-center" colSpan={6}>
              Dantratinė elektra valdoma vairo stiprintuvo sistema
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={2} rowSpan={2}>
              Pakaba 4 ratų nepriklausoma
            </td>
            <td className="p-2" colSpan={1}>
              Priekyje
            </td>
            <td className="p-2 text-center" colSpan={6}>
              „MacPherson“ statramsčiai, spiralinės spyruoklės, su
              stabilizatoriumi
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={1}>
              Gale
            </td>
            <td className="p-2 text-center" colSpan={6}>
              Dvigubas trikampis balansyras, spiralinės spyruoklės, su
              stabilizatoriumi
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Mažiausias apsisukimo skersmuo (m)
            </td>
            <td className="p-2 text-center" colSpan={6}>
              11,0
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Stabdžiai
            </td>
            <td className="p-2 text-center" colSpan={6}>
              Aušinamieji diskiniai stabdžiai
            </td>
          </tr>
          <tr className=" odd:bg-white even:bg-gray-200">
            <td className="p-2" colSpan={3}>
              Padangos/rato dydis
            </td>
            <td className="p-2 text-center" colSpan={6}>
              225/60R18, 18×7”J
            </td>
          </tr>
        </tbody>
      </table>
      <div
        id="explanations"
        className="mt-4 w-full border-t border-t-gray-300 pt-4"
      >
        <p>
          *1 Degalų sąnaudos ir CO2 emisijos pagal reglamentus EC 715/2007 -
          2018/1832AP.
        </p>
        <p>*2 Išorinis triukšmas: pagal UN R51-03.</p>
        <p>*3 Išmatuota taikant VDA metodą (V214).</p>
        <p className="mt4-">
          Važiuoti parengto automobilio masė priklauso nuo pasirenkamos
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
