import React from 'react';
import {FiGithub,FiMail} from 'react-icons/fi';
import Mailto from 'mailto';
const Footer = () => {
    
    return (
      <div className="footer">
        <FiGithub
          title="Go to 0xCatbox Github"
          className="git"
          size={30}
          onClick={() => window.open("https://github.com/0xCatBox")}
        />
        <div className="footer_title">0xcatbox</div>
        <FiMail
        title="Contact"
          className="mail"
          size={30}
          onClick={() => window.open("Mailto:0xcatbox@gmail.com")}
        />
      </div>
    );
}

export default Footer;