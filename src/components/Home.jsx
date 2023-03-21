import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import Footer from "./Footer";
import './home.css';
const Home = () => {
  return (
    <>
      <div className="homee" id="homee">
        <main>
          <h1>WELCOME TO SHOPPEAL TECH</h1>
        </main>
      </div>

      <div className="homee2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Shoppeal is a well-known digital startup firm founded in 2021 that
            provides students with career-relevant tech programs and companies
            with IT services at affordable prices.To cater to this growing
            demand, Shop- peal is focusing on developing customized learning
            solutions. The firm has envisioned a bright future for students
            globally by delivering highly flexible, attrac- tive, and effective
            learning solutions. Shoppeal has ex- panded its offering which
            includes Shoppeal eLearning, Shoppeal (VIP), and Shoppeal Delight.
            It is an officially MSME-registered startup that offers
            career-relevant programs for students and IT services.
          </p>
        </div>
      </div>

      <div className="homee3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Shoppeal is a well-known digital startup firm found- ed in 2021 that
            provides students with career-relevant tech programs and companies
            with IT services at af- fordable prices. To cater to this growing
            demand, Shop- peal is focusing on developing customized learning
            solutions. The firm has envisioned a bright future for students
            globally by delivering highly flexible, attrac- tive, and effective
            learning solutions. Shoppeal has ex- panded its offering which
            includes Shoppeal eLearning, Shoppeal (VIP), and Shoppeal Delight.
            It is an officially MSME-registered startup that offers
            career-relevant programs for students and IT services. “We firmly
            be- lieve in making our youth, especially the students self- aware
            by exploring the untouched world of technology and tremendous
            growth-making fields”, says Sudhans- hu Singh, Founder & CEO,
            Shoppeal.
          </p>
        </div>
      </div>
      <div className="homee4" id="brands">
        <div>
          <h1>Partners</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillLinkedin />
              <p>Linkedin</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
