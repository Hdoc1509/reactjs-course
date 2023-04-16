import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

const MainContext = ({ auth }) => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);

  return (
    <main className={theme}>
      <p>{auth ? texts.mainHello : texts.mainWelcome}</p>
      <p>{texts.mainContent}</p>
    </main>
  );
};

export default MainContext;
