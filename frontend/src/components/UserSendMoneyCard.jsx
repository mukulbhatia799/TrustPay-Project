import { SendMoney } from "../pages/SendMoney"
import { SendMoneyBtn } from "./SendMoneyBtn"

export function UserSendMoneyCard() {
    return (
        <div className="flex justify-between px-10 items-center">
            <div className="flex gap-2 justify-center items-center">
                <div className="rounded-full p-3 bg-slate-400 text-lg">U1</div>
                <div className="font-bold text-2xl">User 1</div>
            </div>
            <SendMoneyBtn />
        </div>
    )
}