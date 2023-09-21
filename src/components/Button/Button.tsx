import "./Button.scss";

import { ButtonProps } from "../../types";

const Button = (props: ButtonProps) => {
  return (
    <button type={props.type} className="btn">
      {props.icon && <div className="btn-icon">{props.icon}</div>}
      {props.text && <p className="btn-text">{props.text}</p>}
    </button>
  );
};

export default Button;
