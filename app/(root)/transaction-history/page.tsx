"use client";

import { BankDropDown } from '@/components/BankDropDown';
import HeaderBox from '@/components/HeaderBox'
import { Pagination } from '@/components/Pagination';
import TransactionsTable from '@/components/TransactionsTable';
import { useAccount } from '@/contexts/account-context';
import { useAuth } from '@/contexts/user-context';
import { formatAmount } from '@/lib/utils';
import React from 'react'

const TransactionHistory = ({ searchParams: { id, page }}: SearchParamProps) => {
  const { currentUser, accountsData } = useAuth();
  const { currentAccount } = useAccount();

  if (!currentUser || !accountsData || !currentAccount) {
    return;
  }

  const currentPage = Number(page as string) || 1;

  const rowsPerPage = 10;
  const totalPages = Math.ceil(currentAccount.transactions.length / rowsPerPage);

  const indexOfLastTransactions = currentPage * rowsPerPage;
  const indexOfFirstTransactions = indexOfLastTransactions - rowsPerPage;

  const currentTransactions = currentAccount.transactions.slice(
    indexOfFirstTransactions, indexOfLastTransactions
  );

  return (
    <div className="transactions">
      <div className="transactions-header">
        <HeaderBox
          title="Transaction History"
          subtext="See your bank details and transactions."
        />
        <BankDropDown accounts={accountsData.accounts} />
      </div>
      <div className="space-y-6">
        <div className="transactions-account">
          <div className="flex flex-col gap-2">
            <h2 className="text-18 font-bold text-white">
              {currentAccount.name}
            </h2>
            <p className="text-14 text-blue-25">
              {currentAccount.officialName}
            </p>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● <span className="text-16">{currentAccount.mask}</span>
            </p>
          </div>
          <div className="transactions-account-balance">
            <p className="text-14">
              Current Balance
            </p>
            <p className="text-24 text-center font-bold">
              {formatAmount(currentAccount.currentBalance)}
            </p>
          </div>
        </div>
        <section className="flex w-full flex-col gap-6">
          <TransactionsTable
            transactions={currentTransactions}
          />
          {totalPages > 1 && (
            <div className="my-4 w-full">
              <Pagination totalPages={totalPages} page={currentPage}/>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default TransactionHistory