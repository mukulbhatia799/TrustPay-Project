import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { WarningAtEnd } from "../components/WarningAtEnd"
import { useState } from "react"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"

export function Signup() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="bg-slate-500 h-screen flex justify-center items-center">
            <div className="rounded-lg bg-white px-7 py-10 flex flex-col gap-4">
                <Heading text={"Sign Up"} />
                <SubHeading text={"Enter your information to create an account"} />
                <Input onChange={(e) => {
                    setFirstName(e.target.value);
                }} label={"First Name"} placeholder={"Mukul"} inputType={"text"} />
                <Input onChange={(e) => {
                    setLastName(e.target.value);
                }} label={"Last Name"} placeholder={"Bhatia"} />
                <Input onChange={(e) => {
                    setUsername(e.target.value);
                }} label={"Email"} placeholder={"mukulbhatia@example.com"} />
                <Input onChange={(e) => {
                    setPassword(e.target.value);
                }} label={"Password"} />
                <Button onClick={async () => {
                    await axios.post("http://localhost:3000/api/v1/user/signup", {
                        firstName,
                        lastName,
                        username,
                        password
                    })
                    .then(response => {
                        console.log("message: ", response.data.message);
                        console.log("token: ", response.data.token);
                        navigate('/dashboard');
                    })
                    .catch(error => {
                        console.log("error occured: ", error.response.data.message);
                    })
                }} text="Sign Up" />
                <WarningAtEnd text="Already have an account?" to="/signin" linkText="login" />  
            </div>
        </div>
    )
}