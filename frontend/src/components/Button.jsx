

export function Button(props) {
    return (
        <button onClick={props.onClick} className="rounded bg-slate-800 text-white text-center py-2 hover:bg-slate-900">
            <div>{props.text}</div>
        </button>
    )
}