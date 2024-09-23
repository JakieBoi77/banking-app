"use client";

import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser, logoutAccount, signIn, signUp } from "@/lib/actions/user.actions";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useAccount } from "./account-context";

type AuthContextType = {
  currentUser: User | null;
  accountsData: AccountsData | null;
  register: (userData: SignUpParams) => Promise<User>;
  logIn: ({ email, password }: SignInProps) => Promise<User>;
  logOut: () => Promise<void>;
  loading: boolean;
}

// Context Creation
const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
  children: React.ReactNode;
}

// Context Provider
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [accountsData, setAccountsData] = useState<AccountsData | null>(null);
  const [loading, setLoading] = useState(true);

  const { setCurrentAccount } = useAccount();

  const checkAuthStatus = async () => {
    try {
      setLoading(true);

      // Set current user to local context
      const user = await getLoggedInUser();
      if (!user) {
        console.log("No User Found");
        return;
      }
      setCurrentUser(user);

      // Fetch user bank accounts and save them to local context
      const accounts = await getAccounts({ userId: user.$id });
      if (!accounts) {
        return;
      }
      setAccountsData({
        accounts: accounts.data,
        totalBanks: accounts.totalBanks,
        totalCurrentBalance: accounts.totalCurrentBalance,
      });

      // Set the first account
      setCurrentAccount(accounts.data[0]);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Update Context on load
  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Auth Handlers
  const register = async (userData: SignUpParams) => {
    const newUser = await signUp(userData);
    setCurrentUser(newUser);
    checkAuthStatus();
    return newUser;
  }

  const logIn = async ({ email, password }: SignInProps) => {
    const user = await signIn({ email, password });
    setCurrentUser(user);
    checkAuthStatus();
    return user;
  }

  const logOut = async () => {
    setCurrentUser(null);
    setAccountsData(null);
    await logoutAccount();
  }

  const value = {
    currentUser,
    accountsData,
    register,
    logIn,
    logOut,
    loading,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom Hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuth must be used within an AuthProvider"
    );
  }
  return context;
}
