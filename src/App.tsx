import { useState, useEffect } from "react";
import "./App.css";

import { UserContext } from "./context/UserContext";

import CommentSection from "./components/CommentSection/CommentSection";
import Login from "./pages/Login";

function App() {
  const [username, setUsername] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    username !== undefined && username !== ""
  );

  useEffect(() => {
    setIsLoggedIn(username !== "" && username !== undefined);
  }, [username]);

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <div className="App">{isLoggedIn ? <CommentSection /> : <Login />}</div>
    </UserContext.Provider>
  );
}

export default App;
