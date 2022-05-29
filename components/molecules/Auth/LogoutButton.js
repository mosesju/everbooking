import { Button } from "@chakra-ui/react";
import { supabase } from "../../../lib/supabase/supabaseClient";
import { useRouter } from 'next/router'

export default function LogoutButton () {
    const router = useRouter()

    async function signOut({ user }) {
        console.log({ user })
        await supabase.auth.signOut()
        router.push('/login')
    }
    return (
        <div>
            <Button onClick={signOut}>Sign Out</Button>
        </div>
    )
}
export async function getServerSideProps({ req }) {
    const { user } = await supabase.auth.api.getUserByCookie(req)

    if(!user) {
        return { props: {}, redirect: { destination: '/login'} }
    }
    return { props: { user }}
}