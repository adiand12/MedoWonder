import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import MedicalForm from "./Form";
import Doctor from "../../Assets/doctor-picture.png"; // Adjust the path as needed
import TopBar from "../Navbar/TopBar";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion"; // For animations
import "./hero.css"; 

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" flex flex-col justify-center items-center gap-6 px-8"
      style={{ background: 'radial-gradient(circle, #14adcc, #242d3c)' }}
    >
      <div className=" flex flex-col justify-center items-center gap-6 px-8">
        <div className="lg:flex lg:flex-row gap-6 w-full p-4">
          <div className="lg:w-3/5 w-full mt-4 relative  bg-center text-center lg:text-left background-container">
            <div className="background-overlay w-full h-full absolute top-0 left-0"></div>
            <div className="relative flex flex-col justify-center h-full p-8">
              <div className="flex justify-center lg:justify-start items-center mb-6">
                <p className="mr-4 text-3xl font-rubik font-bold animated-heart">❤️</p>
                <span className="text-3xl font-rubik font-bold text-white">Health comes first</span>
              </div>
              <h2 className="text-2xl font-poppins font-bold sm:text-lg text-white">
                Find your Doctor and make an Appointment
              </h2>
              <p className="my-8 text-base font-rubik tracking-wide leading-7 sm:text-sm text-gray-200">
                Talk to online doctors and get medical advice, online prescriptions,
                refills, and medical notes within minutes. On-demand healthcare
                services at your fingertips.
              </p>
              <div className="w-full p-4 rounded-lg flex items-center justify-around bg-gray-900/80">
                <div className="text-center">
                  <p className="text-blue-600 text-2xl font-rubik font-bold mb-2">145k+</p>
                  <p className="text-lg font-poppins tracking-wide sm:text-sm text-gray-200">Receive Patients</p>
                </div>
                <div className="text-center">
                  <p className="text-blue-600 text-2xl font-rubik font-bold mb-2">50+</p>
                  <p className="text-lg font-poppins tracking-wide sm:text-sm text-gray-200">Expert Doctors</p>
                </div>
                <div className="text-center">
                  <p className="text-blue-600 text-2xl font-rubik font-bold mb-2">10+</p>
                  <p className="text-lg font-poppins tracking-wide sm:text-sm text-gray-200">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 w-full text-center  lg:mt-0 relative z-10 flex justify-center items-center">
            <MedicalForm />
          </div>
        </div>
      </div>

      <motion.div
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }} // Animate on hover
        className={`scroll-up w-11 h-11 flex items-center justify-center text-white border-3 border-white rounded-full bg-gray-700 fixed bottom-12 right-12 text-2xl z-20 cursor-pointer transition-all duration-400 ${
          goUp ? "flex" : "hidden"
        } sm:bottom-8 sm:right-8`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </motion.div>
    </motion.div>
  );
}

export default Hero;


{/* <div className="lg:w-4/6 text-center lg:text-left relative   background-container ">
          <div className="background-overlay h-full w-full"></div>
          <div className="flex justify-center lg:justify-start">
            <p className="mb-3 mr-4 text-3xl font-rubik font-bold animated-heart">
              ❤️
            </p>
            <span className="mb-3 text-3xl font-rubik font-bold">
              Health comes first
            </span>
          </div>
          <h2 className="text-2xl font-poppins font-bold sm:text-lg">
            Find your Doctor and make an Appointments
          </h2>
          <p className="my-8 text-base font-rubik tracking-wide leading-7 sm:text-sm">
            Talk to online doctors and get medical advice, online prescriptions,
            refills and medical notes within minutes. On-demand healthcare
            services at your fingertips.
          </p>

          <div className="mt-10 flex items-center justify-center lg:justify-start gap-12 sm:gap-4">
            <div className="text-stats-container text-center">
              <p className="text-blue-600 text-2xl font-rubik font-bold mb-2">
                145k+
              </p>
              <p className="text-lg font-poppins tracking-wide sm:text-sm">
                Receive Patients
              </p>
            </div>

            <div className="text-center">
              <p className="text-blue-600 text-2xl font-rubik font-bold mb-2">
                50+
              </p>
              <p className="text-lg font-poppins tracking-wide sm:text-sm">
                Expert Doctors
              </p>
            </div>

            <div className="text-center">
              <p className="text-blue-600 text-2xl font-rubik font-bold mb-2">
                10+
              </p>
              <p className="text-lg font-poppins tracking-wide sm:text-sm">
                Years of Experience
              </p>
            </div>
          </div>
        </div> */}