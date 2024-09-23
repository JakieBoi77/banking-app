"use client"

import HeaderBox from '@/components/HeaderBox'
import RecentTransactions from '@/components/RecentTransactions';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { useAccount } from '@/contexts/account-context';
import { useAuth } from '@/contexts/user-context';
import React from 'react'

const Home = ({ searchParams: { id, page } }: SearchParamProps) => {
  const { currentUser, accountsData, loading } = useAuth();
  const { currentAccount } = useAccount();
  
  if (!currentUser || !accountsData || !currentAccount) {
    return;
  }

  if (loading) {
    return (
      <div>
        Loading ...
      </div>
    );
  }

  const currentPage = Number(page as string) || 1;

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={currentUser.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={accountsData.accounts}
            totalBanks={accountsData.totalBanks}
            totalCurrentBalance={accountsData.totalCurrentBalance}
          />
        </header>
        <RecentTransactions
          accounts={accountsData.accounts}
          transactions={currentAccount.transactions}
          appwriteItemId={currentAccount.appwriteItemId}
          page={currentPage}
        />
      </div>
      <RightSidebar
        user={currentUser}
        transactions={currentAccount.transactions}
        banks={accountsData.accounts.slice(0, 2)}
      />
    </section>
  )
}

export default Home