import { createContext } from "react";

export const UserContext = createContext({
  username: "",
  /* tslint:disable:no-unused-variable */
  setUsername: (username: string) => {},
});
