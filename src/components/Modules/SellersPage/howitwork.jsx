import React from "react";
import { FaUser, FaBuilding, FaBoxOpen, FaVideo } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    { 
      icon: <FaUser size={26} color="#0284C7" />, 
      title: "Create Your Seller Account", 
      desc: "Add your name and phone number to begin your journey.",
      bgColor: "#DBEAFE"
    },
    { 
      icon: <FaBuilding size={26} color="#16A34A" />, 
      title: "Add Your Business Details", 
      desc: "Enter store name, address, and email to set up profile.",
      bgColor: "#DCFCE7"
    },
    { 
      icon: <FaBoxOpen size={26} color="#9333EA" />, 
      title: "Upload Products or Services", 
      desc: "List at least 3 products or services for your showcase.",
      bgColor: "#F3E8FF"
    },
    { 
      icon: <FaVideo size={26} color="#EA580C" />, 
      title: "Start Selling via Videos", 
      desc: "Upload product reels or go live to engage buyers.",
      bgColor: "#FFEDD5"
    }
  ];

  return (
    <section className="how-it-workss">
      <h2>How It Works ?</h2>
      <p>Follow these quick steps to set up your seller profile and start showcasing your products today.</p>
      
      <div className="stepss">
        {steps.map((step, index) => (
          <div key={index} className="step-cards">
            <div className="steps-numbers">{index + 1}</div>
            <div className="iconss-circles" style={{ backgroundColor: step.bgColor }}>
              {step.icon}
            </div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}