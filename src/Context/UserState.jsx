import UserContext from "./userContext";
import { useState, useEffect } from "react";

const UserState = (props) => {
    const [userId, setUserId] = useState(1);
    // const userId = 1;

    return(
        <UserContext.Provider value={{userId, setUserId}}>
        {/* <UserContext.Provider value={userId}> */}

            {props.children}
        </UserContext.Provider>
    );
}

export default UserState;