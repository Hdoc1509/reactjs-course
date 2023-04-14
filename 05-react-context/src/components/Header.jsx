const Header = ({ theme, handleTheme }) => {
  return (
    <header className={theme}>
      <h2>Mi aplicación SIN Context API</h2>
      <h3>Mi cabecera</h3>
      <select name="language">
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
      <label htmlFor="light">Claro</label>
      <input
        id="dark"
        type="radio"
        name="theme"
        onClick={handleTheme}
        value="dark"
      />
      <label htmlFor="dark">Oscuro</label>
      <button>Iniciar Sesión</button>
    </header>
  );
};

export default Header;
