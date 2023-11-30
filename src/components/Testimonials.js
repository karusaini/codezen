// Testimonials.js
import React from "react";
import "./Testimonials.css";
import image1 from "../assets/user1.jpg";
import image2 from "../assets/user2.jpg";
import image3 from "../assets/user3.jpg";

const testimonials = [
  {
    name: "John Doe",
    position: "Web Developer",
    text: "Working with React.js has transformed the way I approach web development. It provides a powerful and efficient solution for building modern user interfaces.",
    image: image1,
  },
  {
    name: "Jane Smith",
    position: "UX Designer",
    text: "As a UX designer, React.js has given me the flexibility to create seamless and interactive user experiences. The component-based architecture is a game-changer.",
    image: image2,
  },
  {
    name: "Sam Johnson",
    position: "Full Stack Developer",
    text: "React.js has simplified state management and made it easier to build scalable applications. The vibrant community and extensive documentation are invaluable resources.",
    image: image3,
  },
];

const Testimonial = ({ name, position, text, image }) => (
  <div className="testimonial">
    <img src={image} alt={`${name}'s profile`} />
    <h3>{name}</h3>
    <p>{position}</p>
    <p className="testimonial-text">{text}</p>
  </div>
);

const Testimonials = () => (
  <div className="testimonials-section">
    <h2>Testimonials</h2>
    <div className="testimonials-container">
      {testimonials.map((testimonial, index) => (
        <Testimonial key={index} {...testimonial} />
      ))}
    </div>
  </div>
);

export default Testimonials;
