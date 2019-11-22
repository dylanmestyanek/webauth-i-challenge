import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {

    useEffect(() => {
    }, []);
    
    const fetchData = () => {
        
        axios.get("http://localhost:4000/api/users")
        .then(res => console.log(res))
        .catch(err => console.log("There was an error while fetching to /api/users \n", err));
    }

    return (
        <>
        <br/>
        <br/>
        <br/>
        <button onClick={fetchData}> Dashboard </button>
        </>
    )
}

export default Dashboard;