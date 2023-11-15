import React from 'react'
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import UserContext from '../Context/userContext';

export default function ProfileComponent() {
    const {userId, setUserId} = useContext(UserContext);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        getUserData(userId);
    }, [userId])

    const getUserData = async (id) => {
        // console.log("user id: ", userId);
        // await axios.get(`https://localhost:5173/api/user/${id}`)

        await axios.get("https://mocki.io/v1/8ce0cf8b-9558-4792-badc-10a478cf9159")
        .then((response) => {
            // console.log(response);
            // console.log(response.data);
            setUserData(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="container-xl px-4 mt-4">
            <hr className="mt-0 mb-4" />
            <div className="row">

                <div className="col-xl-8">
                    <div className="card mb-4">
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
                                            {userData.firstName}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Last Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {userData.lastName}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Phone number</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {userData.phone}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Rides Completed</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {userData.totalRides}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Average Rating</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {userData.avgRating}
                                        </div>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
