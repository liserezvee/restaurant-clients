import { Helmet } from "react-helmet-async";
import img from "../../assets/contact/banner.jpg";
import Cover from "../Shared/Cover/Cover";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaPhoneVolume } from "react-icons/fa6";
import { WiTime3 } from "react-icons/wi";
import { FaMapMarker } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="mb-6">
      <Helmet>
        <title>Bistro Boss | Contact Us</title>
      </Helmet>
      <Cover img={img} title="Contact Us"></Cover>
      {/*main cover*/}
      <SectionTitle subHeading="visit us" heading="our location"></SectionTitle>
      <div className="">
        <div className="card text-primary-content items-center w-full p-10  grid md:grid-cols-3 gap-6 justify-evenly">
          <div className="card-body border items-center text-center w-auto h-40">
            <FaPhoneVolume />

            <h2 className="card-title">Phone</h2>
            <p>+39 3512391785</p>
          </div>
          <div className="card-body border items-center text-center h-40">
            <FaMapMarker />

            <h2 className="card-title">Address</h2>
            <p>Milano, Italy</p>
          </div>
          <div className="card-body border items-center text-center h-40">
            <WiTime3 />

            <h2 className="card-title">Woriking Hours</h2>
            <p>
              Mon - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
            </p>
          </div>
        </div>
      </div>
      <SectionTitle
        subHeading="send us a message"
        heading="contact form"
      ></SectionTitle>
      <div className="hero bg-white">
        <div className="hero-content  w-full ">
          <div className="card w-full  shadow-2xl">
            <form className="card-body  w-full">
              <div className="flex gap-2">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text text-black">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered bg-slate-50"
                    required
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text text-black">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered bg-slate-50"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black bg-slate-50">Phone</span>
                </label>
                <input
                  type="number"
                  placeholder="number"
                  className="input input-bordered bg-slate-50"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black bg-slate-50">Message</span>
                </label>
                <textarea
                  className="input input-bordered h-80 bg-slate-50"
                  name="message"
                  id=""
                  type="text"
                ></textarea>
              </div>
              <div className="form-control mt-6 w-full items-center">
                <input
                  className="btn bg-orange-300 text-black font-bold"
                  type="submit"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
