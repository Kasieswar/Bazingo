import React, { useState, useEffect } from "react";
import { FaUser, FaBuilding, FaBoxOpen, FaVideo } from "react-icons/fa";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setActiveStep(prev => (prev < 4 ? prev + 1 : 1));
      }, 800); // speed per step
    } else {
      setActiveStep(1); // reset when hover stops
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  const steps = [
    { icon: <FaUser size={26} color="#0284C7" />, title: "Create Your Seller Account", desc: "Add your name and phone number to begin your journey." },
    { icon: <FaBuilding size={26} color="#16A34A" />, title: "Add Your Business Details", desc: "Enter store name, address, and email to set up profile." },
    { icon: <FaBoxOpen size={26} color="#9333EA" />, title: "Upload Products or Services", desc: "List at least 3 products or services for your showcase." },
    { icon: <FaVideo size={26} color="#EA580C" />, title: "Start Selling via Videos", desc: "Upload product reels or go live to engage buyers." }
  ];

  return (
    <section
      className="how-it-work"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2>How It Works ?</h2>
      <p>Follow these quick steps to set up your seller profile and start showcasing your products today.</p>

      <div className="steps">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step-card ${activeStep === index + 1 ? "active" : ""}`}
          >
            <div className="step-number">{index + 1}</div>
            <div className="iconss-circle" style={{ backgroundColor: getStepColor(index) }}>
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

function getStepColor(index) {
  const colors = ["#DBEAFE", "#DCFCE7", "#F3E8FF", "#FFEDD5"];
  return colors[index];
}
