import Link from "next/link";


export default function NavBarItem ({ link, item }) {

    return (
        <div>
            <Link href={ link }>
                <h1>{ item }</h1>
            </Link>
        </div>
    )
}