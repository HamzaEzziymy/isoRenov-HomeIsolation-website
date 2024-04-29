import React from "react";
import "./Apropos.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Apropos = () => {
  return (
    <div id="apropos" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <div className="title-apropos"><span className="redText">À Propos</span><span className="horizontal-line"></span></div>
          <span className="primaryText">Qui sommes-nous</span>
          <span className="apropos-text">
            <span className="logo-text">IsoRénov</span> est une entreprise canadienne spécialisée dans les services d'isolation pour 
            les maisons résidentielles, commerciales et industrielles.<br/><br/><br/> Nous sommes fiers d'offrir à 
            nos clients des solutions d'isolation écoénergétiques et abordables qui contribuent à 
            réduire leur consommation d'énergie et leurs émissions de gaz à effet de serre.<br/><br/><br/> Notre 
            équipe d'experts est composée de professionnels qualifiés et expérimentés qui 
            s'engagent à fournir un service de qualité supérieure.<br/><br/><br/> Nous utilisons uniquement des 
            matériaux d'isolation de la plus haute qualité, et nos méthodes d'installation sont 
            conformes aux normes les plus strictes de l'industrie.
          </span>  
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          {/* <div className="image-container"> */}
            {/* <img src="./apropos.jpg" alt="" /> */}
            <video width="100%" controls autoPlay muted loop>
              <source src="./isorenoveVideo.mp4" type="video/mp4" />
            </video>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Apropos;
