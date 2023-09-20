import { useState, useEffect } from "react";

import { fetchComments } from "../../helpers/helpers";
import { CommentProps } from "../../types";
import Comment from "../Comment/Comment";

const CommentSection = () => {
  const [comments, setComments] = useState<CommentProps[]>([]);

  const rootComments = comments.filter(
    (comment) => !comment.hasOwnProperty("parentId")
  );

  const getReplies = (commentId: string) => {
    return comments
      .filter((comment) => comment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
      );
  };

  useEffect(() => {
    fetchComments().then((data) => {
      setComments(data.data.comments);
    });
  }, []);

  return (
    <div className="comment-section-wrapper">
      <div className="comment-section__comments">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.timestamp}
            id={rootComment.id}
            parentId={rootComment.parentId}
            author={rootComment.author}
            text={rootComment.text}
            timestamp={rootComment.timestamp}
            replies={getReplies(rootComment.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
