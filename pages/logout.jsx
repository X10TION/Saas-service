import React, { useEffect} from 'react'
import { supabase } from '../utils/supabase'
import { useRouter } from 'next/router'


const  Logout = () => {
    const router = useRouter()
    useEffect(() => {
        const logout = async () => {
            supabase.auth.signOut();
            router.push('/')
        }
        logout()
    },[])
  return (
    <div>Login page</div>
  )
}

export default Logout