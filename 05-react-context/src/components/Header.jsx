const Header = ({
  theme,
  handleTheme,
  texts,
  handleLanguage,
  auth,
  handleAuth,
}) => {
  return (
    <header className={theme}>
      <h2>{texts.headerTitle}</h2>
      <h3>{texts.headerSubtitle}</h3>
      <select name="language" onChange={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input
        id="light"
        type="radio"
        name="theme"
        onClick={handleTheme}
        value="light"
      />
      <label htmlFor="light">{texts.headerLight}</label>
      <input
        id="dark"
        type="radio"
        name="theme"
        onClick={handleTheme}
        value="dark"
      />
      <label htmlFor="dark">{texts.headerDark}</label>
      <button onClick={handleAuth}>
        {auth ? texts.buttonLogout : texts.buttonLogin}
      </button>
    </header>
  );
};

export default Header;
