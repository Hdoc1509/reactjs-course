import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "es";
const translations = {
  es: {
    headerTitle: "Mi aplicación CON Context API",
    headerSubtitle: "Mi cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesión",
    buttonLogout: "Cerrar Sesión",
    mainWelcome: "Bienvenid@ invitad@",
    mainHello: "Hola, Usuario",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pié de página",
  },
  en: {
    headerTitle: "My application with Context API",
    headerSubtitle: "My header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello, User",
    mainContent: "My main content",
    footerTitle: "My footer",
  },
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);

  const handleLanguage = (e) => {
    //console.log(e.target.value);
    const newLanguage = e.target.value;

    setLanguage(newLanguage);
    setTexts(translations[newLanguage]);
  };

  const data = { texts, handleLanguage };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
