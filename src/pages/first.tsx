import React from "react";

import Profile from "../assets/profile.png";

const buttons: Array<{
  text: string;
  link: string;
}> = [
  {
    text: "Discord",
    link: "https://discord.gg/D6PyHum8"
  },
  {
    text: "Github",
    link: "https://github.com/milk0616"
  },
  {
    text: "Email",
    link: "mailto:banana@luckyfarm.pro"
  },
]

const First: React.FC = () => (
  <div className='section'>
    <img src={Profile} alt="" className="w-[300px] h-[300px] mx-auto" />
    <h1 className="text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-emerald-300">
      My name is banana!
    </h1>
    <div className='mt-8 flex justify-center gap-5'>
      {
        buttons.map((x, y) => (
          <div key={y}>
            <a href={x.link}>
              <button className='bg-white hover:text-yellow-300 hover:drop-shadow-2xl duration-500 w-[170px] h-[50px] rounded-full text-black font-bold text-xl'>
                {x.text}
              </button>
            </a>
          </div>
        ))
      }
    </div>
  </div>
);

export default First;