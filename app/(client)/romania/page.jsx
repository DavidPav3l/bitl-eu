import CountryLand from "@/components/custom/CountryLand";
import HighPrez from "@/components/custom/HighPrez";
import SliderforDays from "@/components/custom/SliderforDays";
import ProfiMeeting from "@/components/custom/ProfiMeeting";

import RomaniaFlag from "@/assets/flags/romania.png";

import logoRac from "@/assets/romania/sigla-ler.jpg";
import imgRac from "@/assets/romania/emailRacovita.jpg";
import logoBuc from "@/assets/romania/crigoreBucuresti.jpg";
import imgBuc from "@/assets/romania/grigoreCerchez.jpg";

import day1 from "@/assets/romania/LttaBuc1.jpg";
import day2 from "@/assets/romania/LttaBuc2.jpg";
import day2Secund from "@/assets/romania/LttaBuc3.jpg";
import day3 from "@/assets/romania/LttaBuc5.jpg";
import day4 from "@/assets/romania/LttaBuc7.jpg";
import day4Secund from "@/assets/romania/LttaBuc6.jpg";
import day5 from "@/assets/romania/LttaBuc8.jpg";

import TPMBuc1 from "@/assets/romania/tpmBucuresti1.jpg";
import TPMBuc2 from "@/assets/romania/tpmBucuresti2.jpg";
import TPMBuc3 from "@/assets/romania/tpmBucuresti3.jpg";
import VMTurcalet1 from "@/assets/romania/vmTurcaleti.jpg";

const VMPhotos = [VMTurcalet1];
const TPMPhotos = [TPMBuc1, TPMBuc2, TPMBuc3];

import Image from "next/image";

