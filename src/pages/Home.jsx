import { Hero, Donate, WhatWeDo, LatestPics } from "../components";

export const Home = () => {
  return (
    <header className="flex flex-col">
      <Hero />
      <WhatWeDo />
      <Donate />
      <LatestPics />
    </header>
  );
};
