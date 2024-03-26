import {IMG_ABOUT_URL} from "../utils/constant";
import {TEXT_CONTENT_ABOUT1,TEXT_CONTENT_ABOUT2}  from "../utils/text";
import UserClass from "./UserClass";
 
const About = () => {
    return (
        
            <div className="aboutComponent">
                <div className="commonAboutContent">
                <div className="imgContent">
                    <img src={IMG_ABOUT_URL}/>
                </div>
                <div className="textContent">
                    <UserClass text1 ={TEXT_CONTENT_ABOUT1} text2={TEXT_CONTENT_ABOUT2}/>
                </div>
                </div>

            </div>
        
    )
}


 export default About;