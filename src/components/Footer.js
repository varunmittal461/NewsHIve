import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer>
        <div className="container">
          <div className="FooterIcon" data-name="Facebook">
            <i class="fa-brands fa-square-facebook"></i>
          </div>
          <div className="FooterIcon" data-name="Instagram">
            <i class="fa-brands fa-square-instagram"></i>
          </div>
          <div className="FooterIcon" data-name="Linkedin">
            <i class="fa-brands fa-linkedin"></i>
          </div>
          <div className="FooterIcon" data-name="Mail">
            <i class="fa-solid fa-envelope"></i>
          </div>
          <div className="FooterIcon" data-name="Twitter">
            <i class="fa-brands fa-square-twitter"></i>
          </div>
        </div>
      </footer>
      <div className="legal">
        <div className="container flexSB ">
          <p>
            Copyright&copy;&nbsp;{year}&nbsp;NewsHive.&nbsp;All rights reserved.
          </p>
        </div>
        <div className="container">
          <p>Privacy Policy | Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
