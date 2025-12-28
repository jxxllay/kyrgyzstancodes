import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './FAQ.module.css';

const FAQ = () => {
  const { t } = useTranslation();
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const sections = [
    {
      categoryKey: 'main',
      items: ['whatIs']
    },
    {
      categoryKey: 'enrollment',
      items: ['howEnroll', 'multiTrack', 'reenroll', 'switch', 'untilWhen']
    },
    {
      categoryKey: 'experience',
      items: ['howLong', 'mobile', 'certificate', 'accredited', 'whenCertificate', 'nameOnCertificate']
    },
    {
      categoryKey: 'support',
      items: ['contacted', 'emailChange', 'careerSupport']
    }
  ];

  return (
    <div className={styles.faqContainer}>
      {sections.map((section, sectionIdx) => (
        <div key={section.categoryKey} className={styles.faqSection}>
          <h2 className={styles.faqCategory}>{t(`faq.categories.${section.categoryKey}`)}</h2>
          {section.items.map((itemKey, index) => {
            const questionIndex = `${sectionIdx}-${index}`;
            return (
              <div key={questionIndex} className={styles.faqItem}>
                <div
                  className={styles.faqQuestion}
                  onClick={() => toggleQuestion(questionIndex)}
                >
                  {t(`faq.questions.${itemKey}`)}
                </div>
                <AnimatePresence>
                  {activeQuestion === questionIndex && (
                    <motion.div
                      className={styles.faqAnswer}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {t(`faq.answers.${itemKey}`)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
