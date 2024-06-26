import CountryLand from "@/components/custom/CountryLand";
import HighPrez from "@/components/custom/HighPrez";
import SliderforDays from "@/components/custom/SliderforDays";

import logoValpo from "@/assets/croatia/siglaCroat.png";
import imgValpo from "@/assets/croatia/scoalaCroat.jpg";
import CroatFlag from "@/assets/flags/croatia.png";
import day1 from "@/assets/croatia/Croatia_day_1.jpg";
import day2 from "@/assets/croatia/Croatia_day_2.jpg";
import day3 from "@/assets/croatia/Croatia_day_3.jpg";
import day2Extra from "@/assets/croatia/Croatia_day_2_extra.jpg";
import day4 from "@/assets/croatia/Croatia_day_4.jpg";
import day4Extra from "@/assets/croatia/Croatia_day_4_extra.jpg";
import day4ExtraExtra from "@/assets/croatia/Croatia_day_4_extra_extra.jpg";
import day5 from "@/assets/croatia/Croatia_day_5.jpg";
import day5Extra from "@/assets/croatia/Croatia_day_5_extra.jpg";
import day6 from "@/assets/croatia/Croatia_day_6.jpg";

import Image from "next/image";

export const metadata = {
  title: "Croatia | BITL Blog",
};

export default function CroatiaPage() {
  return (
    <main className="">
      <CountryLand title="Croatia" />
      <HighPrez
        country="Croatia"
        schools={[
          {
            city: "Valpovo",
            name: '"Srednja" Valpovo School',
            logo: logoValpo,
            img: imgValpo,
            link: "https://ss-valpovo.hr/",
            descp:
              "Established in 1898 as the Apprentice School in Valpovo, the institution evolved through various names and locations, educating students in fields such as mechanical engineering, electrical engineering, chemical technology, wood processing, agriculture, and trade. It has shaped generations of apprentices, masters, and experts in diverse professional sectors. Valpovo High School is a contemporary and thriving institution offering quality education for students, preparing them for higher studies or the workforce. The school embraces modern teaching methods, supported by dedicated staff, and maintains strong ties with parents, the local community, businesses, and international partners.",
          },
        ]}
      />

      <div className="">
        <div className="mb-10 mt-32 flex w-full items-center justify-center gap-2 md:gap-5">
          <Image
            src={CroatFlag}
            alt="Flag"
            className="w-10 rounded-[50%] shadow-lg shadow-neutral-300 md:w-12 xl:w-14"
          />
          <h2 className="text-3xl xs:text-4xl sm:text-5xl 2xl:text-6xl">
            LTTA Mobility
          </h2>
        </div>
        <div id="ltt" className="h-1 w-full opacity-0"></div>
        <SliderforDays
          content={[
            {
              title: "Exploring Valpovo",
              descp:
                "On the first day of the mobility in Valpovo, all partners attended a walking tour of Valpovo and visited the Museum of Valpovo. After lunch, students made presentations about geographical features, culture and important people in their country. At the end of the presentations everyone had fun through the Kahoot games prepared by partener schools.",
              img: day1,
              day: "1",
            },
            {
              title: "Solar Energy Exploration",
              descp:
                "On the 2nd day of the LTTA 3 in Valpovo, Croatia, students listened to the presentation about solar panels, watched videos about them and learned interesting facts. After the presentations, they had a coffee break and enjoyed the treats prepared by the host teachers.",
              img: day2,
              day: "2",
            },
            {
              title: 'Nature Park "Papuk"',
              descp:
                'Continuing the 2nd day, all members of the project visited the Nature Park "Papuk" which is Unesco Biosphere Reserve and enjoyed the beautiful nature and raised their awareness on the effects of climate change. They had a trekking tour and enjoyed the view of the Grand Waterfall and crystal clear waters of the lakes and the streams.',
              img: day3,
              day: "2",
            },
            {
              title: "Geo Info Center",
              descp:
                "As the final activity of the second day of the mobility in Valpovo, there was a visit to Geo Info Center in the village of Vocin. The participants learned about the history of Earth in an interactive and multimedia way and had the opportunity to learn a lot of interesting things about the part of the flora and fauna in the Papuk Nature Park.",
              img: day2Extra,
              day: "2",
            },
            {
              title: "A Study Visit To Unikom",
              descp:
                'On the 3rd day of the LTTA 3, all members of the project attended a study visit to waste management company "Unikom" of the city of Osijek. They listened a presentation on waste and sorting waste in Osijek, Europe and world in general.',
              img: day4,
              day: "3",
            },
            {
              title: 'Nature Park "Kopacki Rit"',
              descp:
                'After the visit to Unikom, all participants visited the Nature Park "Kopacki Rit", the most valuable zoological reserve in Croatia and home to many birds and other animals. They first listened to a presentation about the park, then rode on a train and then took a boat ride. They learned about the animal and plant species that live there.',
              img: day4Extra,
              day: "3",
            },
            {
              title: "Osijek",
              descp:
                "After all the exploring in the morning, participants in Before it is too late project had free time in Osijek where they had lunch, got coffee and went shopping. In the afternoon they had a guided tour in Osijek during which they visited The Church of St Peter and St Paul, Promenade on the river Drava and Tvrđa (Osijek old town/Fortress).",
              img: day4ExtraExtra,
              day: "3",
            },
            {
              title: "Microscopic Insights",
              descp:
                "On the 4th day of the LTTA 3, we had a workshop called: Microscopic observation of water samples the students studied, recorded and presented the microorganisms they observed from rivers and lakes in their countries with the help of their microscopes.",
              img: day5,
              day: "4",
            },
            {
              title: "Raising Awareness and Developing ICT Skills",
              descp:
                "As the last activity of the 4th day in Valpovo, the students created posters related to Climate Change and the Earth Day using variety of digital tools. In the end, they all presented their posters. Students developed their ICT skills and raised their awareness on environmental issues as well.",
              img: day5Extra,
              day: "4",
            },
            {
              title: "Certificates Ceremony",
              descp:
                "On the final day of the mobility in Valpovo, certificates of attendance were handed in by the members of the Srednja Skola Valpovo. Everyone admired the hospitality and the organisation of the host school and wished to come together again in the following mobilities.",
              img: day6,
              day: "5",
            },
          ]}
        />
      </div>
    </main>
  );
}
