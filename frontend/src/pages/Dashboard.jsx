import { Balance } from "../components/Balance"
import Navbar from "../components/Navbar"

import { UserSearchAndDisplay } from "../components/UserSearchAndDisplay"
export function Dashboard() {

    return (
        <div className="h-screen flex flex-col gap-7">
            <Navbar />
            <Balance />
            <UserSearchAndDisplay />
        </div>
    )
}