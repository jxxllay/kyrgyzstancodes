import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { GiWorld } from "react-icons/gi";
import { FiMenu, FiX } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/img/kgLogo.svg";
import flagKg from "../../assets/img/flag.png";
import uae from "../../assets/img/uae.png";
import udacity from "../../assets/img/Udacity_Logo_White.svg";
import styles from "./header.module.css";

const Header = () => {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const supportedLanguages = ["ru", "en", "kg"];

    const changeLanguage = () => {
        const currentIndex = supportedLanguages.indexOf(i18n.language);
        const nextIndex = (currentIndex + 1) % supportedLanguages.length;
        const nextLang = supportedLanguages[nextIndex];
        i18n.changeLanguage(nextLang);
        localStorage.setItem("i18nextLng", nextLang);
    };

    const toTitleCase = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

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
        <header className={styles.header}>
            <div className={styles.container}>
                <img src={logo} alt="Kyrgyzstan Codes Logo" className={styles.logo} />
                <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
                    <button onClick={() => handleNavigateAndScroll("about")} className={styles.link}>
                        {t("aboutProject")}
                    </button>
                    <button onClick={() => handleNavigateAndScroll("coursesNav")} className={styles.link}>
                        {t("coursesNav")}
                    </button>
                    <button onClick={() => handleNavigateAndScroll("howItWorks")} className={styles.link}>
                        {t("howItWorks")}
                    </button>
                    <button onClick={() => handleNavigateAndScroll("contactUs")} className={styles.link}>
                        {t("contactUs")}
                    </button>
                    <a href="/#/faq" className={styles.link}>{t("faqHeader")}</a>
                </nav>
                <div className={styles.rightSection}>
                    <button className={styles.languageButton} onClick={changeLanguage}>
                        <GiWorld /> {toTitleCase(i18n.language)}
                    </button>
                    <img src={uae} alt="UAE" className={styles.uaeLogo} />
                    <img src={udacity} alt="Udacity" className={styles.udacity} />
                    <img src={flagKg} alt="Kyrgyzstan Flag" className={styles.flag} />
                    <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>
            <div className={styles.logoUaeBox}>
                <img src={uae} alt="UAE Mobile" className={styles.uaeLogoMobile} />
                <img src={udacity} alt="Udacity Mobile" className={styles.udacityMobile} />
                <img src={flagKg} alt="Flag Mobile" className={styles.flagMobile} />
            </div>
        </header>
    );
};

export default Header;
