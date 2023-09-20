import "./Comment.scss";

const Comment = () => {
  return (
    <div className="comment-wrapper">
      <div className="comment-avatar__wrapper">
        <img
          className="comment-avatar__image"
          alt="User avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Aismallard_profile_picture.jpg/640px-Aismallard_profile_picture.jpg"
        />
      </div>
      <div className="comment-info">
        <div className="comment-info__main">
          <h3 className="comment-info__name">Mario Kovač</h3>
          <p className="comment-info__content">
            This is my first comment on this website.
          </p>
        </div>
        <div className="comment-info__metadata">
          <p className="comment-info__timestamp">14:07</p>
          <p className="comment-info__interpunct">&#183;</p>
          <button className="comment-info__reply-btn">Reply</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
