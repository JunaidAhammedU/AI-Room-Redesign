// Provider.tsx
'use client'

import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { UserDetailContext } from './_context/userDetailContext'

export default function Provider({ children }: any) {
  const { user, isLoaded } = useUser()
  const [userDetails, setUserDetails] = useState<any>([])
  const [isVerified, setIsVerified] = useState(false)

  useEffect(() => {
    if (isLoaded && user && !isVerified) {
      verifyUser()
    }
  }, [isLoaded, user, isVerified])

  const verifyUser = async () => {
    try {
      const response = await axios.post("/api/verify.user", { user })
      setUserDetails(response.data.result)
      setIsVerified(true)
    } catch (error) {
      console.error("Error verifying user:", error)
    }
  }
  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <div>{children}</div>
    </UserDetailContext.Provider>
  )
}
