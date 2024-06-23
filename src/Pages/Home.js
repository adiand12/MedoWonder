import React from "react";
import Hero from "../Components/Hero/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
// import Reviews from "../Components/Reviews";
import Doctors from "../Doctor/Doctors";
import Footer from "../Components/Footer";
import HospitalRecommendation from "../Components/HospitalReccomender/HospitalReccomendation";
import ReviewList from "../Components/Reviews/ReviewList";
import FAQ from "../Components/Faq/FAQ";
import Navbar from "../Components/Navbar/Navbar";
import TopBar from "../Components/Navbar/TopBar";
import MedicalAreaSelection from "../Components/MedicalAreaSelection/MedicalAreaSelection";
import WhyChoose from "../Components/WhyChoose/WhyChoose";
import BookAppointmentButton from "../Components/StickyButton";
// import ReviewHeader from "../Components/Reviews/ReviewHeader";
import Statistics from '../Components/Statistics';

function Home() {
  return (
    <div className="home-section">
      <TopBar />
      <Navbar />
      <Hero />
      {/* <Info /> */}
      <About />
      <WhyChoose />
      <MedicalAreaSelection />
      <ReviewList />
      <FAQ />
      <Statistics />
      {/* <BookAppointment /> */}
      <HospitalRecommendation />
      <Doctors />
      <Footer />
      <BookAppointmentButton />
    </div>
  );
}

export default Home;
