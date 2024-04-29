import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo-rmv.png" alt="" width={120} />
          <span className="secondaryText">
            Tous droits réservés à <span className="logo-text">IsoRénov</span><br />
            &copy; 2024 IsoRénov
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Contactez Nous</span>
          <span className="secondaryText">Contactez-nous ou consultez notre travail sur:</span>
          <div className="flexCenter f-menu">
            <span className="face"><a href="https://www.facebook.com/profile.php?id=61558632086674&mibextid=ZbWKwL" target="_blank"><FaFacebook/></a></span>
            <span className="insta"><a href="https://www.instagram.com/isorenov?igsh=MWIzZjN6MW1hdnJ6aQ==" target="_blank"><FaInstagram/></a></span>
            <span className="linked"><a href="https://www.linkedin.com/in/iso-renov-a15787304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><FaLinkedinIn/></a></span>
            <span className="yout"><a href="https://youtube.com/@IsoRenov?si=hu1xkwdmLaN1MKMF" target="_blank"><FaYoutube/></a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
