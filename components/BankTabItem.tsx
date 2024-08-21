"use client";

import { cn } from "@/lib/utils";
import { useAccount } from "@/contexts/account-context";

export const BankTabItem = ({ account, appwriteItemId }: BankTabItemProps) => {
  const { setCurrentAccount } = useAccount();

  const isActive = appwriteItemId === account?.appwriteItemId;

  const handleBankChange = async () => {
    setCurrentAccount(account);
  };

  return (
    <div
      onClick={handleBankChange}
      className={cn(`banktab-item`, {
        " border-blue-600": isActive,
      })}
    >
      <p
        className={cn(`text-16 line-clamp-1 flex-1 font-medium text-gray-500`, {
          " text-blue-600": isActive,
        })}
      >
        {account.name}
      </p>
    </div>
  );
};