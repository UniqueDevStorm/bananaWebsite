import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

const pages = [
  require("./pages/first"),
  require("./pages/second"),
  require("./pages/footer"),
];

const Home: React.FC = () => (
  <ReactFullpage
    licenseKey="OPEN-SOURCE-GPLv3-LICENSE"
    render={() => (
      <div className="text-center bg-[#36393f] text-white">
        {pages.map((x, y) => (
          <x.default key={y} />
        ))}
      </div>
    )}
  />
);

export default Home;
