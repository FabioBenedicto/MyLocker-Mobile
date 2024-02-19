import React, {
  type ReactNode,
  createContext,
  useState,
  useEffect,
} from 'react'

// import api from '../services/api'
// import { type AxiosResponse } from 'axios'

interface Apm {
  id: number
  status: number
}

export interface Student {
  ra: string
  first_name: string
  last_name: string
  email: string
  password?: string
  code?: string
  locker_number?: number
  status?: number
  profile_picture_url?: string
  apm: Apm[]
  apmCount: number
}

interface UserContextType {
  user: Student
  setUser: React.Dispatch<React.SetStateAction<Student>>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

interface UserContextProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<Student>({
    ra: '',
    first_name: '',
    last_name: '',
    email: '',
    apm: [],
    apmCount: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // api
    //   .get('/validate/students', { withCredentials: true })
    //   .then((response: AxiosResponse) => {
    //     setLoading(false)
    //     setUser(response.data)
    //   })
    //   .catch(err => {
    //     console.log(err.response.data)
    //   })

    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  )
}
