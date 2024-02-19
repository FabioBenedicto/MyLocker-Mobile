import { useContext } from 'react'

import { LockerContext } from '../contexts/LockerContext'

export function useLocker() {
  return useContext(LockerContext)
}
