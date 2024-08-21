"use client";

import { createContext, useContext, useEffect, useState } from "react";

type AccountContextType = {
  currentAccount: Account | null;
  setCurrentAccount: React.Dispatch<React.SetStateAction<Account | null>>
}

const AccountContext = createContext<AccountContextType | null>(null);

type AccountProviderProps = {
  children: React.ReactNode;
}

export const AccountProvider = ({children}: AccountProviderProps) => {
  const [currentAccount, setCurrentAccount] = useState<Account | null>(null);

  const value = {
    currentAccount, setCurrentAccount
  }

  return (
    <AccountContext.Provider value={value}>
      {children}
    </AccountContext.Provider>
  );
}

export const useAccount = () => {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error(
      "useAccount must be used within an AccountProvider"
    );
  }
  return context;
}