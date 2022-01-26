import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

const Home: React.FC = () => {
  return (
    <ReactFullpage
      licenseKey="OPEN-SOURCE-GPLv3-LICENSE"
      render={() => (
        <div className='text-center bg-black'>
          <div className='section'>
              <div className='flex'>
                  <h1 className='text-4xl font-light text-transparent bg-clip-text bg-gradient-to-br from-indigo-300 to-emerald-300'>My name is banana!</h1>
                  <img src='https://media.discordapp.net/attachments/935880146580295690/935883483098791936/1639653591409.png' alt='' />
              </div>
          </div>
        </div>
      )}
    />
  );
};

export default Home;
