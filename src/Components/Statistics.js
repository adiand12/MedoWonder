// import React from 'react';

// const Statistics = () => {
//   return (
//     <div className="text-center p-6 bg-gray-50">
//       <div className="flex justify-around mb-6">
//         <div className="flex flex-col items-center">
//           <div className="text-4xl mb-2">🏥</div>
//           <div className="text-2xl font-bold">400+</div>
//           <div className="text-lg">Top Class Hospitals</div>
//         </div>
//         <div className="flex flex-col items-center">
//           <div className="text-4xl mb-2">👨‍⚕️</div>
//           <div className="text-2xl font-bold">7000+</div>
//           <div className="text-lg">Experienced Doctors</div>
//         </div>
//         <div className="flex flex-col items-center">
//           <div className="text-4xl mb-2">❤️</div>
//           <div className="text-2xl font-bold">25000+</div>
//           <div className="text-lg">Patients Assisted</div>
//         </div>
//       </div>
//       <div className="border border-gray-300 p-4 bg-white mb-6">
//         Our services are <strong>FREE</strong> and by using our services your hospital bill does not increase!
//         <br />
//         <strong>25000+ patients from 105+ countries</strong> have trusted Vaidam
//       </div>
//       <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
//         Contact Us Now
//       </button>
//     </div>
//   );
// };

// export default Statistics;

import React from 'react';

const Statistics = () => {
  return (
    <div className=" mt-8 text-center p-10 bg-gray-100">
      <div className="flex flex-col md:flex-row justify-evenly mb-6">
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <div className="text-4xl text-blue-500 mb-2">🏥</div>
          <div className="text-2xl font-bold text-blue-500">400+</div>
          <div className="text-lg">Top Class Hospitals</div>
        </div>
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <div className="text-4xl text-blue-500 mb-2">👨‍⚕️</div>
          <div className="text-2xl font-bold text-blue-500">7000+</div>
          <div className="text-lg">Experienced Doctors</div>
        </div>
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <div className="text-4xl text-blue-500 mb-2">❤️</div>
          <div className="text-2xl font-bold text-blue-500">25000+</div>
          <div className="text-lg">Patients Assisted</div>
        </div>
      </div>
      <div className="mt-9 text-2xl border-2 border-gray-600 py-20 px-4 bg-gray-300 rounded-lg mb-6 mx-auto max-w-4xl">
        Our services are <strong>FREE</strong> and by using our services your hospital bill does not increase!
        <br />
        <strong className="text-blue-500">25000+ patients from 105+ countries</strong> have trusted Medwander
      </div>
      <button className="bg-red-500 text-white py-4 px-8 rounded hover:bg-red-700">
        Contact Us Now
      </button>
    </div>
  );
};

export default Statistics;

