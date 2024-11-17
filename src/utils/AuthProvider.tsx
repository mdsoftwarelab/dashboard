import React, { createContext, ReactNode, useContext, useState } from "react"
import { storageService } from "../services/storageService"

interface AuthContextType {
    isAuthenticated: boolean
    login: (userToken: string) => void
    logout: () => void
  }

  interface Props {
    children: ReactNode
  }

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [token, setToken] = useState<string | null>(storageService.getToken())

  const login = (userToken: string) => {
    setToken(userToken);
    storageService.setToken(userToken)
  }

  const logout = () => {
    setToken(null)
    storageService.deleteToken()
  }
  
  const isAuthenticated = !!token

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }

  return context;
}