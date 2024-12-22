/* eslint-disable no-unused-vars */
import React, { createContext } from "react";

// Create the UserContext
export const UserContext = createContext();

// Create the UserProvider component
// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children, userData }) => {
  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};
