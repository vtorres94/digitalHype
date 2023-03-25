import React from "react";
import Strings from "./components/strings/Strings";
import '../css/body.css'

const Body: React.FC = () => {
    return(
        <div className="body">
            <Strings/>
        </div>
    );
}

export default Body;