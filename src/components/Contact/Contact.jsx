import React, { useRef, useState } from "react";
import "./Contact.css";
import { CiFacebook, CiInstagram, CiLinkedin, CiYoutube, CiMail  } from "react-icons/ci";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [send, setSend] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSend(true);

    emailjs
      .sendForm('service_m0nr74s', 'template_fh2k2b8', form.current, {
        publicKey: 'B1pkVdxbgll-AlvOE',
      })
      .then(
        () => {
          setSend(false);
          form.current.reset();
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }

  return (
  <div id="contactez-nous" className="contactez-nous">
    <div className="contact-title">
      <span></span>
      <p>Contactez-nous ou envoyez-nous un message</p>
      <span></span>
    </div>
    <div className="g-wrapper">

      <div class="container">
        <p>Envoyer un Message</p>
        <form ref={form} onSubmit={(e)=>sendEmail(e)}>
          <div className="user-info">
            <div>
              <input type="text" required id="fname" name="user_name" placeholder="Nome..."/>
            </div>
            <div>
              <input type="email" required id="lname" name="user_email" placeholder="Email.."/>
            </div>
          </div>
          <div>
            <input type="text" required id="lname" name="subject" placeholder="Subject.."/>
          </div>
          <textarea id="subject" required name="message" rows={5} placeholder="Write Message..."></textarea>

          <button type="submit">
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                </svg>
                </div>
              </div>
              <div>{send&&<img src="./uGsHn.gif" width="20px" height="20px" style={{marginLeft:"40px"}}/>}</div>
              <span>Envoyer</span>
          </button>
        </form>
      </div>

      <div className="social-media">
        <p>Notre Contacts</p>
        <div>
          <div><a href="mailto:isorenov0@gmail.com"><span className="s-icon"><CiMail/></span> Email: isorenov0@gmail.com</a></div>
          <div><a href="https://www.facebook.com/profile.php?id=61558632086674&mibextid=ZbWKwL" target="_blank"><span className="s-icon"><CiFacebook /></span> Facebook</a></div>
          <div><a href="https://www.instagram.com/isorenov?igsh=MWIzZjN6MW1hdnJ6aQ==" target="_blank"><span className="s-icon"><CiInstagram /></span> Instagram</a></div>
          <div><a href="https://www.linkedin.com/in/iso-renov-a15787304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><span  className="s-icon"><CiLinkedin /></span> Linkedin </a></div>
          <div><a href="https://youtube.com/@IsoRenov?si=hu1xkwdmLaN1MKMF" target="_blank"><span className="s-icon"><CiYoutube /></span> Youtube</a></div>
        </div>
      </div>

    </div>
  </div>
  );
};

export default Contact;
