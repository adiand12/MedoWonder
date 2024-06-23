// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "../Styles/AppointmentForm.css";
// import { ToastContainer, toast } from "react-toastify";

// function AppointmentForm() {
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   });

//   const [patientName, setPatientName] = useState("");
//   const [patientNumber, setPatientNumber] = useState("");
//   const [patientGender, setPatientGender] = useState("default");
//   const [appointmentTime, setAppointmentTime] = useState("");
//   const [preferredMode, setPreferredMode] = useState("default");
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [formErrors, setFormErrors] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate form inputs
//     const errors = {};
//     if (!patientName.trim()) {
//       errors.patientName = "Patient name is required";
//     } else if (patientName.trim().length < 8) {
//       errors.patientName = "Patient name must be at least 8 characters";
//     }

//     if (!patientNumber.trim()) {
//       errors.patientNumber = "Patient phone number is required";
//     } else if (patientNumber.trim().length !== 10) {
//       errors.patientNumber = "Patient phone number must be of 10 digits";
//     }

//     if (patientGender === "default") {
//       errors.patientGender = "Please select patient gender";
//     }
//     if (!appointmentTime) {
//       errors.appointmentTime = "Appointment time is required";
//     } else {
//       const selectedTime = new Date(appointmentTime).getTime();
//       const currentTime = new Date().getTime();
//       if (selectedTime <= currentTime) {
//         errors.appointmentTime = "Please select a future appointment time";
//       }
//     }
//     if (preferredMode === "default") {
//       errors.preferredMode = "Please select preferred mode";
//     }

//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       return;
//     }

//     // Reset form fields and errors after successful submission
//     setPatientName("");
//     setPatientNumber("");
//     setPatientGender("default");
//     setAppointmentTime("");
//     setPreferredMode("default");
//     setFormErrors({});

//     toast.success("Appointment Scheduled !", {
//       position: toast.POSITION.TOP_CENTER,
//       onOpen: () => setIsSubmitted(true),
//       onClose: () => setIsSubmitted(false),
//     });
//   };

//   return (
//     <div className="appointment-form-section">
//       <h1 className="legal-siteTitle">
//         <Link to="/">
//           Health <span className="legal-siteSign">+</span>
//         </Link>
//       </h1>

//       <div className="form-container">
//         <h2 className="form-title">
//           <span>Book Appointment Online</span>
//         </h2>

//         <form className="form-content" onSubmit={handleSubmit}>
//           <label>
//             Patient Full Name:
//             <input
//               type="text"
//               value={patientName}
//               onChange={(e) => setPatientName(e.target.value)}
//               required
//             />
//             {formErrors.patientName && <p className="error-message">{formErrors.patientName}</p>}
//           </label>

//           <br />
//           <label>
//             Patient Phone Number:
//             <input
//               type="text"
//               value={patientNumber}
//               onChange={(e) => setPatientNumber(e.target.value)}
//               required
//             />
//             {formErrors.patientNumber && <p className="error-message">{formErrors.patientNumber}</p>}
//           </label>

//           <br />
//           <label>
//             Patient Gender:
//             <select
//               value={patientGender}
//               onChange={(e) => setPatientGender(e.target.value)}
//               required
//             >
//               <option value="default">Select</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="private">I will inform Doctor only</option>
//             </select>
//             {formErrors.patientGender && <p className="error-message">{formErrors.patientGender}</p>}
//           </label>

//           <br />
//           <label>
//             Preferred Appointment Time:
//             <input
//               type="datetime-local"
//               value={appointmentTime}
//               onChange={(e) => setAppointmentTime(e.target.value)}
//               required
//             />
//             {formErrors.appointmentTime && <p className="error-message">{formErrors.appointmentTime}</p>}
//           </label>

//           <br />
//           <label>
//             Preferred Mode:
//             <select
//               value={preferredMode}
//               onChange={(e) => setPreferredMode(e.target.value)}
//               required
//             >
//               <option value="default">Select</option>
//               <option value="voice">Voice Call</option>
//               <option value="video">Video Call</option>
//             </select>
//             {formErrors.preferredMode && <p className="error-message">{formErrors.preferredMode}</p>}
//           </label>

