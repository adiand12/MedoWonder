import React from 'react';
import medrec from '../../Assets/medrec.jpg'
import appointment from '../../Assets/appontment.jpg'
import onlinepharma from '../../Assets/onlinepharma.jpg'
import expertconsult from '../../Assets/expertconsult.jpg'


const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center m-4">
    <div className="flex justify-center items-center bg-white rounded-full  shadow-lg mb-4">
      <img src={icon} alt={title} className=" w-20 h-20 object-cover rounded-full" />
    </div>
    <h3 className="text-lg font-semibold mb-2 text-gray-100">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: appointment,
      title: 'Online Appointments',
      description: 'Book your medical appointments online easily and at your convenience with MedWander.',
    },
    {
      icon: expertconsult,
      title: 'Expert Consultations',
      description: 'Get consultations from top medical experts across various specializations.',
    },
    {
      icon: onlinepharma,
      title: 'Online Pharmacy',
      description: 'Order medicines online and get them delivered to your doorstep promptly.',
    },
    {
      icon: medrec,
      title: 'Digital Medical Records',
      description: 'Access and manage your medical records securely from anywhere at any time.',
    },
  ];

  return (
    <div className="flex flex-col items-center p-8 px-12  bg-gray-800">
      <div className="bg-gray-200 text-gray-800 text-center p-8 rounded-full shadow-lg mb-8 w-full lg:w-3/5">
        <h2 className="text-3xl font-bold mb-4">MedWander Services</h2>
        <p className='font-semibold'>
        At MedWander, we offer a range of medical services to cater to your healthcare needs. Experience quality and professionalism with our top-notch medical solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
