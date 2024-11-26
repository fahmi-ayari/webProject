import React from "react";
import { useNavigate } from "react-router-dom";
import "./clubs.css";

const clubs = [
  {
    id: 1,
    name: "Sup'Com Cyber Security Club",
    image: "./public/sc2.jpg",
  },
  {
    id: 2,
    name: "IEEE",
    image: "./src/assets/ieee.jpg",
  },
  {
    id: 3,
    name: "Sup'Com Junior Entreprise",
    image: "./src/assets/junior.jpg",
  },
  {
    id: 4,
    name: "Team Sup'Com",
    image: "./src/assets/team.jpg",
  },
  {
    id: 5,
    name: "Machine Learning Sup'Com",
    image:
      "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/406140531_122110456598117781_1390434605966003213_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=VfS6fllFzhAQ7kNvgGVWD-G&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AC7hyGFXASwiiTf1mKxdijS&oh=00_AYAMSY0rH2sc0o1xTA55UKibV_GthISl-YhLefAG0FCXBw&oe=67418D52",
  },
  {
    id: 6,
    name: "ACM Sup'Com",
    image:
      "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/308403553_5435000196568714_3693393530331657938_n.png?stp=dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=2285d6&_nc_ohc=o8Ym1yfNCPEQ7kNvgFwH7Bd&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=ArBFpVLdGfdBR-suw0PjBfU&oh=00_AYAYTdCzo2voHxCXrR9-eVxcJM5sjF-fXqQW_2_pXsjKWg&oe=6741915B",
  },
  {
    id: 7,
    name: "Nateg",
    image:
      "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/393466336_657302063210132_1581825400119969389_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=oiEwZ21vh8gQ7kNvgFLnenv&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=Aty8URFiGq50vdPkqWQsWRO&oh=00_AYDvdFf7AM9K80Vf2B4lDFPhH2dl4ZYpqKedpwNmlktsnA&oe=67417EAC",
  },
  {
    id: 8,
    name: "Sup'Bike",
    image:
      "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/342331051_1208988903123274_5949377396583083503_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=czVqMqWf85cQ7kNvgHtwt-P&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AI5mGhBKOMGdFZ-xZmounFx&oh=00_AYAij_a0yX-2PcMcQgRjX9gOfbBOJXdxSAbfjQlWnWbIXw&oe=67417E9D",
  },
  {
    id: 9,
    name: "Google Developer Student Club Sup'Com",
    image:
      "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/393898583_311287778198004_8078716874409756088_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=9gItR2yLzkUQ7kNvgG1p-bj&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AOE6si_Qiihcn2JILezXEuv&oh=00_AYDfu4F5BZhzX74i8qlyD8XoVgH9RXpRsdEBS82FK2QpeA&oe=674172AF",
  },
];

function Clubs() {
  const navigate = useNavigate();

  const handleLearnMore = (clubId: number) => {
    navigate(`/club/${clubId}`);
  };

  return (
    <div className="clubs-list">
      <h1 className="title">Explore Our Clubs</h1>
      <div className="clubs-container">
        {clubs.map((club) => (
          <div
            className="club-card"
            key={club.id}
            onClick={() => handleLearnMore(club.id)}
          >
            <img src={club.image} alt={club.name} className="club-image" />
            <div className="club-info">
              <h3 className="club-name">{club.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clubs;
