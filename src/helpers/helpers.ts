import commentsJson from "../assets/data/comments.json";

export const fetchComments = async () => {
  return commentsJson;
};

export const createComment = async (text: string, parentId?: string) => {
  return {
    id: (Math.floor(Math.random() * (10000 - 1)) + 1).toString(),
    parentId: parentId,
    author: {
      name: "Mario Kovač",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Aismallard_profile_picture.jpg/640px-Aismallard_profile_picture.jpg",
    },
    text: text,
    timestamp: new Date().getTime(),
  };
};

export function formatTime(milliseconds: number): string {
  const date = new Date(milliseconds);

  let hours: number = date.getHours();
  let minutes: number | string = date.getMinutes();
  const isAMorPM: string = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes.toString();

  return `${hours}:${minutes} ${isAMorPM}`;
}
