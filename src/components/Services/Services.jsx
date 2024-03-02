import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";


const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Our</span>
        <span>achievements</span>
        {/* <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane> */}
        {/* <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a> */}
         <button className="button s-button">Read More</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "5rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            // emoji={HeartEmoji}
            heading={"SAE SUPERMILEAGE, USA"}
            detail={"Our team participated in SAE Supermileage 2010 held in Michigan, USA. Through collaborative efforts, innovation, and dedication, we have secured the overall 3rd position. Team Revanta’s success at SAE brings unparalleled glory and pride to our Institute NIT Jamshedpur."}
          />
        </motion.div>
        
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            // emoji={Glasses}
            heading={"Shell Eco Marathon, Malaysia"}
            detail={"Team Revanta proudly announces 2nd place in Shell Eco Marathon Asia 2012 in Kuala Lumpur, Malaysia. Beyond accolades, it's about the journey and conquering new heights together, fostering a spirit of continuous improvement and teamwork led by our passionate members."}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "1rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            // emoji={Humble}
            heading={"ESVC'21"}
            detail={
              "In 2021, Team Revanta in Electric Solar Vehicle Championship secured 5th in design and 7th in Virtuals. United as a team, we faced challenges, emerged stronger, and remain committed to pushing the boundaries of sustainable technology, led by the visionary Abhisekh Kumar(PIE)."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "35rem" }}
          whileInView={{ left: "29rem" }}
          transition={transition}
        >
          <Card
            // emoji={Humble}
            heading={"Championship-2014"}
            detail={
              "The team participated in the Electric Solar Vehicle Championship-2014 led by Gaurav Singh (MME) and came out with flying colours, securing the fourth rank in the virtuals and an over all remarkable performance in the dynamic event."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <motion.div
          initial={{ left: "30rem" }}
          whileInView={{ left: "35rem" }}
          transition={transition}
        >
          <Card
            // emoji={HeartEmoji}
            heading={"Shell Eco Marathon, Malaysia"}
            detail={"Team Revanta proudly announces 2nd place in Shell Eco Marathon Asia 2012 in Kuala Lumpur, Malaysia. Beyond accolades, it's about the journey and conquering new heights together, fostering a spirit of continuous improvement and teamwork led by our passionate members."}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
