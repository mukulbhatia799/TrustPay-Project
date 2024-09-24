import {useSearchParams } from "react-router-dom"
import { Balance } from "../components/Balance"
import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"

import { UserSearchAndDisplay } from "../components/UserSearchAndDisplay"
export function Dashboard() {
    const [loggedInUser, setLoggedInUser] = useState("");
    const [userBalance, setUserBalance] = useState(0.0);
    const jwtToken = localStorage.getItem("token");
    console.log(`current logged in user ID: ${jwtToken}`);

    // verifying jwtToken and getting token user data.
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/v1/user/verifytoken?jwtToken=${jwtToken.split(' ')[1]}`)
            .then((response) => {
                console.log(`response.data.userId: ${response.data.userId}`);
                axios.get(`http://localhost:3000/api/v1/user/finduser?id=${response.data.userId}`)
                .then((res) => {
                    setLoggedInUser(() => res.data.user);
                })
            })
    }, []);

    // getting logged in user balance.
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/v1/account/balance`, {
                headers: {
                    'Authorization': jwtToken,  // Example: Sending a JWT token
                }
            })
            .then((response) => {
                setUserBalance(() => response.data.balance);
                console.log(`balance ${response.data.balance}`);
            })
    }, []);

    console.log(`local storage token: ${localStorage.getItem("token")}`);
    
    return (
        <div className="h-screen flex flex-col gap-7">
            <Navbar firstName={loggedInUser.firstName}/>
            <Balance userBalance={userBalance} />
            <UserSearchAndDisplay loggedInUser={loggedInUser} userBalance={userBalance} />
        </div>
    )
}