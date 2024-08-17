"use client";

import React, { createContext, useContext, useState } from 'react';

type AccountsContextProviderProps = {
  children: React.ReactNode;
};

type AccountsData = {
  data: Account[];
  totalBanks: number;
  totalCurrentBalance: number;
}

type AccountsContext = {
  accountsData: AccountsData | null;
  setAccountsData: React.Dispatch<React.SetStateAction<AccountsData | null>>;
};

const AccountsContext = createContext<AccountsContext | null>(null);

const AccountsContextProvider = ({ children }: AccountsContextProviderProps) => {
  const [accountsData, setAccountsData] = useState<AccountsData | null>(null);
  return (
    <AccountsContext.Provider
      value={{ accountsData, setAccountsData }}
    >
      {children}
    </AccountsContext.Provider>
  )
}

export default AccountsContextProvider;

export const useAccountsContext = () => {
  const context = useContext(AccountsContext);
  if (!context) {
    throw new Error(
      "useAccountsContext must be used within an AccountsContextProvider"
    );
  }
  return context;
}