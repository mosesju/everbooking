import { Button } from "@chakra-ui/react";
import { supabase } from "../lib/supabaseClient";

export default  function Events({user}){
    // console.log({user}) prints the user object
    async function signOut() {
        console.log({ user })
        await supabase.auth.signOut()
        router.push('/sign-in')
    }
    return (
        <div>
            <h1>Events</h1>
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