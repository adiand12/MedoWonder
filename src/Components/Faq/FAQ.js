import React, { useState } from 'react';
import Accordion from './Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import bg_faq from '../../Assets/bg_faq.webp'

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const accordionItems = [
    {
      title: "How do I register as a patient on MedoWonder?",
      description: "To register as a patient on MedoWonder, visit our website and click on the 'Sign Up' button. Fill in your details, including your name, email, and contact information, and create a password. Once registered, you can access our medical services."
    },
    {
      title: "What medical services does MedoWonder offer?",
      description: "MedoWonder offers a wide range of medical services to patients, including telemedicine consultations, online prescription refills, appointment scheduling, health monitoring, and more. Our platform connects patients with qualified healthcare professionals for convenient and accessible healthcare."
    },
    {
      title: "How can I schedule a telemedicine appointment?",
      description: "To schedule a telemedicine appointment on MedoWonder, log in to your account and navigate to the 'Appointments' section. Choose a suitable date and time for your appointment and select your preferred healthcare provider. Once scheduled, you will receive confirmation details via email."
    },
    {
      title: "Is my personal information secure on MedoWonder?",
      description: "Yes, MedoWonder takes the privacy and security of patient information seriously. We use industry-standard encryption and security protocols to protect your personal and medical data. Our platform complies with all relevant healthcare privacy regulations to ensure the confidentiality of your information."
    },
    {
      title: "Can I request a prescription refill online?",
      description: "Yes, MedoWonder allows patients to request prescription refills online through our platform. Simply log in to your account, navigate to the 'Prescriptions' section, and follow the instructions to submit your refill request. Our healthcare providers will review your request and process it accordingly."
    },
    {
      title: "What payment methods are accepted on MedoWonder?",
      description: "MedoWonder accepts various payment methods for medical services, including credit/debit cards, PayPal, and online bank transfers. We also offer flexible payment options and insurance billing for eligible services. Please check our website for the latest information on accepted payment methods."
    },
    {
      title: "How can I contact customer support?",
      description: "If you have any questions or need assistance, you can contact MedoWonder customer support through our website or mobile app. Our support team is available 24/7 to assist you with any issues or concerns you may have. You can reach us via email, live chat, or phone."
    }
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-14 py-10 " style={{ backgroundImage: `url(${bg_faq})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
     <div className="text-center mb-6">
      <h2 className="text-3xl font-bold relative inline-flex items-center text-gray-300 ">
        <FontAwesomeIcon icon={faQuestionCircle} className="text-gray-300 mr-2 animate-bounce" />
        Frequently Asked Questions
      </h2>
    </div>
      <div className="space-y-4 md:w-[60%] sm:w-full">
        {accordionItems.map((item, i) => (
          <Accordion
            key={i}
            i={i}
            expanded={expanded}
            setExpanded={setExpanded}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;

