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
  type?: "button" | "submit" | "reset" | undefined;
  isDisabled?: boolean;
}

export interface CreateCommentProps {
  handleSubmit: (text: string, parentId: number) => void;
}
