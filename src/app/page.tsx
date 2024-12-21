'use client'
import OnBoarding from '@/components/OnBoarding/OnBoarding'
import React from 'react'
import useAppStore from '@/stores/useAppStore'

export default function Layout() {
  const { telegramSafeAreaViewBottom } = useAppStore()

  return (
    <div className="w-100 h-100 d-flex flex-column overflow-auto">
      <OnBoarding />
      <div style={{ paddingBottom: telegramSafeAreaViewBottom }} />
    </div>
  )
}
