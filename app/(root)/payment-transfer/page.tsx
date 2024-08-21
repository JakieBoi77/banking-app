"use client";

import HeaderBox from '@/components/HeaderBox'
import PaymentTransferForm from '@/components/PaymentTransferForm'
import { useAuth } from '@/contexts/user-context';
import React from 'react'

const Transfer = () => {
  const { currentUser, accountsData } = useAuth();

  if (!currentUser || !accountsData) {
    return;
  }

  return (
    <section className="payment-transfer">
      <HeaderBox
        title="Payment Transfer"
        subtext="Please provide any specific details or notes related to the payment transfer."
      />
      <section className="size-full pt-5">
        <PaymentTransferForm
          accounts={accountsData.accounts}
        />
      </section>
    </section>
  )
}

export default Transfer