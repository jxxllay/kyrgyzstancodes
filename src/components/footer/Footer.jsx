import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./footer.module.css";
import logo from "../../assets/img/eduLogo.svg";
import udacityLogo from '../../assets/img/Udacity_Logo_White.svg'
import htp from '../../assets/img/htpLogo.svg'

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contactUs" className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <div className={styles.imgBlock}>
            <img src={logo} alt={t("ministry")} className={styles.logo} />
            <img src={udacityLogo} alt={t("udacity")} className={styles.logoUdacity} />
          </div>
            <img src={htp} alt={t("high technology park")} className={styles.htp} />
          <p className={styles.footerTitle}>{t("ministry")}</p>
        </div>

        <div className={styles.footerMiddle}>
          <h3 className={styles.titles}>{t("navigation")}</h3>
          <ul>
            <li><a href="#about" className={styles.link}>{t("aboutProject")}</a></li>
            <li><a href="#coursesNav" className={styles.link}>{t("coursesNav")}</a></li>
            <li><a href="#howItWorks" className={styles.link}>{t("howItWorks")}</a></li>
          </ul>
        </div>

        <div className={styles.footerRight}>
          <h3 className={styles.titles}> {t("official_resources")}</h3>
          <ul>
            <li><a href="https://president.kg" target="_blank" rel="noopener noreferrer">{t("president")}</a></li>
            <li><a href="https://www.gov.kg" target="_blank" rel="noopener noreferrer">{t("government")}</a></li>
            <li><a href="https://kenesh.kg" target="_blank" rel="noopener noreferrer">{t("parliament")}</a></li>
            <li><a href="https://digital.gov.kg" target="_blank" rel="noopener noreferrer">{t("ministry_digital")}</a></li>
            <li><a href="https://edu.gov.kg" target="_blank" rel="noopener noreferrer">{t("ministry_education")}</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;