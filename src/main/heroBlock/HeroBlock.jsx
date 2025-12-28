import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./heroBlock.module.css";
import robotImage from "../../assets/img/robot.png";
import ButtonPrimary from "../../components/buttons/buttonPrimary/ButtonPrimary";

const HeroBlock = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigateAndScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.textBlock}>
          <h1 className={styles.title}>{t("hero.title")}</h1>
          <p className={styles.description}>{t("hero.description")}</p>
          <ButtonPrimary>
            <button
              onClick={() => handleNavigateAndScroll("coursesNav")}
              className={styles.link}
            >
              {t("hero.button")}
            </button>
          </ButtonPrimary>
        </div>
        <div className={styles.imageBlock}>
          <img src={robotImage} alt="Robot" className={styles.robotImage} />
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
