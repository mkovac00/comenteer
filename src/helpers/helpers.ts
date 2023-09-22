import commentsJson from "../assets/data/comments.json";
import { CommentProps } from "../types";

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
  const currentDate = new Date(); // Current date

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate.getTime() - date.getTime();
  const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day

  // Check if the date is today
  if (timeDifference < oneDay) {
    let hours: number = date.getHours();
    let minutes: number | string = date.getMinutes();
    const isAMorPM: string = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes.toString();

    return `${hours}:${minutes} ${isAMorPM}`;
  }

  // Check if the date is yesterday
  if (timeDifference < 2 * oneDay) {
    return "Yesterday";
  }

  // If it's not today or yesterday, format the date
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // January is 0
  const day = date.getDate();
  return `${month}/${day}/${year}`;
}

export function groupCommentsByDate(comments: CommentProps[]) {
  const groupedComments: Record<string, CommentProps[]> = {};

  comments.forEach((comment) => {
    const date = new Date(comment.timestamp).toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    if (!groupedComments[date]) {
      groupedComments[date] = [];
    }

    groupedComments[date].push(comment);
  });

  return groupedComments;
}

export function convertDateFormat(inputDate: string): string {
  const dateParts = inputDate.split(", ");
  if (dateParts.length !== 2) {
    return inputDate;
  }

  const dayOfWeek = dateParts[0];
  const datePart = dateParts[1].split("/");

  if (datePart.length !== 3) {
    return inputDate;
  }

  const day = parseInt(datePart[1], 10);
  const month = parseInt(datePart[0], 10);
  const year = parseInt(datePart[2], 10);

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  if (year === currentYear && month === currentMonth) {
    if (day === currentDay) {
      return "Today";
    } else if (day === currentDay - 1) {
      return "Yesterday";
    }
  }

  return `${dayOfWeek}, ${day}.${month}.${year}.`;
}
