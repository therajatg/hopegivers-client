import logo from "../images/footer-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white flex justify-between py-5 px-5 sm:px-40">
      <div>
        <img src={logo} alt="" className="h-14" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro
            error at corrupti minus quidem rem temporibus fugit corporis
            officiis dolores voluptas, aperiam consequuntur accusantium illum
            cumque suscipit mollitia dolore deleniti iusto nemo tempore adipisci
            distinctio illo! Sit, obcaecati eaque!
          </p>
        </div>
      </div>
    </footer>
  );
};
