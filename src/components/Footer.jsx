import React from "react";
import My from "../assets/Myimage.jpg";
import { SiStackoverflow, SiLinkedin, SiGithub, SiRadar } from "react-icons/si";
const Footer = () => {
  return (
    <footer>
      <div>
        <img src={My} alt="Founder" />

        <h2>Sangram Behera</h2>
        <p>Motivation is temporary,But discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a
            href="https://stackoverflow.com/users/21259779/rsan"
            target={"blank"}
          >
            <SiStackoverflow />
          </a>
          <a
            href="https://www.linkedin.com/in/sangram-behera-94614723a/"
            target={"blank"}
          >
            <SiLinkedin />
          </a>
          <a href="https://github.com/Rsangram007" target={"blank"}>
            <SiGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <SiRadar />
      </a>
    </footer>
  );
};

export default Footer;
