import { useState, useEffect } from "react"
import { supabase } from "../lib/supabaseClient"
import { useRouter } from "next/router"
import { Button } from "@chakra-ui/react"

export default function Account() {
    const [account, setAccount] = useState(null)
    const router = useRouter()

    useEffect(() =>{
        fetchAccount()
    },[])

    async function fetchAccount(){
        const accountData = await supabase.auth.user()
        if (!accountData) {
            router.push('/login')
        }
        else {
            setAccount(accountData)
        }
    }
    async function signOut() {
        await supabase.auth.signOut()
        router.push('/login')
    }
    if(!account) return null
    return (
        <div>
            <h2>{account.email}</h2>
            <Button onClick={signOut}>Sign Out</Button>
        </div>
    )
}