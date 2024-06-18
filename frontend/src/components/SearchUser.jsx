

export function SearchUser() {
    return (
        <div>
            <div className="px-10 flex flex-col gap-4">
                <div className="font-bold text-2xl">Users</div>
                <input className="rounded border font-medium border-black w-full py-2 px-3" placeholder="Search users..." />
            </div>
        </div>
    )
}