import React, { useState } from 'react';
import {
  FaBrain,
  FaBone,
  FaRibbon,
  FaSmile,
  FaStethoscope,
  FaEye,
  FaTooth,
  FaBaby,
  FaDumbbell,
  FaWeight,
  FaLungs,
  FaUserMd,
  FaTransgender,
  FaCapsules,
  FaCommentMedical
} from 'react-icons/fa';
import { GiKidneys, GiHeartOrgan, GiLiver } from 'react-icons/gi';

const medicalAreas = [
  { icon: <FaBrain />, label: 'Brain / Neuro' },
  { icon: <FaBone />, label: 'Bone Marrow' },
  { icon: <FaRibbon />, label: 'Cancer' },
  { icon: <FaSmile />, label: 'Cosmetics' },
  { icon: <FaStethoscope />, label: 'ENT' },
  { icon: <FaEye />, label: 'Eye' },
  { icon: <GiHeartOrgan />, label: 'Heart' },
  { icon: <FaTooth />, label: 'Hair' },
  { icon: <FaUserMd />, label: 'Prostatitis' },
  { icon: <FaBaby />, label: 'Infertility (IVF)' },
  { icon: <FaCommentMedical />, label: 'Intestine' },
  { icon: <GiKidneys />, label: 'Kidney' },
  { icon: <FaDumbbell />, label: 'Ortho' },
  { icon: <FaLungs />, label: 'Lungs' },
  { icon: <GiLiver />, label: 'Liver' },
  { icon: <FaWeight />, label: 'Obesity' },
  { icon: <FaTransgender />, label: 'Spine' },
  { icon: <FaCapsules />, label: 'Others or Unknown' }
];

const hospitalsData = {
  'Brain / Neuro': [
    { name: 'Brain Hospital A', location: 'Location A' },
    { name: 'Brain Hospital B', location: 'Location B' },
  ],
  'Bone Marrow': [
    { name: 'Bone Hospital A', location: 'Location A' },
    { name: 'Bone Hospital B', location: 'Location B' },
  ],
  // Add similar data for other medical areas
  // ...
};

const MedicalAreaSelection = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedArea, setSelectedArea] = useState(null);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 8);
  };

  const handleAreaClick = (areaLabel) => {
    setSelectedArea(areaLabel);
  };

  return (
    <div className="text-center p-8">
      <h2 className="text-3xl font-bold mb-6">Book Your Appointment</h2>
      <h3 className="text-xl mb-8">Select your area of medical problem</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {medicalAreas.slice(0, visibleCount).map((area, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg bg-blue-100 hover:bg-blue-200 transition transform hover:scale-105 cursor-pointer"
            onClick={() => handleAreaClick(area.label)}
          >
            <div className="text-5xl mb-2 text-blue-900">{area.icon}</div>
            <div className="text-sm font-semibold text-gray-700">{area.label}</div>
          </div>
        ))}
      </div>
      {visibleCount < medicalAreas.length && (
        <button
          onClick={handleLoadMore}
          className="mt-8 px-4 py-2 bg-blue-900 text-white font-bold rounded-lg hover:bg-white border-2 border-blue-900 hover:text-blue-900"
        >
          Load More
        </button>
      )}
      {selectedArea && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Best Hospitals for {selectedArea}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitalsData[selectedArea]?.map((hospital, index) => (
              <div key={index} className="p-4 rounded-lg bg-white shadow-md">
                <h4 className="text-xl font-bold">{hospital.name}</h4>
                <p className="text-gray-600">{hospital.location}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicalAreaSelection;
