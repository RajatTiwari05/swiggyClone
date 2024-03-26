import { LOGO_URL } from "../utils/constant";
import { useState,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    let [buttonName,setButtonName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const loggedInName = useContext(UserContext);

    
    return ( 
        <div className="flex justify-between">
            <div className="logo-container">
                <Link to="/"><img className="w-40" src={LOGO_URL} /></Link>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4  "> 
                    <li className="px-3 hover:cursor-pointer hover:text-orange-400 ">Location Field</li>
                    <li className="px-3 hover:cursor-pointer hover:text-orange-400 text-lg">Offers</li>
                    <li className="px-3 text-lg"><Link style={{ textDecoration: 'none', color: 'orangered'}} to="/help">Help</Link></li>
                    <li className="px-3 text-lg"><Link style={{ textDecoration: 'none', color: 'orangered'}} to="/cart">Cart</Link></li>
                    <li className="px-3 text-lg"><Link style={{ textDecoration: 'none', color: 'orangered'}} to="/about">About Us</Link></li>
                    <li className="px-3 text-lg"><Link style={{ textDecoration: 'none', color: 'orangered'}} to="/grocery">Grocery</Link></li>
                    <li className="px-3 text-lg"><button className="login-btn" onClick={() => {
                        buttonName == "Login"? setButtonName("Logout") : setButtonName("Login");
                    }}>{buttonName}</button></li>
                    <li className="px-3 hover:cursor-pointer text-lg">{onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-3 hover:cursor-pointer text-lg font-bold text-orange-400">{loggedInName.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;