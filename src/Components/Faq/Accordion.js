import React from 'react';
import { motion } from 'framer-motion';

const Accordion = ({ i, expanded, setExpanded, title, description }) => {
  const isOpen = i === expanded;

  const variants = {
    open: { height: 'auto', opacity: 1 },
    collapsed: { height: 0, opacity: 0 }
  };

  return (
    // <div className="border rounded-lg shadow-md overflow-hidden w-full">
    //   <motion.div
    //     className="cursor-pointer hover:bg-gray-100 p-4"
    //     onClick={() => setExpanded(isOpen ? false : i)}
        
    //   >
    //     <div className="flex justify-between items-center">
    //       <h3 className="text-lg font-semibold">{title}</h3>
    //       <svg
    //         className={`w-6 h-6 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //       >
    //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    //       </svg>
    //     </div>
    //   </motion.div>
    //   <motion.div
    //     className="bg-gray-50 overflow-hidden"
    //     initial="collapsed"
    //     animate={isOpen ? "open" : "collapsed"}
    //     variants={variants}
    //     transition={{ duration: 0.5, ease: "easeInOut" }}
    //   >
    //     <div className="p-4">
    //       <p>{description}</p>
    //     </div>
    //   </motion.div>
    // </div>
    <div className="border rounded-lg shadow-md overflow-hidden w-[80vw] mx-auto">
  <motion.div
    className="cursor-pointer hover:bg-gray-100 p-4 flex justify-between items-center
    bg-gradient-to-b from-[#5bc7df] to-[#242d3c] text-white"
    onClick={() => setExpanded(isOpen ? false : i)}
  >
    <h3 className="text-lg font-semibold">{title}</h3>
    <svg
      className={`w-6 h-6 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
    </svg>
  </motion.div>
  <motion.div
    className="bg-[#242d3c] overflow-hidden text-white"
    initial="collapsed"
    animate={isOpen ? "open" : "collapsed"}
    variants={variants}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    <div className="p-4">
      <p>{description}</p>
    </div>
  </motion.div>
</div>
  );
};

export default Accordion;
