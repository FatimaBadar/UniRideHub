import React from 'react'
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import UserContext from '../Context/userContext';
import RideContext from '../Context/RideContext';
import './css/requested.css';
import MuiAlert from '@mui/material/Alert';
import Rating from '@mui/material/Rating';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function RequestedRideComponent() {
    const { userId, setUserId } = useContext(UserContext);
    const { rideConfirmation, setRideConfirmation } = useContext(RideContext);

    const [rideData, setRideData] = useState([]);
    const [rideStart, setRideStart] = useState(false);
    const [rideStop, setRideStop] = useState(true);
    const [ratingValue, setRatingValue] = React.useState(0);

    useEffect(() => {
        getRideData(userId);
    }, [userId])

    const getRideData = async (id) => {
        // console.log("user id: ", userId);
        // await axios.get(`https://localhost:5173/api/requestedRides/${id}`)

        await axios.get("https://mocki.io/v1/63babf2e-63df-49c7-875d-7434900c7fc4")
            .then((response) => {
                // console.log(response);
                // console.log(response.data);
                setRideData(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const rideStatus = (status) => {
        // console.log(rideStart)
        if (status == "start") {
            setRideStart(true);
            // setTimeout(setRideStart(true), 5000)

        }
        else if (status == "stopped") {
            setRideStop(false);
            setRideStart(false);
            // setTimeout(setRideStop(true), 5000)
            // setRideStart(false);
        }
        // console.log("after: ",rideStart);

    }

    return (
        // <body className="RidePage">
        <div class="card">
            <div class="upper">
                <div class="row">
                    <div class="col-8 heading justify-content-center">
                        <h2><b>Requested Ride Details</b></h2>
                    </div>
                    <div class="col-4">
                        <img class="img-fluid" src="https://i.imgur.com/Rzjor3M.png" />
                    </div>
                </div>

                {/* <div class="mb-3">
                    <hr class="new1" />
                </div> */}

                <div class="d-flex justify-content-between">
                    <span class="font-weight-bold">Source</span>
                    <span class="text-muted">{rideData.source}</span>
                </div>
                <hr />
                <div class="d-flex justify-content-between">
                    <span class="font-weight-bold">Destination</span>
                    <span class="text-muted">{rideData.destination}</span>
                </div>
                <hr />
                <div class="d-flex justify-content-between">
                    <span class="font-weight-bold">Mid Routes</span>
                    <span class="text-muted">{rideData.midRoutes}</span>
                </div>
                <hr />
                <div class="d-flex justify-content-between">
                    <span class="font-weight-bold">Fare</span>
                    <span class="text-muted">{rideData.fare}</span>
                </div>
                <hr />
                <div class="d-flex justify-content-between">
                    <span class="font-weight-bold">Total Seats</span>
                    <span class="text-muted">{rideData.totalSeats}</span>
                </div>
                <hr />
                <div class="d-flex justify-content-between">
                    <span class="font-weight-bold">Timings</span>
                    <span class="text-muted">{rideData.timings}</span>
                </div>

                {/* <div class="d-flex justify-content-between">
                    <small>Tax</small>
                    <small>$200.00</small>
                </div> */}

                {/* <div class="text-center mt-5">
                    <button class="btn btn-primary">Track your order</button>
                </div> */}

            </div>
            <div class="lower">
                <button class="btn">Track Ride</button>
            </div>
            <hr />

            {rideConfirmation ? (
                <p id='confirm'>
                    <Alert severity="success">Requested Ride Confirmed!</Alert>
                    {/* {console.log("checking", rideStart)} */}
                    {/* <img
                        src="https://img.icons8.com/clouds/100/000000/handshake.png"
                        width="125"
                        height="120"
                        style={{ display: 'block', border: '0px' }}
                    /> */}

                    {!rideStart ? (
                        <div class="text-center mt-5">
                            <button id='startRide' onClick={rideStatus("start")} class="btn btn-primary">Start Ride</button>
                        </div>
                    ) : (
                        <p>not sstarted</p>
                    )
                    }

                    {!rideStop && rideStart ? (
                        <div class="text-center mt-5">
                            <button id='stopRide' onClick={rideStatus("stop")} class="btn btn-primary">Stop Ride</button>
                        </div>
                    ) : (
                        <p>not stopped</p>
                    )
                    }
                </p>
            ) : (
                <p id='notconfirm'>
                    <div class="lower">
                        <Alert severity="info">Waiting for Confirmation from Rider</Alert>
                    </div>
                    {/* <img
                        src="https://img.icons8.com/clouds/100/000000/handshake.png"
                        width="125"
                        height="120"
                        style={{ display: 'block', border: '0px' }}
                    /> */}
                </p>
            )}

            <hr />
            <div id='rateRider' class="upper">
                <div class="row">
                    <div class="col-15 heading2">
                        <h5><b>Rate Rider</b></h5>
                        <Rating id='rating'
                            name="simple-controlled"
                            value={ratingValue}
                            onChange={(event, newValue) => {
                                setRatingValue(newValue);
                            }}
                        />
                    </div>
                </div>
            </div>

        </div >
        // </body>

    );
}
