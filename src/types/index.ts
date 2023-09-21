export interface CommentProps {
  id: string;
  parentId?: string;
  author: {
    name: string;
    picture: string;
  };
  text: string;
  timestamp: number;
  replies?: CommentProps[];
}

export interface ButtonProps {
  icon?: JSX.Element;
  text?: string;
}
