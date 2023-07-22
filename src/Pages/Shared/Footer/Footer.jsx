
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-gradient-to-r from-blue-500 to-white text-black">
      <div>
        <img
          className="w-1/6 rounded-lg animate-pulse"
          src="https://i.ibb.co/5hfPVJM/1.png"
          alt=""
        />
        <p className="font-bold">
          <span className="text-3xl">Campus Zone</span> <br />
          Providing reliable tech since 2000
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a className="hover:bg-white p-2 rounded-full" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              {/* Facebook icon path */}
            </svg>
          </a>
          <a className="hover:bg-white p-2 rounded-full" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              {/* Twitter icon path */}
            </svg>
          </a>
          <a className="hover:bg-white p-2 rounded-full" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              {/* Instagram icon path */}
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
