import logo from "../images/footer-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white flex flex-col sm:flex-row sm:justify-between items-center sm:items-start py-5 px-5 lg:px-40 gap-y-12 gap-x-12">
      <div className="max-w-sm">
        <img src={logo} alt="" className="h-14" />
        <p className="text-clip">
          Hope Givers Foundation is a social, cultural, economic and rural /
          urban community development organization geared towards the
          development of weaker section of the society and is registered in the
          year 2022 as a charitable trust in Jaipur, Rajasthan. <br />
          Reg.No: 202201024004756 <br />
          80G Reg.No: AACTH6216KF20221
          <br />
          CSR Reg.No: CSR00032050
        </p>
      </div>
      <div className="max-w-sm">
        <h1 className="text-l font-bold">Contact</h1>
        <div className="flex gap-x-2 align-top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 text-green-600"
          >
            <path
              fillRule="evenodd"
              d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
              clipRule="evenodd"
            />
          </svg>
          <span>Shop No.12, Laxmi Narayan Puri, Sumer Road, Jaipur</span>
        </div>
        <div className="flex gap-x-2 align-top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 text-green-600"
          >
            <path
              fillRule="evenodd"
              d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
              clipRule="evenodd"
            />
          </svg>
          <span>9602034848</span>
        </div>
        <div className="flex gap-x-2 align-top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 text-green-600"
          >
            <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
            <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
          </svg>
          <span> hopegiversfoundation99@gmail.com</span>
        </div>
      </div>
    </footer>
  );
};
