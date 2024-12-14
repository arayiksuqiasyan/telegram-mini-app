'use client'
import React, { useCallback } from 'react'
import Button from '@/components/UI/Button/Button'
import { TelegramService } from '@/services/telegram'

const FriendsPage = () => {
  const onInviteFriends = useCallback(() => {
    TelegramService.inviteFriends({
      url: 'https://telegram-mini-app-ten-liard.vercel.app/',
      message: 'Telegram Mini App',
    })
  }, [])

  return (
    <div>
      <span>FriendsPage</span>
      <Button onClick={onInviteFriends}>Invite Friends</Button>
    </div>
  )
}

export default FriendsPage
