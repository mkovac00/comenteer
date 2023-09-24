import { useEffect, useState } from "react";
import "./CreateComment.scss";

import { motion, AnimatePresence } from "framer-motion";

import { plusIcon } from "../../assets/icons";
import { sendIcon } from "../../assets/icons";
import { closeIcon } from "../../assets/icons";

import Button from "../Button/Button";
import { CommentProps, CreateCommentProps } from "../../interfaces";

const CreateComment = (props: CreateCommentProps) => {
  const [text, setText] = useState("");
  const [isReplyingState, setIsReplyingState] = useState<CommentProps | null>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIcon, setModalIcon] = useState(plusIcon);

  const isSendingEnabled = text.length > 0;

  const onSubmit = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    event.preventDefault();

    if (text === "") {
      return;
    }

    if (isReplyingState && isReplyingState != null) {
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
    openModal();
  };

  const removeReplyingState = () => {
    setIsReplyingState(null);
  };

  const openModal = () => {
    setIsModalOpen((prevIsModalOpen) => {
      setModalIcon(prevIsModalOpen ? plusIcon : closeIcon);
      return !prevIsModalOpen;
    });
  };

  useEffect(() => {
    setIsReplyingState(props.replyingTo);
  }, [props]);

  useEffect(() => {
    if (
      isReplyingState &&
      isReplyingState != undefined &&
      isReplyingState != null &&
      !isModalOpen
    ) {
      openModal();
    }
  }, [isReplyingState]);

  return (
    <>
      <Button
        style="plus-btn"
        type="button"
        icon={modalIcon}
        onClick={openModal}
      />
      <AnimatePresence>
        {isModalOpen && (
          <motion.form
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            onSubmit={onSubmit}
            className="create-comment-popup"
          >
            {isReplyingState && (
              <div className="create-comment-popup__group">
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
                <input
                  placeholder="Replying..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="create-comment-popup__input-reply"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      onSubmit(e);
                    }
                  }}
                ></input>
              </div>
            )}
            {!isReplyingState && (
              <input
                placeholder="Start a chat.. don't be shy!"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="create-comment-popup__input"
                autoFocus
              ></input>
            )}

            <Button
              type="submit"
              icon={sendIcon}
              text="Send message"
              isDisabled={!isSendingEnabled}
              style="send-btn"
            />
          </motion.form>
        )}
      </AnimatePresence>
    </>
  );
};

export default CreateComment;
