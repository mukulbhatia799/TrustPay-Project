import { Navbar } from "../components/Navbar"
import {Balance} from "../components/Balance"
import {SearchUser} from "../components/SearchUser"
import {DisplayUser} from "../components/DisplayUser"
export function Dashboard() {
    return (
        <div className="flex flex-col gap-7">
            <Navbar />
            <Balance />
            <SearchUser />
            <DisplayUser />
        </div>
    )
}