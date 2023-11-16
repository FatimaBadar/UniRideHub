import RideContext from "./RideContext";
import { useState, useEffect } from "react";

const RideState = (props) => {
    const [rideConfirmation, setRideConfirmation] = useState(true);

    return(
        <RideContext.Provider value={{rideConfirmation, setRideConfirmation}}>
            {props.children}
        </RideContext.Provider>
    );
}

export default RideState;