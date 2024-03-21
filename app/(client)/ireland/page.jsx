import CountryLand from "@/components/custom/CountryLand";
import ProfiMeeting from "@/components/custom/ProfiMeeting";

import IrelandFlag from "@/assets/flags/ireland.png";
import TPMIreland1 from "@/assets/ireland/tpmIreland1.jpg";
import TPMIreland2 from "@/assets/ireland/tpmIreland2.jpg";
import TPMIreland3 from "@/assets/ireland/tpmIreland3.jpg";

const TPMPhotos = [TPMIreland1, TPMIreland2, TPMIreland3];

export default function IrelandPage() {
  return (
    <main>
      <CountryLand title="Ireland" />
      <ProfiMeeting
        flag={IrelandFlag}
        title="TP Meeting"
        activityPhotos={TPMPhotos}
      >
        The second TPM (Transnational Project Meeting) of the project took place
        in{" "}
        <span className="text-textBlue text-lg font-semibold lg:text-xl">
          Dublin
        </span>
        ,
        <span className="text-textBlue text-lg font-semibold lg:text-xl">
          Ireland
        </span>
        , hosted by I&F Education Limited. Teachers from Romania, Croatia,
        Poland, and Türkiye attended the meeting. The meeting included the
        review of the first TPM in Romania and the C1 meeting in Nazilli,
        Türkiye. Moreover, dissemination plans and the distribution of duties
        were decided. Partners of the project also agreed on the planning of
        future activities and project management and implementation. The meeting
        ended with the presentation of the certificates and a farewell dinner.
        Thank you to the host institution and all participating teachers. Hope
        to see you in the following meetings.
      </ProfiMeeting>
    </main>
  );
}
