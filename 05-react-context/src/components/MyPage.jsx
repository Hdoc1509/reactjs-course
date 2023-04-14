import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const initialTheme = "light";

const MyPage = () => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e) => {
    console.log(e.target.value);
    setTheme(e.target.value);
  };

  return (
    <div className="my-page">
      <Header theme={theme} handleTheme={handleTheme} />
      <Main theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};

export default MyPage;
