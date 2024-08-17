"use client";

import React, { createContext, useContext, useState } from 'react';

type AccountContextProviderProps = {
  children: React.ReactNode;
};

type AccountData = {
  data: Account;
  transactions: Transaction[];
}

type AccountContext = {
  account: AccountData | null;
  setAccount: React.Dispatch<React.SetStateAction<AccountData | null>>;
};

const AccountContext = createContext<AccountContext | null>(null);

const AccountContextProvider = ({ children }: AccountContextProviderProps) => {
  const [account, setAccount] = useState<AccountData | null>(null);
  return (
    <AccountContext.Provider
      value={{ account, setAccount }}
    >
      {children}
    </AccountContext.Provider>
  )
}

export default AccountContextProvider;

export const useAccountContext = () => {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error(
      "useAccountContext must be used within an AccountContextProvider"
    );
  }
  return context;
}