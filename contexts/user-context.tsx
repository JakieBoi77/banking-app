"use client";

import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser, logoutAccount, signIn, signUp } from "@/lib/actions/user.actions";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useAccount } from "./account-context";

type AuthContextType = {
  currentUser: User | null;
  accountsData: AccountsData | null;
  register: (userData: SignUpParams) => Promise<User>;
  logIn: ({email, password}: SignInProps) => Promise<User>;
  logOut: () => Promise<void>;
  loading: boolean;
}

// Context Creation
const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
  children: React.ReactNode;
}

// Context Provider
export const AuthProvider = ({children}: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [accountsData, setAccountsData] = useState<AccountsData | null>(null);
  const [loading, setLoading] = useState(true);

  const { setCurrentAccount } = useAccount();
  
  // Auth Handlers
  const register = async (userData: SignUpParams) => {
    const newUser = await signUp(userData);
    setCurrentUser(newUser);
    return newUser;
  }

  const logIn = async ({email, password}: SignInProps) => {
    const user = await signIn({ email, password });
    setCurrentUser(user);
    return user;
  }
  
  const logOut = async () => {
    setCurrentUser(null);
    setAccountsData(null);
    await logoutAccount();
  }

  // Update Context on load
  useEffect(() => {
    const checkAuthStatus = async () => {
        try {
            setLoading(true);

            // Set current user to local context
            console.log("Getting User")
            const user = await getLoggedInUser();
            if (!user) {
              console.log("No User Found");
              return;
            }
            console.log(user)
            setCurrentUser(user);
            
            // Fetch user bank accounts and save them to local context
            console.log("Fetching User Data");
            const accounts = await getAccounts({ userId: user.$id });
            if (!accounts) {
              console.log("User Data Not Found");
              return;
            }
            console.log(accounts)
            setAccountsData({
              accounts: accounts.data,
              totalBanks: accounts.totalBanks,
              totalCurrentBalance: accounts.totalCurrentBalance,
            });

            // Set the first account
            console.log("Setting the first account")
            setCurrentAccount(accounts.data[0]);

        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    checkAuthStatus();
  }, []);

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
