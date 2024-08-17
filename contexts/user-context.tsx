"use client";

import React, { createContext, useContext, useState } from 'react';

type UserContextProviderProps = {
  children: React.ReactNode;
};

type UserContext = {
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserContext = createContext<UserContext | null>(null);

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useUserContext must be used within a UserContextProvider"
    );
  }
  return context;
}