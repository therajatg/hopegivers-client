import heroImage from "../images/hero.jpeg";

export const Hero = () => {
  return (
    <section className="hero">
      <img
        src={heroImage}
        alt="houses on the water"
        className="w-full object-cover"
      />
    </section>
  );
};
