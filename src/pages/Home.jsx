import { Hero, Donate, WhatWeDo } from "../components";

export const Home = () => {
  return (
    <header className="flex flex-col">
      <Hero />
      <WhatWeDo />
      <Donate />
    </header>
  );
};
