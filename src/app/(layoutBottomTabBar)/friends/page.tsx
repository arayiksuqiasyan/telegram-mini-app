'use client'
import React, { useCallback } from 'react'
import Button from '@/components/UI/Button/Button'
import { shareURL } from '@telegram-apps/sdk'

const FriendsPage = () => {
  const onInviteFriends = useCallback(() => {
    if (shareURL.isAvailable() && process?.env?.NEXT_PUBLIC_MANIFEST_URL) {
      shareURL(process.env.NEXT_PUBLIC_MANIFEST_URL, 'Telegram Mini App')
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
