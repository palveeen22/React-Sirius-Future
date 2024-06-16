import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

// Custom hook for language switching
const useLanguage = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleChangeLanguage = useCallback((newLanguage: string) => {
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  }, [i18n]);

  return {
    currentLanguage,
    handleChangeLanguage,
  };
};

export default useLanguage;
