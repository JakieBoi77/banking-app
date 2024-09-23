"use client"

import BankCard from "@/components/BankCard";
import HeaderBox from "@/components/HeaderBox"
import { useAuth } from "@/contexts/user-context";

const MyBanks = () => {
  const { currentUser, accountsData } = useAuth();

  if (!currentUser) {
    return;
  }

  return (
    <section className="flex">
      <div className="my-banks">
        <HeaderBox
          title="My Bank Accounts"
          subtext="Effortlessly mange your banking activities."
        />
        <div className="space-y-4">
          <h2 className="header-2">
            Your cards
          </h2>
          <div className="flex flex-wrap gap-6">
            {accountsData && accountsData.accounts.map((account: Account) => (
              <BankCard
                key={account.id}
                account={account}
                userName={currentUser.firstName}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyBanks