import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { WarningAtEnd } from "../components/WarningAtEnd"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io"
import { FiEye, FiEyeOff } from "react-icons/fi"
import logo from '../images/main-logo.png'

export function Signup() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [emailWarning, setEmailWarning] = useState("");
    const [checkForEmptyField, setCheckForEmptyField] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="bg-[#5CADFF] min-h-screen flex justify-center items-center px-4">
            <div className="bg-white border-4 rounded-3xl px-6 py-8 md:px-10 md:py-10 my-5 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl flex flex-col gap-4 text-sm sm:text-base md:text-lg">
                <button onClick={() => navigate("/")}>
                    <IoIosArrowRoundBack size={30} />
                </button>
                <img src={logo} alt="trust pay logo" className="w-full max-w-[300px] mx-auto" />

                <Heading text={"Sign Up"} />
                <SubHeading text={"Enter your information to create an account"} />

                <Input onChange={(e) => setFirstName(e.target.value)} label={"First Name"} placeholder={"Mukul"} inputType={"text"} />

                <Input onChange={(e) => setLastName(e.target.value)} label={"Last Name"} placeholder={"Bhatia"} />

                <Input onChange={(e) => setUsername(e.target.value)} label={"Email"} placeholder={"mukulbhatia@example.com"} emailWarning={emailWarning} />

                <div className="relative">
                    <Input 
                        onChange={(e) => setPassword(e.target.value)} 
                        label={"Password"} 
                        inputType={showPassword ? "text" : "password"} 
                    />
                    <span 
                        onClick={() => setShowPassword(prev => !prev)} 
                        className="absolute right-3 top-[38px] cursor-pointer text-xl text-gray-600"
                    >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </span>
                </div>

                <Button onClick={async () => {
                    if(firstName === "" || lastName === "" || username === "" || password === "") {
                        setCheckForEmptyField(true);
                    } else {
                        try {
                            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                                firstName,
                                lastName,
                                username,
                                password
                            });
                            setEmailWarning("");
                            localStorage.setItem("token", `Bearer ${response.data.token}`);
                            navigate("/dashboard");
                        } catch (error) {
                            setEmailWarning("Email already taken");
                        }
                    }
                }} text="Sign Up" />

                {checkForEmptyField && <div className="text-red-600">All fields are required!</div>}

                <WarningAtEnd text="Already have an account?" to="/signin" linkText="login" />
            </div>
        </div>
    )
}