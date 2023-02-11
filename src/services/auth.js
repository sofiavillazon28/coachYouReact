import { supabase } from "../utils/supabase"

export const signUp = async ({ email, password, username }) => {
  const response = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username
      }
    }
  })
  return response
} 

export const signInWithEmail = async ({ email, password }) => {
  const response = await supabase.auth.signInWithPassword({ email, password })
  return response
}

export const signOut = async () => {
  const response = await supabase.auth.signOut()
  return response
}

export const getSession = async () => {
  const response = await supabase.auth.getSession()
  return response
}
