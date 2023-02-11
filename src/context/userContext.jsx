import { createContext, useEffect, useState } from "react"

import { signUp, signInWithEmail, signOut, getSession } from "../services/auth"

import { supabase } from "../utils/supabase"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    getSession().then(({ data: { session } }) => setUser(session?.user))

    supabase
      .auth
      .onAuthStateChange((_event, session) => setUser(session?.user))
  }, [])

  const register = async ({ email, password, username }) => {
    setLoading(true)
    const response = await signUp({ email, password, username })
    await setLoading(false)
    return response
  }

  const login = async ({ email, password }) => {
    setLoading(true)
    const response = await signInWithEmail({ email, password })
    await setLoading(false)
    return response
  }

  const logout = async () => {
    await signOut()
  }

  return (
    <UserContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </UserContext.Provider>
  )
}