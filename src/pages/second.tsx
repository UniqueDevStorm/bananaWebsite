import React from "react";

const teams: Array<{
  name: string;
  period: string;
  link: string;
  description: string;
}> = [
  {
    name: "LuckyWild",
    period: "January 2019 - Present",
    link: "https://discord.gg/D6PyHum8",
    description: "홀리몰리홀리몰리"
  },
];

const Second: React.FC = () => (
  <div className='section'>
    <div className="text-left ml-40">
      <h1 className="font-bold text-5xl">Experience</h1>
      <div className="mt-16">
        {teams.map((x, y) => (
          <div key={y}>
            <h1 className="text-3xl font-medium">
              <a href={x.link}>{x.name} ({x.period})</a>
            </h1>
            <h2 className="text-xl font-medium mt-5">{x.description}</h2>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Second;