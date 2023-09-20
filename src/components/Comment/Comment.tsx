import { CommentProps } from "../../types";
import "./Comment.scss";

const Comment = (props: CommentProps) => {
  return (
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
          <p className="comment-info__timestamp">{props.timestamp}</p>
          <p className="comment-info__interpunct">&#183;</p>
          <button className="comment-info__reply-btn">Reply</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
