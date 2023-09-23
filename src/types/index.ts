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
  activeComment?: CommentProps | null;
  setActiveComment?: (comment: CommentProps) => void;
  addComment?: (text: string, replyId: string) => void;
}

export interface ButtonProps {
  icon?: JSX.Element;
  text?: string;
  type?: "button" | "submit" | "reset" | undefined;
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: string;
}

export interface CreateCommentProps {
  handleSubmit: (text: string, parentId?: string) => void;
  replyingTo?: CommentProps | null;
  activeComment?: CommentProps | null;
}
