import React, { useRef } from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import { Box, Typography, Container, Stack, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './Doctors.css'

const doctors = [
  {
    img: profile1,
    name: "Dr. Kathryn Murphy",
    title: "General Surgeon",
    stars: "4.9",
    reviews: "1800",
  },
  {
    img: profile2,
    name: "Dr. Jacob Jones",
    title: "Hematologist",
    stars: "4.8",
    reviews: "700",
  },
  {
    img: profile3,
    name: "Dr. Jenny Wilson",
    title: "Endocrinologist",
    stars: "4.7",
    reviews: "450",
  },
  {
    img: profile4,
    name: "Dr. Albert Flores",
    title: "Hematologist",
    stars: "4.8",
    reviews: "500",
  },
  {
    img: profile1,
    name: "Dr. Kathryn Murphy",
    title: "General Surgeon",
    stars: "4.9",
    reviews: "1800",
  },
  {
    img: profile1,
    name: "Dr. Kathryn Murphy",
    title: "General Surgeon",
    stars: "4.9",
    reviews: "1800",
  },
  {
    img: profile1,
    name: "Dr. Kathryn Murphy",
    title: "General Surgeon",
    stars: "4.9",
    reviews: "1800",
  },
  {
    img: profile1,
    name: "Dr. Kathryn Murphy",
    title: "General Surgeon",
    stars: "4.9",
    reviews: "1800",
  },
];

function Doctors() {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <Box className="doctor-section bg-white py-8 relative" id="doctors">
      <Container maxWidth="lg">
        <Box className="dt-title-content mb-16 text-center">
          <Typography variant="h3" component="h3" className="font-bold ">
            <span className="mb-4">Meet Our Doctors</span>
          </Typography>

          <Typography variant="body1" className="dt-description text-gray-700 ">
            Meet our exceptional team of specialist doctors, dedicated to providing top-notch healthcare services at Health Plus. Trust in their knowledge and experience to lead you towards a healthier and happier life.
          </Typography>
        </Box>
        <Box className="flex items-center">
          <IconButton
            onClick={() => scroll(-320)}
            color="primary"
            className="shadow-md h-9 w-9 bg-gray-900 rounded-full"
            sx={{ color: '#0b172b', zIndex: 10 }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </IconButton>

          <Box className="dt-cards-content overflow-x-auto relative  p-2" sx={{ whiteSpace: 'nowrap', position: 'relative' }} ref={scrollRef}>
            <Stack direction="row" spacing={2}>
              {doctors.map((doctor, index) => (
                <Box key={index} className="inline-block">
                  <DoctorCard
                    img={doctor.img}
                    name={doctor.name}
                    title={doctor.title}
                    stars={doctor.stars}
                    reviews={doctor.reviews}
                  />
                </Box>
              ))}
            </Stack>
          </Box>

          <IconButton
            onClick={() => scroll(320)}
            className="shadow-md h-9 w-9 bg-gray-900 rounded-full"
            sx={{ color: '#0b172b', zIndex: 10 }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Doctors;
