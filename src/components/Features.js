import React from "react";
import "./Features.css";

const Feature = ({ icon, title, description }) => (
  <div className="feature">
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: "💬",
      title: "Declarative Syntax",
      description:
        "Write clean and intuitive code using React's declarative syntax. Express the structure of your UI effortlessly.",
    },
    {
      icon: "🧩",
      title: "Component-Based Architecture",
      description:
        "Break down your UI into reusable components. Encapsulate logic, ensuring a modular and maintainable codebase.",
    },

    {
      icon: "💻",
      title: "Responsive Web Applications",
      description:
        "Create responsive designs effortlessly. React makes it seamless to adapt your UI to different screen sizes.",
    },
  ];

  return (
    <div className="features-section">
      <h1>Features</h1>
      <h3>Enhancing Your Web Development with React.js</h3>
      <div className="features-container">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
