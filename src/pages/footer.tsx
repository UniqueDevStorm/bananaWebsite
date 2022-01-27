import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="section fp-auto-height bg-[#212327]">
      <div className="flex justify-between p-10">
        <div className='flex gap-5'>
          <a href='https://discord.gg/D6PyHum8'>
            <FontAwesomeIcon icon={["fab", "discord"]} size='2x' />
          </a>
          <a href='https://github.com/milk0616'>
            <FontAwesomeIcon icon={["fab", "github"]} size='2x' />
          </a>
          <a href='mailto:banana@luckyfarm.pro'>
            <FontAwesomeIcon icon={["fas", "envelope"]} size='2x' />
          </a>
        </div>
        <h1 className='font-light'>Copyright &copy; {new Date().getFullYear()} banana All rights reserved.</h1>
        <h1 className='font-light'>banana@luckyfarm.pro</h1>
      </div>
    </div>
  );
};

export default Footer;
