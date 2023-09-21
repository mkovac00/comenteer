import commentsJson from "../assets/data/comments.json";

export const fetchComments = async () => {
  return commentsJson;
};

export const createComment = async (text: string) => {
  return {
    id: (Math.floor(Math.random() * (10000 - 1)) + 1).toString(),
    author: {
      name: "Mario Kovač",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Aismallard_profile_picture.jpg/640px-Aismallard_profile_picture.jpg",
    },
    text: text,
    timestamp: new Date().getTime(),
  };
};
