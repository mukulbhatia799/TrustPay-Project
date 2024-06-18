

export function Navbar() {
    return (
        <div>
            <div className="flex justify-between px-10 py-2 text-3xl font-extrabold items-center">
                <div>Payments App</div>
                <div className="flex gap-2 items-center font-normal">
                    <div>Hello, User</div>
                    <div className="rounded-full bg-slate-500 px-4 py-2 text-center">U</div>
                </div>
            </div>
            <hr />
        </div>
    )
}