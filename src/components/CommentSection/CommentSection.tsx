import { useState, useEffect } from "react";

import { fetchComments, createComment } from "../../helpers/helpers";
import { CommentProps } from "../../types";
import Comment from "../Comment/Comment";
import CreateComment from "../CreateComment/CreateComment";

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

  const addComment = (text: string, parentId: number) => {
    console.log("Add comment!", text, parentId);
    createComment(text).then((comment) => {
      setComments([comment, ...comments]);
    });
  };

  useEffect(() => {
    fetchComments().then((data) => {
      setComments(data.data.comments);
    });
  }, []);

  return (
    <>
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
      <CreateComment handleSubmit={addComment} />
    </>
  );
};

export default CommentSection;