export default function RomaniaPage() {
  return (
    <main>
      <CountryLand title="Romania" />
      <HighPrez
        country="Romania"
        schools={[
          {
            city: "Vaslui",
            name: '"Emil Racovita" HighSchool',
            logo: logoRac,
            img: imgRac,
            link: "https://lervs.ro/",
            descp:
              "Founded in 1978, it is committed to providing students with a holistic and comprehensive education. We aim for our students to become active participants in society, benefitting from a well-rounded learning experience through both formal and non-formal methods, preparing them for a successful career according to their potential. With a tradition of over 35 years, our school promotes a focus on excellence and respect for traditional and European values.",
          },
          {
            city: "Bucuresti",
            name: '"Grigore Cerchez" HighSchool',
            logo: logoBuc,
            img: imgBuc,
            link: "https://www.grigorecerchez.ro/",
            descp:
              'Founded in 1908 by Ecaterina and Emanoil Pache Protopopescu, the school building later transformed into the "Grigore Cerchez" Industrial School. It was owned by the Chamber of Commerce and Industry from 1926, hosting a School of Arts and Crafts until the communist regime. The technical focus persisted, evolving into the "Tudor Vladimirescu" Vocational School until 1976. In that year, the Industrial High School "Autobuzul" was established. In 1998, the school was renamed "Grigore Cerchez" in honor of the architect. Finally, from September 1, 2009, it became the "Grigore Cerchez Technological College."',
          },
        ]}
      />
      <ProfiMeeting
        flag={RomaniaFlag}
        title="TP Meeting"
        activityPhotos={TPMPhotos}
      >
        Erasmus+ KA220 project <q>Before It Is Too Late</q> has started its
        mobilities with the first transnational meeting that was carried out in
        the coordinator country,{" "}
        <span className="text-textBlue text-lg font-semibold lg:text-xl">
          Romania
        </span>
        ,{" "}
        <span className="text-textBlue text-lg font-semibold lg:text-xl">
          Bucharest
        </span>
        , with the participants from all the partner countries on{" "}
        <span className="text-textOrange">June 9 and 10</span>. The meeting
        lasted for two days in the host school of{" "}
        <span className="text-textBlue">Grigore Cerchez</span>. After the
        presentations of all partner schools/institutions, the following LTT and
        TPM mobilities were determined and the following project activities were
        negotiated. We were glad to be hosted in Bucharest and look forward to
        meeting again!
      </ProfiMeeting>
      <div className="">
        <div className="mb-10 mt-32 flex w-full items-center justify-center gap-2 md:gap-5">
          <Image
            src={RomaniaFlag}
            alt="Flag"
            className="w-10 rounded-[50%] shadow-lg shadow-neutral-300 md:w-12 xl:w-14"
          />
          <h2 className="font-mont xxs:text-4xl text-3xl sm:text-5xl 2xl:text-6xl">
            LTTA Mobility
          </h2>
        </div>
        <div id="ltt" className="h-1 w-full opacity-0"></div>
        <SliderforDays
          content={[
            {
              title: '"Climate Change Awareness" Presentations',
              descp:
                "During the first day of the LTTA mobility in Romania, presentations on pollution and waste sorting, as well as student-created materials on natural/national parks and waste recycling, garnered significant interest. These contributions are increasing awareness of environmental consciousness and the importance of a cleaner environment for future generations.",
              img: day1,
              day: "1",
            },
            {
              title: "The Paper Mill Museum",
              descp:
                'On the second day, the participants visited the fascinating Paper Mill Museum for an exciting documentation activity and participated in a workshop on the traditional craft of "Rush Weaving."',
              img: day2,
              day: "2",
            },
            {
              title: " Goose Chase app ",
              descp:
                'Using the Goose Chase app led to an engaging environmental-themed "Treasure Hunt" within Comana Natural Park. Posters were crafted with the theme "Protect nature!" and a flash mob was performed in the open, highlighting a collective love and commitment to nature.',
              img: day2Secund,
              day: "2",
            },
            {
              title: '"Urlătoarea" Waterfall',
              descp:
                'A nature walk to the "Urlătoarea" Waterfall in Bușteni allowed us to experience the magnificent atmosphere of nature. With these splendid nature activities, we continue to raise awareness about the environment and emphasize the value of nature. We will continue our efforts to leave a cleaner and more livable environment for future generations.',
              img: day3,
              day: "3",
            },
            {
              title: "Grigore Antipa National Museum of Natural History",
              descp:
                'Participants monitored air quality applications at "Drumul Taberei" Park, observing environmental changes and learning about the importance of preserving natural habitats and biodiversity at the Grigore Antipa National Museum of Natural History. With these activities, we continue our efforts to increase awareness about the environment.',
              img: day4,
              day: "4",
            },
            {
              title: "Proper waste separation",
              descp:
                "Informative activities were organized to raise awareness about the proper separation of waste. At the waste sorting station S.C. 3r Green Sr. Chıtıla, we educated and created awareness about environmental consciousness.",
              img: day4Secund,
              day: "4",
            },
            {
              title: "The last day",
              descp:
                "On the final day of the LTTA mobility in Romania, a workshop was conducted at the school, resulting in a video/photo collage and an e-book about climate change activities. Air quality observations were shared, and products created during the mobility were presented at the school, followed by a certificate ceremony and farewell party at Casa Mino Restaurant. This experience contributes to environmental awareness and global consciousness.",
              img: day5,
              day: "5",
            },
          ]}
        />
      </div>
      <ProfiMeeting
        flag={RomaniaFlag}
        title="Virtual Meeting"
        activityPhotos={VMPhotos}
      >
        The Erasmus+ KA220 project <q>BEFORE IT IS TOO LATE</q> held its first
        virtual mobility event on{" "}
        <span className="text-textOrange">May 23rd</span>,{" "}
        <span className="text-textOrange">2023</span>, in coordination with{" "}
        <span className="text-textOrange">
          Technological College <q>Grigore Cerchez</q>
        </span>{" "}
        in{" "}
        <span className="text-textBlue text-lg font-semibold lg:text-xl">
          Bucharest
        </span>
        ,{" "}
        <span className="text-textBlue text-lg font-semibold lg:text-xl">
          Romania
        </span>
        . Partner schools participated in an online competition to develop a
        business plan for a recycled products/bio products/natural products
        company. The event helped students develop their entrepreneurial skills
        and learn about the market economy. Students developed business plans
        that capitalized on the opportunities available in their communities,
        collaborated to create marketing products, used basic concepts specific
        to recycled products/bio products/natural products, and simulated the
        internal processes carried out in a real company and its relations with
        other companies and institutions.
      </ProfiMeeting>
    </main>
  );
}
