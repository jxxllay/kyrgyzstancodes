import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import styles from "./aboutUs.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import goal1 from "../../assets/img/goal1.png";
import goal2 from "../../assets/img/goal2.jpg";
import goal3 from '../../assets/img/goal3.png'
import goal4 from '../../assets/img/goal4.png'
import goal5 from '../../assets/img/goal5.png'


const AboutUs = () => {
  const { t } = useTranslation();

  const goals = [
    {
      id: "01",
      title: t("goals.learning"),
      description: t("goals.learning_description"),
      image: goal1,
    },
    {
      id: "02",
      title: t("goals.women_in_it"),
      description: t("goals.women_in_it_description"),
      image: goal2,
    },
    {
      id: "03",
      title: t("goals.accessibility"),
      description: t("goals.accessibility_description"),
      image: goal3,
    },
    {
      id: "04",
      title: t("goals.education_integration"),
      description: t("goals.education_integration_description"),
      image: goal4,
    },
    {
      id: "05",
      title: t("goals.innovation"),
      description: t("goals.innovation_description"),
      image: goal5,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div id="about" className={styles.container}>
        <h2 className={styles.title}>{t("goals.program_title")}</h2>
        <p className={styles.description}>{t("goals.program_description")}</p>

        <Slider {...sliderSettings} className={styles.slider}>
          {goals.map((goal) => (
            <div key={goal.id} className={styles.slide}>
              <div className={styles.slideContent}>
                <img src={goal.image} alt={goal.title} className={styles.slideImage} />
                <div className={styles.textBlock}>
                  <h3 className={styles.goalTitle}>{goal.title}</h3>
                  <p className={styles.goalDescription}>{goal.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
    </div>
  );
};

export default AboutUs;
