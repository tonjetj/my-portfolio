// Language/index.tsx

import { createContext, useContext, useState } from "react";

type Language = "en" | "no";

// Hjelpefunksjon
export const t = (
  field: string | { en: string; no: string },
  language: Language,
) => {
  if (typeof field === "object") return field[language];
  return field;
};

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
}>({ language: "en", setLanguage: () => {} });

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<Language>("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  return (
<button
  className="languageBtn"
  onClick={() => setLanguage(language === "en" ? "no" : "en")}
>
  <span className={language === "en" ? "active" : "inactive"}>EN</span>

  <div className="toggleTrack">
    <div className={`toggleThumb ${language === "no" ? "right" : "left"}`} />
  </div>

  <span className={language === "no" ? "active" : "inactive"}>NO</span>
</button>
  );
};
