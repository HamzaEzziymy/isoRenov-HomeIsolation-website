import "./Acceuil.css";
import { motion } from "framer-motion";
import { useState } from "react";


const Acceuil = () => {

  return (
    <section id="acceuil" className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Naturellement isolé,<br/> naturellement confortable.
            </motion.h1>
          </div>
          <div className="flexColStart  flexhero-des">
            <span>Votre expert en rénovation énergétique pour un habitat plus confortable,</span>
            <span>plus économe et plus durable. Plus l’image suivante</span>
          </div>
  
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src={"./logo.jpg"} alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Acceuil;
