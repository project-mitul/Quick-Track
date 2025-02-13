import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import React from "react";
import "./AboutUs.css"; // Import the external CSS file

const teamMembers = [
  {
    name: "Bonnie Green",
    role: "CEO & Web Developer",
    description: "Bonnie drives the technical strategy of the Flowbite platform and brand.",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
  },
  {
    name: "Jese Leos",
    role: "CTO",
    description: "Jese drives the technical strategy of the Flowbite platform and brand.",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
  },
  {
    name: "Michael Gough",
    role: "Senior Front-end Developer",
    description: "Michael drives the technical strategy of the Flowbite platform and brand.",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png",
  },
  {
    name: "Lana Byrd",
    role: "Marketing & Sales",
    description: "Lana drives the technical strategy of the Flowbite platform and brand.",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/lana-byrd.png",
  },
];

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h2>Meet Our Team</h2>
        <p>We are a passionate team committed to innovation, excellence, and creating impactful solutions for a better future.</p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-image" />
            <div className="team-info">
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="description">{member.description}</p>
              <div className="social-icons">
                <FaTwitter className="icon twitter" />
                <FaLinkedin className="icon linkedin" />
                <FaGithub className="icon github" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="separator">
        <hr />
      </div>
    </div>
  );
};

export default AboutUs;
