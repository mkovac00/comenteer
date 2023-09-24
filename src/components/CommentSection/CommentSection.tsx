import { useState, useEffect, useContext } from "react";
import "./CommentSection.scss";

import {
  fetchComments,
  createComment,
  groupCommentsByDate,
  convertDateFormat,
} from "../../helpers/helpers";
import { CommentProps } from "../../types";
import Comment from "../Comment/Comment";
import CreateComment from "../CreateComment/CreateComment";
import { UserContext } from "../../context/UserContext";

const CommentSection = () => {
  const [comments, setComments] = useState<CommentProps[]>([]);
  const [activeComment, setActiveComment] = useState<CommentProps | null>();
  const { username } = useContext(UserContext);

  const rootComments = comments
    .filter(
      (comment) =>
        !comment.hasOwnProperty("parentId") || comment.parentId === undefined
    )
    .sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );

  const groupedComments = groupCommentsByDate(rootComments);

  const getReplies = (commentId: string) => {
    return comments
      .filter((comment) => comment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
      );
  };

  const addComment = (text: string, parentId?: string) => {
    console.log("Add comment!", text, parentId);
    createComment(username, text, parentId).then((comment) => {
      setComments([comment, ...comments]);
    });
    setActiveComment(null);
    console.log(comments);
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
          {Object.entries(groupedComments).map(([date, dateComments]) => (
            <div className="comment-section__comments-group-by-date" key={date}>
              <div className="comment-section__comments-group-by-date__label">
                {convertDateFormat(date)}
              </div>
              {dateComments.map((comment) => (
                <Comment
                  key={comment.timestamp}
                  id={comment.id}
                  parentId={comment.parentId}
                  author={comment.author}
                  text={comment.text}
                  timestamp={comment.timestamp}
                  replies={getReplies(comment.id)}
                  activeComment={activeComment}
                  setActiveComment={setActiveComment}
                  addComment={addComment}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <CreateComment handleSubmit={addComment} replyingTo={activeComment} />
    </>
  );
};

export default CommentSection;
