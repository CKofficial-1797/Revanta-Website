import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import Rajat from "../../img/rajat.jpeg";
import Abhishek from "../../img/abhisek.jpeg"
import Priyanshu from "../../img/Priyanshu.jpg";
import SolarCar from "../../img/SolarCar.jfif"
import Bittu from "../../img/Bittu.jpeg"

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
import Voice1 from "../Voice/Voice1.jsx"
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Captain's
          </span>
          <span>Voice</span>
          <Voice1/>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Read More</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img  className="img" src={Rajat} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="img" src={Priyanshu} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="img" src={SolarCar} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img className="img" src={Abhishek} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="img" src={Bittu} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
