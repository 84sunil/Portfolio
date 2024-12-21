import React from "react";
import image from "../assets/images/sunil.jpg";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-pages">
      <div className="photo-img">
        <img src={image} alt="Sunil" />
      </div>
      <div className="text">
        <h1>
          Hello I Am <span className="highlight">Sunil Luhar</span>
        </h1>
        <h1>
          Front End <span className="highlight">Developer</span>
        </h1>
        <h2> I Am Freelancer </h2>
        <h2> You Can Hire Me </h2>
      </div>
      <div className="para-gp">
        <p>
          I am a passionate front-end developer with expertise in crafting
          visually appealing and user-friendly websites. With a strong
          foundation in HTML, CSS, and JavaScript, I specialize in creating
          responsive designs that work seamlessly across all devices. My focus
          is on delivering clean, efficient code and bringing creative concepts
          to life, ensuring both functionality and aesthetic appeal. Having
          worked on diverse projects, I understand the importance of meeting
          deadlines and tailoring solutions to client needs. Whether you're
          looking to build a new website or enhance an existing one, I’m here to
          turn your ideas into reality.
        </p>
      </div>
    </div>
  );
};

export default Home;
