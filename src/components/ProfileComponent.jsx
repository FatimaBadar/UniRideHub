import React from 'react'
import { useState, useEffect } from 'react';

export default function ProfileComponent() {
    const [userData, setUserData] = useState([
    {
        userId: 1,
        firstName: 'Kenneth',
        lastName: 'Valdez',
        phone: '(239) 816-9029',
        totalRides: 320,
        avgRating: 4.5,
    },
    ]);
    // const userId = 1;
    // const [firstname, setFirstName] = useState("");
    // const [lastname, setLastName] = useState("");
    // const [phone, setPhone] = useState("");
    // const [totalRides, setTotalRides] = useState(0);
    // const [avgRating, setAvgRating] = useState(0);

    // useEffect(() => {
    //     getUserData(userId)
    // }, [userId])


    // const getUserData = async (id) => {

    //     //const data = { firstname, lastname, phone, totalRides, avgRating };
    //     fetch(`https://localhost:5173/api/user/${id}`)
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(data => {
    //             console.log(data.firstname);
    //         });
    //     // try {
    //     //     console.log("Fetching data for user ID:", id);
    //     //     const response = await fetch(`https://localhost:5173/api/user/${id}`, {
    //     //       method: "GET",
    //     //       headers: {
    //     //         "Content-Type": "application/json",
    //     //       },
    //     //     });

    //     //     const result = await response.json();
    //     //     console.log("Success:", result);
    //     //     setUserData(result);
    //     //   } 
    //     //   catch (error) {
    //     //     console.error("Error:", error);
    //     //   } 
    // }

    return (
        <div className="container-xl px-4 mt-4">
            <hr className="mt-0 mb-4" />
            <div className="row">

                <div className="col-xl-8">
                    <div className="card mb-4">
                        {/* {userData.length>0 ? ( */}
                        {userData.map((item) => (
                            <div key={item.userId}>

                                <div className="card-header">Profile Details</div>
                                <div className="card-body">

                                    {/* <div class="col-md-8">
                                <div class="card mb-3">
                                    <div class="card-body"> */}
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">First Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {item.firstName}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Last Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {item.lastName}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Phone number</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {item.phone}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Rides Completed</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {item.totalRides}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Average Rating</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {item.avgRating}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* )} */}

                    </div>
                </div>
            </div>
        </div>
    );
}
