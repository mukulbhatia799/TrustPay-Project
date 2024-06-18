import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { WarningAtEnd } from "../components/WarningAtEnd"
import { useState } from "react"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"

export function Signin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="bg-slate-500 h-screen flex justify-center items-center">
            <div className="rounded-lg bg-white px-5 py-10 flex flex-col gap-4">
                <Heading text={"Sign In"} />
                <SubHeading text={"Enter your credentials to access your account"} />
                <Input onChange={(e) => {
                    setUsername(e.target.value);
                }} label={"Email"} placeholder={"mukulbhatia@example.com"} />
                <Input onChange={(e) => {
                    setPassword(e.target.value);
                }} label={"Password"}   />
                <Button onClick={async() => {
                    await axios.post("http://localhost:3000/api/v1/user/signin", {
                        username,
                        password
                    })
                        .then(response => {
                            console.log(response.data.message);
                            console.log(response.data.token);
                            navigate('/dashboard');
                        })
                        .catch(error => {
                            console.log(error);
                            console.log(error.response.data.message);
                        })

                }} text="Sign In" />
                <WarningAtEnd text="Don't have an account?" to="/signup" linkText="Sign Up"/>   
            </div>
        </div>
    )
}