'use client'
import React, { useCallback } from 'react'
import Button from '@/components/UI/Button/Button'
import { shareURL } from '@telegram-apps/sdk'

const FriendsPage = () => {
  const onInviteFriends = useCallback(() => {
    if (shareURL.isAvailable()) {
      shareURL("https://telegram-mini-app-ten-liard.vercel.app/manifest.json", 'Telegram Mini App')
    }
  }, [])

  return (
    <div>
      <span>FriendsPage</span>
      <Button onClick={onInviteFriends}>Invite Friends</Button>
    </div>
  )
}

export default FriendsPage
