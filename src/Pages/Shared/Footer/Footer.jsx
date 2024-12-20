import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="hero">
        <div className="w-full hero-content bg-black flex-col lg:flex-row">
          <div className="w-1/2 text-center">
            <h1 className="text-5xl font-bold">Contact Us</h1>
            <p className="py-6">
              {" "}
              10127 Via Nizza 360, To, Italy <br />
              +39 123456789 <br />
              Mon - Fri: 08:00 - 22:00 <br />
              Sat - Sun: 10:00 - 23:00
            </p>
          </div>
          <div className="w-1/2">
            <h1 className="text-5xl font-bold">Follow Us</h1>
            <p className="py-6">Join Us In Social Media</p>
            <div className="flex text-3xl space-x-10">
              <FaFacebookSquare />
              <FaInstagram />
              <FaX />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-base-300 footer footer-center text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Bistro Industries Ltd
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
