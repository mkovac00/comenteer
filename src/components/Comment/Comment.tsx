import { CommentProps } from "../../types";
import "./Comment.scss";

import { formatTime } from "../../helpers/helpers";

const Comment = (props: CommentProps) => {
  return (
    <div className="comment-container">
      <div className="comment-wrapper">
        <div className="comment-avatar__wrapper">
          <img
            className="comment-avatar__image"
            alt="User avatar"
            src={props.author.picture}
          />
        </div>
        <div className="comment-info">
          <div className="comment-info__main">
            <h3 className="comment-info__name">{props.author.name}</h3>
            <p className="comment-info__content">{props.text}</p>
          </div>
          <div className="comment-info__metadata">
            <p className="comment-info__timestamp">
              {formatTime(props.timestamp)}
            </p>
            <p className="comment-info__interpunct">&#183;</p>
            <button
              onClick={() =>
                props.setActiveComment && props.setActiveComment(props)
              }
              className="comment-info__reply-btn"
            >
              {props.replies?.length && props.replies.length > 0
                ? `Reply (${props.replies?.length})`
                : "Reply"}
            </button>
          </div>
        </div>
      </div>
      {props.replies && props.replies?.length > 0 && (
        <div className="comment-replies">
          <div className="comment-reply-bullet"></div>
          <div className="comment-replies-list">
            {props.replies?.map((reply) => (
              <Comment
                key={reply.timestamp}
                id={reply.id}
                parentId={props.id}
                author={reply.author}
                text={reply.text}
                timestamp={reply.timestamp}
                replies={[]}
                activeComment={props.activeComment}
                setActiveComment={props.setActiveComment}
                addComment={props.addComment}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
