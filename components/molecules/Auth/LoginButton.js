import { Button } from "@chakra-ui/react"
import { Link } from "next/link"

export default function LoginButton () {
    return (
        <div>
            <Link href="/login">
                <Button>
                    Login
                </Button>
            </Link>
        </div>
    )
}