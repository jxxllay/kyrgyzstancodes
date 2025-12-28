import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./howItWorks.module.css";
import photo from '../../assets/img/howWork.png'


const HowItWorks = () => {
    const { t } = useTranslation();

    const howWork = [
        { id: "01", title: t("howWork.crediting"), description: t("howWork.crediting_description") },
        { id: "02", title: t("howWork.community"), description: t("howWork.community_description") },
        { id: "03", title: t("howWork.certificate"), description: t("howWork.certificate_description") },
    ];

    return (
        <div id='howItWorks' className={styles.section}>
            <div className={styles.container}>
                    <h2 className={styles.title}>{t("howWork.program_title")}</h2>
                    <p className={styles.description}>{t("howWork.program_description")}</p>
                <div className={styles.inner}>
                    <div className={styles.goalsList}>
                        {howWork.map((goal, index) => (
                            <div key={goal.id} className={styles.goalItem}>
                                <div className={styles.goalIdWrapper}>
                                    <span className={styles.goalId}>{goal.id}</span>
                                    {index !== howWork.length - 1 && <div className={styles.chain}></div>}
                                </div>
                                <div>
                                    <h3 className={styles.goalTitle}>{goal.title}</h3>
                                    <p className={styles.goalDescription}>{goal.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <img className={styles.image} src={photo} alt="people" />
                </div>
            </div>
        </div>
    );
};

export default HowItWorks