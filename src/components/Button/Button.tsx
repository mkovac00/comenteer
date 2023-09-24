import "./Button.scss";

import { ButtonProps } from "../../interfaces";

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={`btn ${props.style}`}
      disabled={props.isDisabled}
    >
      {props.icon && <div className="btn-icon">{props.icon}</div>}
      {props.text && <p className="btn-text">{props.text}</p>}
    </button>
  );
};

export default Button;
