import { useState, useContext } from "react";
import "./Login.scss";

import { UserContext } from "../context/UserContext";

import Button from "../components/Button/Button";
import { loginIcon } from "../assets/icons";

const Start = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { setUsername } = useContext(UserContext);

  const handleUsernameChange = () => {
    if (inputValue === "") {
      return;
    }

    setUsername(inputValue);
  };

  return (
    <div className="login-page">
      <h1 className="login-page__title">Welcome to Comenteer!</h1>
      <p className="login-page__info">Please choose your username:</p>
      <input
        className="login-page__input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <Button onClick={handleUsernameChange} text="Login" icon={loginIcon} />
    </div>
  );
};

export default Start;
