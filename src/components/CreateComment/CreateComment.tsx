import "./CreateComment.scss";

import { plusIcon } from "../../assets/icons";
import { sendIcon } from "../../assets/icons";

import Button from "../Button/Button";

const CreateComment = () => {
  return (
    <div className="create-comment-popup">
      <div className="create-comment-popup__group">
        <Button icon={plusIcon} />
        <input
          placeholder="Say something"
          className="create-comment-popup__input"
        ></input>
      </div>

      <Button icon={sendIcon} text="Send message" />
    </div>
  );
};

export default CreateComment;
