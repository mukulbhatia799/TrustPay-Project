import {Link} from 'react-router-dom'

export function WarningAtEnd(props) {
    return (
        <div className="flex gap-1">
            <div>{props.text}</div>
            <Link className="underline" to={props.to}>{props.linkText}</Link>
        </div>
    )
}