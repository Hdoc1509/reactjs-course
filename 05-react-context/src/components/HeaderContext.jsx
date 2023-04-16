import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

const HeaderContext = ({ auth, handleAuth }) => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { texts, handleLanguage } = useContext(LanguageContext);

  return (
    <header className={theme}>
      <h2>{texts.headerTitle}</h2>
      <h3>{texts.headerSubtitle}</h3>
      <select name="language" onChange={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input
        id="light-context"
        type="radio"
        name="theme-context"
        onClick={handleTheme}
        value="light"
      />
      <label htmlFor="light-context">{texts.headerLight}</label>
      <input
        id="dark-context"
        type="radio"
        name="theme-context"
        onClick={handleTheme}
        value="dark"
      />
      <label htmlFor="dark-context">{texts.headerDark}</label>
      <button onClick={handleAuth}>
        {auth ? texts.buttonLogout : texts.buttonLogin}
      </button>
    </header>
  );
};

export default HeaderContext;