//           <br />
//           <button type="submit" className="text-appointment-btn">
//             Confirm Appointment
//           </button>

//           <p className="success-message" style={{display: isSubmitted ? "block" : "none"}}>Appointment details has been sent to the patients phone number via SMS.</p>
//         </form>
//       </div>

//       <div className="legal-footer">
//         <p>© MedWander. All rights reserved.</p>
//       </div>

//       <ToastContainer autoClose={5000} limit={1} closeButton={false} />
//     </div>
//   );
// }

// export default AppointmentForm;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'tailwindcss/tailwind.css';
import doctorImage from '../Assets/doctor.webp'; // Adjust the path as needed

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!patientName.trim()) {
      errors.patientName = "Patient name is required";
    } else if (patientName.trim().length < 8) {
      errors.patientName = "Patient name must be at least 8 characters";
    }

    if (!patientNumber.trim()) {
      errors.patientNumber = "Patient phone number is required";
    } else if (patientNumber.trim().length !== 10) {
      errors.patientNumber = "Patient phone number must be of 10 digits";
    }

    if (patientGender === "default") {
      errors.patientGender = "Please select patient gender";
    }
    if (!appointmentTime) {
      errors.appointmentTime = "Appointment time is required";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please select a future appointment time";
      }
    }
    if (preferredMode === "default") {
      errors.preferredMode = "Please select preferred mode";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setPatientName("");
    setPatientNumber("");
    setPatientGender("default");
    setAppointmentTime("");
    setPreferredMode("default");
    setFormErrors({});

    toast.success("Appointment Scheduled!", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div>
    <h1 className="flex justify-center text-4xl font-bold py-2 h-[8vh] ">
    <Link to="/" className="text-primary">
      Med <span className="text-secondary">Wander</span>
    </Link>
  </h1>
    <div className="h-[92vh] overflow-y-auto flex lg:flex-row items-center bg-gray-200 w-full">
     
      <div className="w-full  flex justify-center items-center h-full py-8 px-4">
     
        <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6 flex-col">
          
          <h2 className="text-2xl font-semibold text-center mb-6">
            Book Appointment Online
          </h2>
          

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Patient Full Name:
              </label>
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
              {formErrors.patientName && (
                <p className="text-red-500 text-sm mt-1">{formErrors.patientName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Patient Phone Number:
              </label>
              <input
                type="text"
                value={patientNumber}
                onChange={(e) => setPatientNumber(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
              {formErrors.patientNumber && (
                <p className="text-red-500 text-sm mt-1">{formErrors.patientNumber}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Patient Gender:
              </label>
              <select
                value={patientGender}
                onChange={(e) => setPatientGender(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              >
                <option value="default">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="private">I will inform Doctor only</option>
              </select>
              {formErrors.patientGender && (
                <p className="text-red-500 text-sm mt-1">{formErrors.patientGender}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Preferred Appointment Time:
              </label>
              <input
                type="datetime-local"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
              {formErrors.appointmentTime && (
                <p className="text-red-500 text-sm mt-1">{formErrors.appointmentTime}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Preferred Mode:
              </label>
              <select
                value={preferredMode}
                onChange={(e) => setPreferredMode(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              >
                <option value="default">Select</option>
                <option value="voice">Voice Call</option>
                <option value="video">Video Call</option>
              </select>
              {formErrors.preferredMode && (
                <p className="text-red-500 text-sm mt-1">{formErrors.preferredMode}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
            >
              Confirm Appointment
            </button>

            <p
              className="text-green-500 text-center mt-4"
              style={{ display: isSubmitted ? "block" : "none" }}
            >
              Appointment details have been sent to the patient's phone number via SMS.
            </p>
          </form>
          
        </div>

        <div className="hidden lg:block lg:w-1/3 h-full">
        <img src={doctorImage} alt="Doctor" className="w-full h-full object-cover" />
      </div>

      </div>

      <footer className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-500">
        <p>© MedWander. All rights reserved.</p>
      </footer>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
    </div>
  );
}

export default AppointmentForm;
