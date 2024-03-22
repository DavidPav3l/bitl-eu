import CountryLand from "@/components/custom/CountryLand";
import HighPrez from "@/components/custom/HighPrez";
import SliderforDays from "@/components/custom/SliderforDays";
import ProfiMeeting from "@/components/custom/ProfiMeeting";

import nazLogo from "@/assets/turcia/nazili_logo.png";
import nazImg from "@/assets/turcia/nazili_img.jpg";
import bursaImg from "@/assets/turcia/bursa_img.jpg";

import TurcaleteFlag from "@/assets/flags/turkey.png";
import VMTurcalet from "@/assets/turcia/vmTurcia.jpg";
import VMTurcalet2 from "@/assets/turcia/vmTurcia2.jpg";
const VMPhotos = [VMTurcalet, VMTurcalet2];

export const metadata = {
  title: "Türkiye | BITL Blog",
};

export default function TurkiyePage() {
  return (
    <main>
      <CountryLand title="Türkiye" />
      <HighPrez
        country="Türkiye"
        schools={[
          {
            city: "Nazilli",
            name: '"Nazilli Anadolu" HighSchool',
            logo: nazLogo,
            img: nazImg,
            link: "https://nal.meb.k12.tr/",
            descp:
              "Empowering Self-Learners. Guiding Career-Driven Individuals. Achieving 100% Success in National University Entrance Exams. Cultivating Knowledgeable, Cultured, and Respectful Students. Encouraging Analytical, Creative, and Critical Thinkers. Fostering Compassionate, Respectful, and Project-Oriented Students. Developing Students Who Can Critically Read and Write. Instilling a Love for Science, Art, and Philosophy. Inspiring Innovation and Adaptability. Creating Leaders for Tomorrow. Making Our School a Beacon of Excellence in Our City and Nation.",
          },
          {
            city: "Bursa",
            name: '"BTSO ALI OSMAN SONMEZ SOSYAL BILIMLER" HighSchool',
            logo: nazLogo,
            img: bursaImg,
            link: "https://bsbl.meb.k12.tr/",
            descp:
              "Our mission is to create a modern educational institution aligned with national objectives. We nurture students who integrate past, present, and future knowledge, constantly improve, and address societal needs. Our aim is to shape proactive, innovative, and socially conscious individuals. We strive to be a preferred choice, bridging local and universal perspectives.",
          },
        ]}
      />
      <ProfiMeeting
        flag={TurcaleteFlag}
        title="Virtual Meeting"
        activityPhotos={VMPhotos}
      >
        The second virtual mobility of the Erasmus+ KA220 project{" "}
        <q>BEFORE IT IS TOO LATE</q> took place on
        <span className="text-textOrange">October 10th</span>,{" "}
        <span className="text-textOrange">2023</span>, on the Google Meet
        platform, hosted by{" "}
        <span className="text-textOrange">
          BTSO Ali Osman Sönmez Sosyal Bilimler Lisesi
        </span>{" "}
        from{" "}
        <span className="text-textBlue text-lg font-semibold lg:text-xl">
          Bursa
        </span>
        ,{" "}
        <span className="text-textBlue text-lg font-semibold lg:text-xl">
          Türkiye
        </span>
        . All partner schools attended the mobility and discussed the question{" "}
        <span className="text-textBlue">
          “Are Nuclear Power Stations needed to prevent climate change?”
        </span>
        .{" "}
        {`Students worked in teams to create presentations and discuss the topic
        using the “The 6 Thinking Hats Technique”. Each team approached the
        topic from a different perspective, according to the color of hat they
        represented. All teams made excellent presentations, approaching the
        topic from a variety of angles. They also asked and answered each
        other's questions. At the end of the discussion, the participating
        students voted for the popularity award, and the jury members from each
        school awarded the 1st, 2nd, and 3rd prizes. BTSO Ali Osman Sönmez
        Sosyal Bilimler Lisesi received the popularity award and the 3rd prize,
        Liceul Teoretic "Emil Racovita" received the 2nd prize, and Liceum
        Ogolnoksztalcace im. Adama Mickiewicza w Tarnowie was awarded the 1st
        prize.`}
      </ProfiMeeting>
    </main>
  );
}
