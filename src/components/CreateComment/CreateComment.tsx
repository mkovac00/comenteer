import { useEffect, useState } from "react";
import "./CreateComment.scss";

import { plusIcon } from "../../assets/icons";
import { sendIcon } from "../../assets/icons";

import Button from "../Button/Button";
import { CommentProps, CreateCommentProps } from "../../types";

const CreateComment = (props: CreateCommentProps) => {
  const [text, setText] = useState("");
  const [isReplyingState, setIsReplyingState] = useState<CommentProps | null>();

  const isSendingEnabled = text.length > 0;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isReplyingState && isReplyingState != null) {
      console.log(isReplyingState);
      if (
        isReplyingState.parentId &&
        isReplyingState.parentId != undefined &&
        isReplyingState.parentId != null
      ) {
        props.handleSubmit(
          "@" + isReplyingState?.author.name.split(" ")[0] + " " + text,
          isReplyingState.parentId
        );
      } else {
        props.handleSubmit(
          "@" + isReplyingState?.author.name.split(" ")[0] + " " + text,
          isReplyingState.id
        );
      }
    } else {
      props.handleSubmit(text);
    }

    setText("");
  };

  const removeReplyingState = () => {
    setIsReplyingState(null);
  };

  useEffect(() => {
    setIsReplyingState(props.replyingTo);
  }, [props]);

  return (
    <form onSubmit={onSubmit} className="create-comment-popup">
      <div className="create-comment-popup__group">
        <Button type="button" icon={plusIcon} />
        {isReplyingState && (
          <label className="create-comment-popup__label">
            <button
              onClick={removeReplyingState}
              className="create-comment-popup__label-btn"
            >
              X
            </button>
            &#64;
            {isReplyingState?.author.name.split(" ")[0]}
          </label>
        )}
        {isReplyingState ? (
          <input
            placeholder="Replying..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="create-comment-popup__input"
          ></input>
        ) : (
          <input
            placeholder="Start a chat.. or don't?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="create-comment-popup__input"
          ></input>
        )}
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
