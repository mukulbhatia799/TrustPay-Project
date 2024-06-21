import { Navigate, useNavigate } from 'react-router-dom'

export function WarningAtEnd(props) {
    const navigate = useNavigate();
    return (
        <p class="text-sm font-light text-black">
            {props.text} <button onClick={() => {
                navigate(props.to);
            }} class="font-medium text-primary-800 hover:underline">{props.linkText}</button>
        </p>
    )
}