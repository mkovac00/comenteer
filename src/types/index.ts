export interface CommentProps {
  id: string;
  author: {
    name: string;
    picture: string;
  };
  text: string;
  timestamp: Date;
}
