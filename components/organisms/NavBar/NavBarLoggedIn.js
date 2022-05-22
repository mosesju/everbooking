import LogoutButton from "../../molecules/LogoutButton";
import NavBarItem from "../../molecules/NavBar/NavBarItem";

export default function NavBarLoggedIn () {
    console.log('should show the navbar')
    return (
        <div>
            <NavBarItem link="/events" item="Events" />
            <NavBarItem link="/account" item="Accounts" />
            <LogoutButton />
        </div>
    )
}