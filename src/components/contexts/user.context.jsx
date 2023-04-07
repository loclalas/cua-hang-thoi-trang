import { createContext, useState } from "react";

// Giá trị của Context:
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Giá trị của State:
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {
    currentUser,
    setCurrentUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
