import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./courses.module.css";
import ButtonPrimary from "../../components/buttons/buttonPrimary/ButtonPrimary";

const Courses = () => {
    const { t } = useTranslation();

    const courses = [
        {
            id: "android",
            title: t("courses.android.title"),
            description: t("courses.android.description"),
            buttonText: t("hero.button"),
            link: "https://emc.udacity.com/c/gc-kyrgyzstan/catalog/io4BgEUQ/i/nd/nd940-gc-996",
        },
        {
            id: "data_analysis",
            title: t("courses.data_analysis.title"),
            description: t("courses.data_analysis.description"),
            buttonText: t("hero.button"),
            link: "https://emc.udacity.com/c/gc-kyrgyzstan/catalog/io4BgEUQ/i/nd/nd002-gc-996",
        },
        {
            id: "programming",
            title: t("courses.programming.title"),
            description: t("courses.programming.description"),
            buttonText: t("hero.button"),
            link: "https://emc.udacity.com/c/gc-kyrgyzstan/catalog/io4BgEUQ/i/nd/nd000-gc-996",
        },
        {
            id: "ai",
            title: t("courses.ai.title"),
            description: t("courses.ai.description"),
            buttonText: t("hero.button"),
            link: "https://emc.udacity.com/c/gc-kyrgyzstan/catalog/io4BgEUQ/i/nd/nd056-gc-996",
        },
    ];


    return (
        <div id="coursesNav" className={styles.coursesContainer}>
            <div className={styles.inner}>
                <h1 className={styles.title}>{t("coursesNav")}</h1>
                <p className={styles.subtitle}>{t("courses.description")}</p>
                <div className={styles.coursesGrid}>
                    {courses.map((course, index) => {
                        const isEvenRow = Math.floor(index / 2) % 2 === 0;
                        const isLeftColumn = index % 2 === 0;

                        const cardStyle =
                            (isLeftColumn && isEvenRow) || (!isLeftColumn && !isEvenRow)
                                ? styles.courseCardWhite
                                : styles.courseCardBlue;

                        return (
                            <div
                                className={`${cardStyle} ${index === 0 ? styles.firstCard : ""}`}
                                key={course.id}
                            >
                                <div className={styles.cardsInner}>
                                    <h2 className={styles.courseTitle}>{course.title}</h2>
                                    <p className={styles.courseDescription}>{course.description}</p>
                                    <a href={course.link} target="_blank" rel="noopener noreferrer">
                                        <ButtonPrimary className={cardStyle === styles.courseCardWhite ? "buttonSecondary" : "buttonTertiary"}>
                                            {course.buttonText}
                                        </ButtonPrimary>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Courses;
