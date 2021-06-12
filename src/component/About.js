import React from "react"
import { FaInstagram ,FaFacebookSquare,FaTwitter,FaYoutube,FaRegThumbsUp,FaShareAlt} from "react-icons/fa";
import "./About.css"
 const About =(props)=>{
     return(<div>       
        <div className="main-text">
            <h1>About Image</h1>
            <div className="header">             
              <img src=" " alt="" width="40px" height="40px" />
              <p className="info">name<br/><small>20:00pm</small></p>
              <small className="social"><FaInstagram/> <FaFacebookSquare/> <FaTwitter/> <FaYoutube/></small>
            </div>
            <div className="body">
              <img src="../image/image1.jpg" alt=" " width="100%" height="27%" />
              <p>hf fklahf lahlflka hflaknf ahl afljlafn hfhnnfah lhfllfl hfakfn,a fknakfkqhf
              hkdkjhakjshfk kafkhkhfkjhkhfknkahfhlqlf qhfqh fhqkhfkhqf ihfnq fhqhfnq hofihq
              bfkhfkhqhf qhf oq fhoqhfoihqofhqhoriqjpj  ofhofhohfohoh offhoqhfihqofj;   jqho ofhofhohfohohug
              fkhas flahflalkjoiuo jfojakld fjold hnlf jdl dhoifouwo flj pffnkahod fjfhkflf a</p>
            </div>
            <div className="left-float">
             <FaRegThumbsUp/>
             <FaShareAlt/>
            </div>
        </div>
    </div>)
 }
 export default About;