import React from 'react'

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

import { LoadingScreen } from '../screens/LoadingScreen'

import { useUser } from '../hooks/useUser'

export function Routes() {
  const { user, loading } = useUser()

  if (loading) {
    return <LoadingScreen />
  }
  if (user.ra) {
    return <AppRoutes />
  }
  return <AuthRoutes />
}
