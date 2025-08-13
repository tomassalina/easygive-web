"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface DonationData {
  id: string
  date: string
  amount: number
  service: string
  cause: string
  status: string
  blockHash: string
}

interface User {
  name: string
  email: string
  avatar?: string
}

interface DonationContextType {
  user: User | null
  isLoggedIn: boolean
  donations: DonationData[]
  totalDonated: number
  login: (userData: User) => void
  logout: () => void
  addDonation: (donation: Omit<DonationData, "id" | "date" | "status" | "blockHash">) => void
}

const DonationContext = createContext<DonationContextType | undefined>(undefined)

const mockDonations: DonationData[] = [
  {
    id: "0x1a2b3c4d5e6f",
    date: "2024-03-10",
    amount: 2.67,
    service: "AeroBooking - Vuelo MAD-BCN",
    cause: "Fundación Agua Limpia",
    status: "Confirmado",
    blockHash: "0x8f9e8d7c6b5a4938271605",
  },
  {
    id: "0x2b3c4d5e6f7a",
    date: "2024-02-28",
    amount: 4.5,
    service: "Netflix - Suscripción Premium",
    cause: "Educación para Todos",
    status: "Confirmado",
    blockHash: "0x7e6d5c4b3a2918374650",
  },
  {
    id: "0x3c4d5e6f7a8b",
    date: "2024-02-15",
    amount: 1.89,
    service: "Spotify - Plan Familiar",
    cause: "Fundación Agua Limpia",
    status: "Confirmado",
    blockHash: "0x6d5c4b3a2918374650ef",
  },
  {
    id: "0x4d5e6f7a8b9c",
    date: "2024-01-22",
    amount: 8.95,
    service: "Amazon Prime - Compra",
    cause: "Reforestación Global",
    status: "Confirmado",
    blockHash: "0x5c4b3a2918374650efgh",
  },
]

export function DonationProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [donations, setDonations] = useState<DonationData[]>(mockDonations)

  const totalDonated = donations.reduce((sum, donation) => sum + donation.amount, 0)

  const login = (userData: User) => {
    setUser(userData)
    setIsLoggedIn(true)
    // Simulate loading user's donation history
    localStorage.setItem("donar-facil-user", JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    setIsLoggedIn(false)
    localStorage.removeItem("donar-facil-user")
  }

  const addDonation = (donationData: Omit<DonationData, "id" | "date" | "status" | "blockHash">) => {
    const newDonation: DonationData = {
      ...donationData,
      id: `0x${Math.random().toString(16).substr(2, 12)}`,
      date: new Date().toISOString().split("T")[0],
      status: "Confirmado",
      blockHash: `0x${Math.random().toString(16).substr(2, 20)}`,
    }
    setDonations((prev) => [newDonation, ...prev])
  }

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("donar-facil-user")
    if (savedUser) {
      const userData = JSON.parse(savedUser)
      setUser(userData)
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <DonationContext.Provider
      value={{
        user,
        isLoggedIn,
        donations,
        totalDonated,
        login,
        logout,
        addDonation,
      }}
    >
      {children}
    </DonationContext.Provider>
  )
}

export function useDonation() {
  const context = useContext(DonationContext)
  if (context === undefined) {
    throw new Error("useDonation must be used within a DonationProvider")
  }
  return context
}
