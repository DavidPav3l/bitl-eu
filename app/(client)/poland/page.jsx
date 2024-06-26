import CountryLand from "@/components/custom/CountryLand";
import HighPrez from "@/components/custom/HighPrez";
import SliderforDays from "@/components/custom/SliderforDays";
import ProfiMeeting from "@/components/custom/ProfiMeeting";

import PolandFlag from "@/assets/flags/poland.png";
import polandLogo from "@/assets/poland/polandSchool_logo.png";
import polandImg from "@/assets/poland/polandSchool_img.jpg";

import day1 from "@/assets/poland/Poland_day_1.jpg";
import day1Extra from "@/assets/poland/Poland_day_1_extra.jpg";
import day2 from "@/assets/poland/Poland_day_2.jpg";
import day3 from "@/assets/poland/Poland_day_3.jpg";
import day4 from "@/assets/poland/Poland_day_4.jpg";
import day5 from "@/assets/poland/Poland_day_5.jpg";

import TPMPoland1 from "@/assets/poland/tpmPoland1.jpg";
import TPMPoland2 from "@/assets/poland/tpmPoland2.jpg";
import TPMPoland4 from "@/assets/poland/tpmPoland4.jpg";

const TPMPhotos = [TPMPoland4, TPMPoland1, TPMPoland2];

import Image from "next/image";

export const metadata = {
  title: "Poland | BITL Blog",
};

export default function PolandPage() {
  return (
    <main>
      <CountryLand title="Poland" />
      <HighPrez
        country="Poland"
        schools={[
          {
            city: "Tarnow",
            name: '"III Liceum Ogólnokształcące im. Adama Mickiewicza w Tarnowie" HighSchool',
            logo: polandLogo,
            img: polandImg,
            link: "https://www.iii-lo.tarnow.pl/",
            descp:
              "The III Liceum Ogólnokształcące im. Adama Mickiewicza, located in Tarnów, Poland, is a prominent general education high school named after the famous Polish Romantic poet Adam Mickiewicz. Established with a rich history, the school has consistently maintained high academic standards and a reputation for excellence in education. Known for its rigorous curriculum and dedicated teaching staff, the school emphasizes a holistic approach to education, fostering both academic achievement and personal development among its students. With a focus on intellectual growth, creativity, and critical thinking, the III Liceum Ogólnokształcące prepares students for higher education and successful careers.",
          },
        ]}
      />
      <div className="">
        <div className="mb-10 mt-32 flex w-full items-center justify-center gap-2 md:gap-5">
          <Image
            src={PolandFlag}
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
              title: "Introductions, and Climate Change Awareness",
              descp:
                "Our second Erasmus+ LTT in Tarnow, Poland, began on the first day. After the welcoming speeches of the host school, each partner introduced themselves and the students made presentations on environmental problems. They had icebreaker activities at school and then carried out an outdoor activity.",
              img: day1Extra,
              day: "1",
            },
            {
              title: "Outdoor City Game",
              descp:
                "On the first day of the mobility in Tarnów, all students in the project team participated in an outdoor city game where they had a chance to learn about the city and its environmental issues. They also familiarized the residents of Tarnów with the project. Through this activity, students had a lot of fun and learned simultaneously. On the farewell day, the winning team was awarded gifts by the school administration.",
              img: day1,
              day: "1",
            },
            {
              title: "The visit to Krakow",
              descp:
                'On the second day of the LTT in Tarnow, all participants took part in a visit to the city of Kraków. Everyone enjoyed seeing the wonderful attractions in the city. The trip started with Wawel Castle, where we saw the courtyard and the armory. Then, we were stunned by the fascinating view of St. Mary"s Church. After that, we had the chance to visit the Gallery of 19th Century Polish Art at the Cloth Hall. The visit to Kraków ended with a walk around the Old Town of Kraków and the market square.',
              img: day2,
              day: "2",
            },
            {
              title: "Chemistry & Biology Workshops",
              descp:
                'On our third day in Tarnow, all students in the project team took part in chemistry and biology workshops. Through presentations, students explored how our everyday lives are affected by chemicals and produced healthy cosmetics instead of using chemicals. In the biology workshop, students gave presentations on the topic of "Lichens as pollution indicators." Both workshops enabled students to raise awareness of environmental issues, promote cooperation, and have fun and learn at the same time.',
              img: day3,
              day: "3",
            },
            {
              title: "Zakopane, the Mountain Capital of Poland",
              descp:
                "On the fourth day of the mobility in Tarnow, Poland, as participants of the project, we visited the city of Zakopane, the mountain capital of Poland. First, we went along Strażyca Valley and saw the Ski Jumping Hills of Zakopane (Średnia Krokiew and Wielka Krokiew). Then, we visited the Nature Education Centre, where we learned about the Tatra National Park. After taking a walk in the beautiful nature of the Tatra Mountains, we spent some free time exploring the city.",
              img: day4,
              day: "4",
            },
            {
              title: "Farewell party",
              descp:
                'Our second LTT in Tarnow, Poland, ended with a wonderful farewell party. The party began with the school principal"s farewell speech, followed by the handing out of certificates of attendance to each member of the project. Also, prizes for the winners of the poster contest, the outdoor city game, and the Eco Fashion Show were given to the winners. The party was full of fun and joy, with great music, dancing, and delicious treats prepared by the parents of the host school. The candles on the project cake were blown out with good wishes for the future, and everyone hugged goodbye, wishing to come together again. Our special thanks go to the host school for their perfect welcome and the great farewell!',
              img: day5,
              day: "5",
            },
          ]}
        />
      </div>
      <ProfiMeeting
        flag={PolandFlag}
        title="TP Meeting"
        activityPhotos={TPMPhotos}
      >
        The 3rd TPM meeting took place in{" "}
        <span className="text-textBlue text-lg font-semibold lg:text-xl">
          Tarnów
        </span>
        ,{" "}
        <span className="text-textBlue text-lg font-semibold lg:text-xl">
          Poland
        </span>
        , hosted by{" "}
        <spam className="text-textOrange">
          <q>III Liceum Ogólnokształcace im. Adama Mickiewicza w.</q>
        </spam>{" "}
        {`HighSchool. Partners evaluated C3 and C4 mobilities, including the
        "Digital Photo Story", and discussed their importance in achieving
        the project's goals. They also explored ways to promote the project to a
        wider audience through activities such as conferences, lectures,
        workshops, and interviews. Additionally, they evaluated online promotion
        of project products and reviewed the implementation plan. Finally, they
        exchanged ideas about future activities for C5 mobility and celebrated
        their contributions with a certificate ceremony.`}
      </ProfiMeeting>
    </main>
  );
}
