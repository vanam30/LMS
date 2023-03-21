import React from 'react'
import "../styles/style.css"
import homehero from "./img/home-hero.png"
import con1 from "./img/con1.svg"
import con2 from "./img/con2.svg"
import con4 from "./img/con4.svg"
import cate1 from "./img/cate1.png"
import cate2 from "./img/cate2.png"
import cate3 from "./img/cate3.png"
import course5 from "./img/course5.jpg"
import ms from "./img/microsoft-9541.svg"
import adobe from "./img/adobe.svg"
import cta4 from "./img/cta4.png"
import about from "./img/about.png"
import background from "./img/aboutbg.png"
import { FaDiscord, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Overview = () => {
  return (
    <div>
    <section className="home" id="home">
      <div className="home-text">
        <h6>Welcome to Shoppeal Tech</h6>
        <h2>Technology is just a tool unless allied with learning system</h2>
        <p>
          India's Top 10 E- Learning Startup Recognize by SiliconIndia StartUp
          City
        </p>
        <div className="latter">
          <form>
            <input type="search" placeholder="Explore courses" required />
            <input type="submit" value="Let's Start" required />
          </form>
        </div>
      </div>
      <div className="home-img">
        <img src={homehero} alt="img" />
      </div>
      </section>
        <section className="container">
          <div className="container-box">
            <div className="container-img">
              <img src="" alt=""/>
            </div>
            <div className="container-text">
              <h4>3000 mins</h4>
              <p>Totak Watch Time</p>
            </div>
          </div>

          <div className="container-box">
            <div className="container-img">
              <img src={con1} alt="" />
            </div>
            <div className="container-text">
              <h4>16</h4>
              <p>Courses Taken</p>
            </div>
          </div>

          <div className="container-box">
            <div className="container-img">
              <img src={con2} alt=""/>
            </div>
            <div className="container-text">
              <h4>9</h4>
              <p>Courses Completed</p>
            </div>
          </div>

          <div className="container-box">
            <div className="container-img">
              <img src={con4} alt=""/>
            </div>
            <div className="container-text">
              <h4>5/16</h4>
              <p>Assignments Done</p>
            </div>
          </div>
        </section>
        <section className="categories" id="categories">
          <div className="center-text">
            <h5>CATEGORIES</h5>
            <h2>Popular Categories</h2>
          </div>
          <div className="categories-content">
            <div className="box">
              <img src={cate1} alt="" />
              <h3>Web Development</h3>
              <p>5 Courses</p>
            </div>

            <div className="box">
              <img src={cate2} alt=""/>
              <h3>Android Development</h3>
              <p>5 Courses</p>
            </div>

            <div className="box">
              <img src={cate3} alt="" />
              <h3>Backend Development</h3>
              <p>5 Courses</p>
            </div>
            </div>
          </section>
          <section className="courses" id="courses">
            <div className="center-text">
              <h5>COURSES</h5>
              <h2>Explore Popular Courses</h2>
            </div>

            <div className="courses-content">
              <div className="row">
                <img src={course5} alt=""/>
                <div className="courses-text">
                  <h5>5000/-</h5>
                  <h3>Data Visualization with Seaborn</h3>
                  <h6>10hours</h6>
                  <div className="rating">
                    <div className="star">
                      <a href="/"><i className="bx bxs-star"></i></a>
                      <a href="/"><i className="bx bxs-star"></i></a>
                      <a href="/"><i className="bx bxs-star"></i></a>
                      <a href="/"><i className="bx bxs-star"></i></a>
                      <a href="/"><i className="bx bxs-star"></i></a>
                    </div>
                    <div className="review">
                      <p>19 Reviews</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <img src={course5} alt=""/>
                <div className="courses-text">
                  <h5>5000/-</h5>
                  <h3>The Complete Python Program</h3>
                  <h6>10 Hours</h6>
                  <div className="rating">
                    <div className="star">
                      <a href="/"><i className="bx bxs-star"></i></a>
                      <a href="/"><i className="bx bxs-star"></i></a>
                      <a href="/"><i className="bx bxs-star"></i></a>
                      <a href="/"><i className="bx bxs-star"></i></a>
                      <a href="/"><i className="bx bxs-star"></i></a>
                    </div>
                    <div className="review">
                      <p>15 Reviews</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <img src={course5} alt="" />
                <div className="courses-text">
                  <h5>7000/-</h5>
                  <h3>The Complete REACTJS Course</h3>
                  <h6>40 hours</h6>
                  <div className="rating">
                    <div className="star">
                      <a href="/"><i className="bx bxs-star"></i></a>
                      <a href="/"><i className="bx bxs-star"></i></a>
                      <a href="/"><i className="bx bxs-star"></i></a>
                      <a href="/"><i className="bx bxs-star"></i></a>
                      <a href="/"><i className="bx bxs-star"></i></a>
                    </div>
                    <div className="review">
                      <p>19 Reviews</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <img src={course5} alt="" />
                <div className="courses-text">
                  <h5>3000/-</h5>
                  <h3>The Complete HTML CSS JS Course 2023</h3>
                  <h6>20 Hours</h6>
                  <div className="rating">
                    <div className="star">
                      <a href="/"><i className="bx bxs-star"></i></a>
                      <a href="/"><i className="bx bxs-star"></i></a>
                      <a href="/"><i className="bx bxs-star"></i></a>
                      <a href="/"><i className="bx bxs-star"></i></a>
                      <a href="/"><i className="bx bxs-star"></i></a>
                    </div>
                    <div className="review">
                      <p>17 Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </section>

            <section className="cta">
              <div className="center-text">
                <h5>Trusted By</h5>
                <h2>Leading Companies</h2>
              </div>

              <div className="cta-content">
                <div className="cta-img">
                  <img src={cta4} alt=""/>
                </div>

                <div className="cta-img">
                  <img src={adobe} alt=""/>
                </div>

                <div className="cta-img">
                  <img src={ms} alt="" />
                </div>
              </div>
            </section>

            <section className="about" id="about">
              <div className="about-img">
                <img src={about} alt="" />
              </div>

              <div className="about-text" style={{ backgroundImage: `url(${background})` }}>
                <h2>Want to share your knowledge? Join us a Mentor</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  quidem
                  exercitationem soluta non praesentium repellendus voluptatem
                  impedit
                  sed autem dolor odit minima, optio commodi animi sint
                  veritatis!
                  Nobis, at minus.
                </p>
                <h4>Best Courses</h4>
                <h5>Top rated Instructors</h5>
                <a href="/" className="btn">Read More</a>
              </div>
            </section>

            <footer>
      <div className="container ">
        {/* 2nd column */}

        <div className="footer-contact">
          <h2>Services</h2>
          <p>Certifiaction Courses</p>
          <p>Placement Assistant</p>
          <p>Digital Marketing</p>
          <p>Training Program</p>
        </div>

        <div className="footer-subscribe">
          <h2>Subscribe to get important updates</h2>
          <form action="#">
            <input
              type="email"
              required
              autoComplete="off"
              placeholder="Email"
            />
            <input type="submit" value="Subscribe" />
          </form>
        </div>

        {/* 3rs column  */}
        <div className="footer-social">
          <h2>Follows Us</h2>
          <div className="footer-social--icons">
            <div>
              <a href=" https://w" target="_blank" rel="noreferrer">
                <FaDiscord className="icons" />
              </a>
            </div>
            <div>
              <a href=" https://w" target="_blank" rel="noreferrer">
                <FaInstagram className="icons" />
              </a>
            </div>
            <div>
              <a href=" https://w" target="_blank" rel="noreferrer">
                <FaTwitter className="icons" />
              </a>
            </div>
            <div>
              <a href="https://ww" target="_blank" rel="noreferrer">
                <FaLinkedin className="icons" />
              </a>
            </div>
          </div>
        </div>

        {/* 4th column  */}
        <div className="footer-contact">
          <h2>Connect with us</h2>
          <p>support@shoppealtech.com</p>
          <p>++91 7304663195</p>
          <p>Kalyan, Maharashtra - 421306</p>
          <p>UDYAM-MH-33-0152813</p>
        </div>
      </div>
     {/*  <div className="footer-bottom--section">
        <hr />
        <div className="container grid grid-two-column">
          <p>@{new Date().getFullYear()} Shoppeal Tech</p>
          <div>
            <p>PRIVACY POLICY ||TERMS & CONDITIONS</p>
          </div>
        </div>
      </div> */}
    </footer>
    </div>
  )
}
export default Overview;
