import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ClubDetails.css";

const ClubDetails = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", once: true });
  }, []);

  const clubsData = [
    {
      id: "1",
      name: "Sup'Com Cyber Security Club",
      description:
        "The Sup'Com Cyber Security Club is a vibrant community for cybersecurity enthusiasts. We aim to foster learning, innovation, and collaboration in the field of cybersecurity.",
      staff: [
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/450208566_122213597234003545_3146861999630569291_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qv2-LcFUCEoQ7kNvgEW_7k5&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=Ayy-mc1PL04EGJnSdXckTD_&oh=00_AYC8odiaZOew5pxRuF7IwlZ3J_E2XUOQ5a0AlrXhQ4YbUA&oe=67416C45",
        },
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/450248862_122213597618003545_7707473991306883624_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=iCQfB0M3AP0Q7kNvgFckcLX&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AjleZrZcKejhzS_w3fBZl86&oh=00_AYAOJjMfdg2VaJHAeZpiQshA02VbAVAPmH8yDDS4xVDQTA&oe=67418585",
        },
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/450218147_122213597222003545_2275644597958888801_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=J5_BdO7OABkQ7kNvgEbuPbA&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AzljRZ5jsbAtpGWB3mWKsq1&oh=00_AYCHencnjYdN2kzg0xipvJmBhvSA4UinBCT8KHVgrxKXIg&oe=67416E9A",
        },
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/450251616_122213597144003545_1897190757297500304_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=f17g-VUxNoMQ7kNvgHqalju&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AL1UH0y2bzOz7U446rVPyQ8&oh=00_AYBuqosWrEn80saK6aa_tLOOdHiyq5jynnc3O-rDR_QuhA&oe=6741551C",
        },
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/450527766_122213597114003545_8438411353084097124_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=OTeRHx2ycvgQ7kNvgHQ74Em&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=A10w3cAft3B8fMCeBhkc5pm&oh=00_AYC0mLSI-ou332HcWAwGlgzOkbN90tACbTak1YX4-TFTQw&oe=674164B4",
        },
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/450233963_122213597168003545_706426638124992355_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Gb6WfZtbKM0Q7kNvgGT5gvf&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=Ae-e27Z4A7XiLgBHuFInyFY&oh=00_AYAQDrIPPGoOFT-iRDCphmWykoU_ZbI0__pezEJwg5J7oA&oe=67418130",
        },
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/450553384_122213597636003545_6934127721321035338_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0geZh6C4rBMQ7kNvgEymQHG&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AFgz2XRctU1rq-tqXkUJmHR&oh=00_AYACrG-X14DAiVzmRHcm-NoSFPy369GPo9R6yIBe8AhYEw&oe=6741535B",
        },
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/450127107_122213597258003545_7572110199990076884_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Jrz8RSEarDYQ7kNvgH94nZh&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AmyLDOJIx_M_mEby40A7u1Z&oh=00_AYAc6cX9gzyVmXEtOrmyS6g7uUG3Ko5oV6zH5dAY-wVLYg&oe=674157E2",
        },
      ],
      events: [
        {
          name: "Hackfest'9",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/433947165_815262507300383_1888612990411191086_n.png?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=RA2Cp9B_dHgQ7kNvgF0BxVA&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=Ay28ublk1jH36qQBuTJr1V5&oh=00_AYAnetMLHaZV77QPDGNKz3ThjOFzvMVmGS9TS_QehAXBUw&oe=67416FA2",
        },
        {
          name: "Capture The Flag Competition",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/466380736_122239753910003545_4142783105814695354_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=OT5M5PyGp7IQ7kNvgFKvjDf&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AqjQuH6C3u4bfpDKs60Ih3U&oh=00_AYA-Xxhk3ITFGHeIFB8NR4JaMTQGCuLS_NjzAHxuSuHvXA&oe=6741554F",
        },
        {
          name: "Web Exploitation Workshop",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/464199663_122236777718003545_1010813147410476030_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qOU8cQtpiG4Q7kNvgEEPdRu&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=Al9cGPp3MwLL9JQ-Zcn97te&oh=00_AYCLnj1j2EoxmVCG3L1QaByfX0TRSXqCpgd_T6iXhd-gNg&oe=67416E36",
        },
      ],
      activities: ["Workshops", "Competitions", "Training Sessions"],
      image:
        "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/449958348_122213340308003545_1032565384253095569_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=WoyDzAJIWLwQ7kNvgGM0MDf&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AyQwO03hE5exaRLdA8jWzBL&oh=00_AYAer0DMTFsTXR1ZqYn7bfByktf00sn3KF0BQYd18qXaTA&oe=67414C02",
    },
    {
      id: "2",
      name: "IEEE",
      description:
        "The IEEE Sup'Com Student Branch fosters innovation and collaboration through events, workshops, and competitions, empowering students in technology and engineering.",
      staff: [
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/449435147_888624553298198_1273711076885538223_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fDxRZx2pxnkQ7kNvgGanVIJ&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=A1N-RxNdZT2t--QPnb_Rcl4&oh=00_AYDyya4-UUBz5CpVqtb-nAxAeFB-3EBTSccDMdYXy3p_gw&oe=67416658",
        },
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/449492544_888624639964856_7088472436986897267_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jPLWgOSD5wwQ7kNvgGlI3fk&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=Awt59KyDcoze6Qd2oL5xl1r&oh=00_AYBuLEIG4YCaYRloPpD6RRutXgj90Hzi-N9wGuCU-4WS5g&oe=674161DF",
        },
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/449623648_888624723298181_5117307938147158116_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qtRvF0iBr_kQ7kNvgHkw8sC&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AyYc0CXz7k7v-VknzZL_MVc&oh=00_AYDTd-ZdtuHrwI0GZ1aOk63LoiA9zwk6fOvezoKTKjBwvw&oe=67417204",
        },
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/449474031_888624833298170_2951219658917138215_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sGzV3v7TVXsQ7kNvgG3QX7w&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=Auh5a5Mjdcv80DhUV_iTHde&oh=00_AYCUTAO5snfgK0hEz42JEpEF0zBpr1j0g0lZ6PU9oDkX2Q&oe=67416EC0",
        },
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/449440248_888624929964827_7086005417697722343_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ndigSefQkbMQ7kNvgFjRezI&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=ADwrfzt3sWzuppahyNROPqw&oh=00_AYANbMGOE5v5VN09XTbXFma7mAKelBnwab1M-pTof3hArQ&oe=674180B0",
        },
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/449393847_888624996631487_4023290596338440621_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xRsuEIH2cK4Q7kNvgGedi2T&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AkjZSuwo7T85bc4bS6IsUcg&oh=00_AYA2NEJrBS35_OVChA5sevwxMKvUVt0lgOeHatstfUr09w&oe=674171ED",
        },
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/449483682_888625056631481_1271969823720326243_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TFy0chdf9SsQ7kNvgFGmKZG&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AOHBa5o6janwgNM1m0X-JZc&oh=00_AYD0MRAL9Cl8LcEtJh1IiKg0oe3qG00oDEtM_wr5EMHVlQ&oe=67415D0C",
        },
      ],
      events: [
        {
          name: "IndabaX",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/336765737_657827152777955_8645584506553971980_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=FaPB9Rk5EccQ7kNvgF8S33U&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=A-JzN0ooSFgPDmYYa3t0oSQ&oh=00_AYCst2jbAVkODbK2pQBq-xmJWRv9tYoYkavhJWjQBQQy4Q&oe=67418C2A",
        },
        {
          name: "Wie Empower",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/450507432_876410237864226_367742369785019224_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KqouBITWWtYQ7kNvgETcF9w&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=Ani41Vrf0Kpo9azN3eYNSco&oh=00_AYC5-Lupq47AGO29QITcmkVUMzi5P4TuGWtG0850Hb_Q6Q&oe=6741617C",
        },
        {
          name: "IAS - IoT Workshop",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/465674509_122112326726574485_7222637984586355062_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=LBq_d8kdaX0Q7kNvgECxWWX&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=Ah6aCxWYVIPHnZQu0auLS19&oh=00_AYALaRUycJrEwo86Xhnhn_efsQZjf1uc1WdDAcBKtze-CA&oe=67416116",
        },
      ],
      activities: ["Workshops", "Competitions", "Training Sessions"],
      image:
        "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/463435658_965605958933390_640940066018716357_n.png?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=bNBy9YGGwKMQ7kNvgEg6ZTk&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AMyeyKIX2BfG8tc2X8nWmDr&oh=00_AYAnInCLR8qJzKcqCtCe5-5h3SWUjxH7BNbNQurBdYp9Jw&oe=67415E70",
    },
    {
      id: "3",
      name: "Sup'Com Junior Entreprise",
      description:
        "The Sup'Com Junior Entreprise bridges academia and industry, offering students hands-on experience in business and engineering through innovative projects and professional services.",
      staff: [
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/459339042_921693426652900_7857296976570266711_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=un6jHyuKFSsQ7kNvgGA_S_k&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AEWnR_Wyv9s3jekBzci3elp&oh=00_AYALK9CCY1Z0LHv9Mx2XrWPyN5U-0SzWh5tun3SWVb7rkQ&oe=674167FA",
        },
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/459337118_921693439986232_2823988229364260890_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4qtXYJ7MWmkQ7kNvgHJ-U04&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=ALiJNZ0X5vPrPiI9Aj50wBy&oh=00_AYDlG6aMjWXgravpg-QOGQqNqel5EYrQ3kkb65enB9EV6A&oe=67417322",
        },
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/459306170_921693603319549_241600978492497151_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=i8lfb1KvoroQ7kNvgHMklOw&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AkZK1siK91RQAsULXn-H4Zc&oh=00_AYB0WU9PkkqYrue77mRuYSK3bfBOo0a1NFlvHAzKfPOS8g&oe=67415E1E",
        },
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/459340414_921693619986214_9167157147652083609_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NFcjZTdUmc8Q7kNvgFztpKR&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AnsPFa_xHUL84isxfVXUCeT&oh=00_AYBx7qh0BkrkNtttssIe8X5NBir1-9pWTFsDRJBBjCk2GA&oe=674156EE",
        },
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/459358198_921693653319544_4605447458633751213_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=B8c5hDBzGDUQ7kNvgG9-_dl&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=Aoe2kziupzNRvKGvtTNIL5Z&oh=00_AYACyuLlMCvU6Vhcx0uDZGRAdLjiPTHPZ15RSPzg_fmoWw&oe=67416DF1",
        },
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/459339327_921693709986205_3198458128316654371_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5nCJaCZrCBkQ7kNvgGLNPKR&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=A9J1CyQzJ2HZjV-Etyh5P2W&oh=00_AYB_z6Xf7vLmR4e9eVgNXBRfJq_AsB0e5BosrrL8bP-qxw&oe=674159A4",
        },
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/459328161_921693736652869_4133212780602804788_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=FxR6s0qM9h0Q7kNvgGsfS3w&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=Az6FXpE6-ZNk4KBm-K3OYn0&oh=00_AYAiK1a7PiK9H-u4AJJmyhjujcX_ZbvPHJTGqs3NFZlvxQ&oe=67416C8A",
        },
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/459447786_921693759986200_5225357927944770321_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bI7Q7-Jz0AUQ7kNvgFZRA64&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=A9wE0ZpPB5lz4Hi8JLlB3_M&oh=00_AYBHWzRX4RdY8jT2g8_5YJwcVSpuNo10gDYDg2-Uuzi4Lg&oe=674162FF",
        },
      ],
      events: [
        {
          name: "JET'XPO",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/455366114_886100340216988_7627714929875827237_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=hewDzrVuyWsQ7kNvgGEYPIp&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=Ay37dgEyWycW66LhjMc0Y44&oh=00_AYAyRqEknXmZ6GiBtNN3vxzRKo835bEqukDTA-eDMNccWA&oe=674168E9",
        },
      ],
      activities: ["Workshops", "Competitions", "Training Sessions"],
      image:
        "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/432630242_808685577953686_7321763098278089636_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=x5gQIysoNuQQ7kNvgEbrrHh&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AFd2up6vGpnU-oTv5ibUwzb&oh=00_AYC70EkZTEI7SFlJIJYhSXy9nQyrtMckxDa1COaHTQeZIA&oe=6741598E",
    },
    {
      id: "4",
      name: "Team Sup'Com",
      description:
        "Team Sup'Com is the organizing hub for all Sup'Com clubs, managing forums, coordinating activities, and fostering collaboration to ensure smooth operations and vibrant student life.",
      staff: [
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/449619501_970888694835372_843904279820699891_n.jpg?stp=dst-jpg_s600x600&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=RFe_1p7e24oQ7kNvgH7ZN1x&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AtvERnc1KiFVd6_5p9oJK4d&oh=00_AYBNCFTz59yeyFOF0lWX72ESt2RR1ZvBWDl2wKPiHwtNmw&oe=674178E6",
        },
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/449446830_970888668168708_8744556264889761703_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=KrWX3X4DXaMQ7kNvgFDOZvN&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=A6fSqeD2W1HrYmtjoCJFBZk&oh=00_AYBeUW6KtyA8_2iNUj16CNw2DBsRsPyAhu62oIhwfnpYUQ&oe=67416513",
        },
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/449388374_970888774835364_899665972115515111_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PMTE_6gdqKQQ7kNvgESIpKy&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AqpSf9udWMFTlRHMiieTsrv&oh=00_AYBqbRSQRMXA_ZcXPUNqqsYmZ9cnOgAQC7bEb6BZaBTDOw&oe=674187C0",
        },
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/449419972_970888721502036_4968769996262576186_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=L6Z7WvsQ_lEQ7kNvgHaprmG&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AU-B52SXm9YrRZwrwAxAVlT&oh=00_AYBeJOOvcN0uch4trfLgTxV7YHoge5odtnt5eblV016fEA&oe=67415FE4",
        },
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/449447160_970888734835368_4421101710123206157_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DenzA2ETnSEQ7kNvgF3ElVB&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AOUNoYvzrABlqxoRZIERskd&oh=00_AYA3G0TPiH7fDaZ1zyeJnUxe2BIfndJY0s8IzvdasFU4BQ&oe=674171F2",
        },
        {
          name: "",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/449343043_970888764835365_3960675296429768521_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3bt0_VI4F5AQ7kNvgFpeuSS&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AP9azkTevQw8qfK10p49nbX&oh=00_AYCfTBiE2jU_WPbapRoN9C6lmMarTggkDoOnxqVIh-wdyQ&oe=674183E7",
        },
      ],
      events: [
        {
          name: "Sup'Com Annual Forum",
          image:
            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/463758833_1044471660810408_5753772537493367305_n.png?stp=dst-png_s960x960&_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=1dWWOrb9sEUQ7kNvgGhdPg0&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=Agd6yzbLOJ3Qyv7213tph-D&oh=00_AYCv0fred-T7Vkn2ezCm64DLg5vCcIwukl_89OG538LY_w&oe=67416362",
        },
      ],
      activities: ["Workshops", "Competitions", "Training Sessions"],
      image:
        "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/459413344_1017769196813988_8218484794157333859_n.png?stp=dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=sRHtxWFJLb0Q7kNvgEb0Y2y&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AnIb2bD50X_u8bfxFhncKqh&oh=00_AYANZPDqPRxABJRjIzq8GWxjGOfFXk503j8EleWZstePpg&oe=674173FC",
    },
  ];

  const club = clubsData.find((club) => club.id === id);

  if (!club) {
    return <h1>Club not found</h1>;
  }

  return (
    <div className="club-details">
      {/* Hero Section */}
      <header className="hero-section" data-aos="fade-in">
        <img src={club.image} alt={club.name} className="hero-image" />
      </header>

      {/* Club Info */}
      <section className="club-info" data-aos="zoom-in">
        <h1 className="club-title">{club.name}</h1>
        <p className="club-description">{club.description}</p>
      </section>

      {/* Staff Members */}
      <section className="club-section" data-aos="fade-up">
        <h2>Staff Members</h2>
        <div className="staff-list">
          {club.staff.map((member, index) => (
            <div key={index} className="staff-card" data-aos="flip-left">
              <img
                src={member.image}
                alt={member.name}
                className="staff-image"
              />
              <p>{member.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section className="club-section" data-aos="fade-up">
        <h2>Upcoming Events</h2>
        <div className="event-list">
          {club.events.map((event, index) => (
            <div key={index} className="event-card">
              <img src={event.image} alt={event.name} className="event-image" />
              <p>{event.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ClubDetails;
