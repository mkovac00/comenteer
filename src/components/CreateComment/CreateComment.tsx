import { useState } from "react";
import "./CreateComment.scss";

import { plusIcon } from "../../assets/icons";
import { sendIcon } from "../../assets/icons";

import Button from "../Button/Button";
import { CreateCommentProps } from "../../types";

const CreateComment = (props: CreateCommentProps) => {
  const [text, setText] = useState("");

  const isSendingEnabled = text.length > 0;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.handleSubmit(text, 5);
    setText("");
  };

  return (
    <form onSubmit={onSubmit} className="create-comment-popup">
      <div className="create-comment-popup__group">
        <Button type="button" icon={plusIcon} />
        <input
          placeholder="Start a chat.. or don't?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="create-comment-popup__input"
        ></input>
      </div>

      <Button
        type="submit"
        icon={sendIcon}
        text="Send message"
        isDisabled={!isSendingEnabled}
      />
    </form>
  );
};

export default CreateComment;
