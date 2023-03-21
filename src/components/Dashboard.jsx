import React from 'react'
import "./dashboard.css"
/* import 'react-calendar/dist/Calendar.css' */
import { useState } from 'react';
/* import { PieChart } from 'react-minimal-pie-chart'; */
import Calendar from 'react-calendar';
import home from "./img/home.png"
import teacher1 from "./img/teacher-1.png"
import teacher2 from "./img/teacher-2.png"
import teacher3 from "./img/teacher-3.png"
import teacher4 from "./img/teacher-4.png"
import course5 from "./img/course5.jpg"
const Dashboard = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>

            <div className="cont">
                <headerr>
                    <div id="menu" className="fas fa-bars" />
                    <nav className="navbar">
                        <a href="/course">Course</a>
                        <a href="/teacher">Teacher</a>
                        <a href="https://www.igs-group-education.com/actualit%C3%A9/important-announcement-students-and-teachers-coronavirus-covid-19">announcement</a>
                        <a href="https://support.google.com/edu/classroom/answer/6020265?hl=en&co=GENIE.Platform%3DDesktop">assesement</a>
                        <a href="/review">Review</a>
                    </nav>
                </headerr>
                <main className="homee">
                    <div className="content">
                        <h3>E-learning is a better way of learning</h3>
                        <p>Success isn't always about greatness. It's about consistency. Consistent
                            hard work gains success. Greatness will come!!</p>
                        <a href="/" className="btn">get started</a>
                    </div>
                    <div className="image">
                        <img src={home} alt="" />
                    </div>
                </main>
                &lt;<h1 className="heading"> popular courses </h1>
                {/* course main  */}
                <main id="course">
                    <div className="box">
                        <span className="amount">$90.99</span>
                        <img src={course5} alt="" />
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                        </div>
                        <h3>front end development</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ullam omnis odit accusamus doloremque? Cum aliquid unde nulla. Vitae, adipisci?</p>
                        <a href="/" className="btn">learn more</a>
                        <div className="icons">
                            <p> <i className="far fa-clock" /> 2 hours </p>
                            <p> <i className="far fa-calendar" /> 6 months </p>
                            <p> <i className="fas fa-book" /> 12 modules </p>
                        </div>
                    </div>
                    <div className="box">
                        <span className="amount">$59.99</span>
                        <img src={course5} alt="" />
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                        </div>
                        <h3>front end development</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ullam omnis odit accusamus doloremque? Cum aliquid unde nulla. Vitae, adipisci?</p>
                        <a href="/" className="btn">learn more</a>
                        <div className="icons">
                            <p> <i className="far fa-clock" /> 2 hours </p>
                            <p> <i className="far fa-calendar" /> 6 months </p>
                            <p> <i className="fas fa-book" /> 12 modules </p>
                        </div>
                    </div>
                    <div className="box">
                        <span className="amount">$55.99</span>
                        <img src={course5} alt="" />
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                        </div>
                        <h3>front end development</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ullam omnis odit accusamus doloremque? Cum aliquid unde nulla. Vitae, adipisci?</p>
                        <a href="/" className="btn">learn more</a>
                        <div className="icons">
                            <p> <i className="far fa-clock" /> 2 hours </p>
                            <p> <i className="far fa-calendar" /> 6 months </p>
                            <p> <i className="fas fa-book" /> 12 modules </p>
                        </div>
                    </div>
                    <div className="box">
                        <span className="amount">$73.99</span>
                        <img src={course5} alt="" />
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                        </div>
                        <h3>front end development</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ullam omnis odit accusamus doloremque? Cum aliquid unde nulla. Vitae, adipisci?</p>
                        <a href="/" className="btn">learn more</a>
                        <div className="icons">
                            <p> <i className="far fa-clock" /> 2 hours </p>
                            <p> <i className="far fa-calendar" /> 9 months </p>
                            <p> <i className="fas fa-book" /> 12 modules </p>
                        </div>
                    </div>
                    <div className="box">
                        <span className="amount">$60.99</span>
                        <img src={course5} alt="" />
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                        </div>
                        <h3>front end development</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ullam omnis odit accusamus doloremque? Cum aliquid unde nulla. Vitae, adipisci?</p>
                        <a href="/" className="btn">learn more</a>
                        <div className="icons">
                            <p> <i className="far fa-clock" /> 2 hours </p>
                            <p> <i className="far fa-calendar" /> 6 months </p>
                            <p> <i className="fas fa-book" /> 12 modules </p>
                        </div>
                    </div>
                    <div className="box">
                        <span className="amount">$90.99</span>
                        <img src={course5} alt="" />
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                        </div>
                        <h3>front end development</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ullam omnis odit accusamus doloremque? Cum aliquid unde nulla. Vitae, adipisci?</p>
                        <a href="/" className="btn">learn more</a>
                        <div className="icons">
                            <p> <i className="far fa-clock" /> 2 hours </p>
                            <p> <i className="far fa-calendar" /> 6 months </p>
                            <p> <i className="fas fa-book" /> 12 modules </p>
                        </div>
                    </div>
                </main>
                <h1 className="heading"> Course Progress and Daily planner </h1>
                <div className="comp">
                    <div class="row1">
                        <div class="column1">
                            <div className="calendar-cont">
                                <Calendar onChange={setDate} value={date} />
                            </div>
                            <div className="text-center">
                                Selected date: {date.toDateString()}
                            </div>
                        </div>
                        <div class="column2">
                            <div id="piechart"></div>
                        </div>
                    </div>
                </div>
                <h1 className="heading"> Our mentors </h1>
                {/* teacher main  */}
                <main id="teacher">
                    <div className="box">
                        <img src={teacher1} alt="" />
                        <h3>Sai Nath</h3>
                        <span>teacher</span>
                        <p>Abhi kuch nhi pta.</p>
                        <div className="share">
                            <a href="/" className="fab fa-facebook-f" />
                            <a href="/" className="fab fa-twitter" />
                            <a href="/" className="fab fa-instagram" />
                            <a href="/" className="fab fa-linkedin" />
                        </div>
                    </div>
                    <div className="box">
                        <img src={teacher2} alt="" />
                        <h3>Manav Sharma</h3>
                        <span>mentor</span>
                        <p>Welcome in shoppeal</p>
                        <div className="share">
                            <a href="/" className="fab fa-facebook-f" />
                            <a href="/" className="fab fa-twitter" />
                            <a href="/" className="fab fa-instagram" />
                            <a href="/" className="fab fa-linkedin" />
                        </div>
                    </div>
                    <div className="box">
                        <img src={teacher3} alt="" />
                        <h3>Mahir Bhatia</h3>
                        <span>mentor</span>
                        <p>Welcome in shoppeal</p>
                        <div className="share">
                            <a href="/" className="fab fa-facebook-f" />
                            <a href="/" className="fab fa-twitter" />
                            <a href="/" className="fab fa-instagram" />
                            <a href="/" className="fab fa-linkedin" />
                        </div>
                    </div>
                    <div className="box">
                        <img src={teacher4} alt="" />
                        <h3>Divakar Jha</h3>
                        <span>teacher</span>
                        <p>Welcome in shoppeal</p>
                        <div className="share">
                            <a href="/" className="fab fa-facebook-f" />
                            <a href="/" className="fab fa-twitter" />
                            <a href="/" className="fab fa-instagram" />
                            <a href="/" className="fab fa-linkedin" />
                        </div>
                    </div>
                </main>
                <h1 className="heading"> student's review </h1>
                {/* review main  */}
                <main id="review">
                    <div className="box">
                        <div className="student">
                            <div className="student-info">
                                <img src="images/student-1.png" alt="" />
                                <div className="info">
                                    <h3>Divakar Jha</h3>
                                    <span>student</span>
                                </div>
                            </div>
                            <i className="fas fa-quote-right" />
                        </div>
                        <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A molestiae ipsa mollitia. Dolore sapiente animi ab eligendi voluptatum ipsa omnis.</p>
                    </div>
                    <div className="box">
                        <div className="student">
                            <div className="student-info">
                                <img src="images/student-2.png" alt="" />
                                <div className="info">
                                    <h3>Divakar Jha</h3>
                                    <span>student</span>
                                </div>
                            </div>
                            <i className="fas fa-quote-right" />
                        </div>
                        <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A molestiae ipsa mollitia. Dolore sapiente animi ab eligendi voluptatum ipsa omnis.</p>
                    </div>
                    <div className="box">
                        <div className="student">
                            <div className="student-info">
                                <img src="images/student-3.png" alt="" />
                                <div className="info">
                                    <h3>Divakar Jha</h3>
                                    <span>student</span>
                                </div>
                            </div>
                            <i className="fas fa-quote-right" />
                        </div>
                        <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A molestiae ipsa mollitia. Dolore sapiente animi ab eligendi voluptatum ipsa omnis.</p>
                    </div>
                    <div className="box">
                        <div className="student">
                            <div className="student-info">
                                <img src="images/student-4.png" alt="" />
                                <div className="info">
                                    <h3>Divakar Jha</h3>
                                    <span>student</span>
                                </div>
                            </div>
                            <i className="fas fa-quote-right" />
                        </div>
                        <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A molestiae ipsa mollitia. Dolore sapiente animi ab eligendi voluptatum ipsa omnis.</p>
                    </div>
                    <div className="box">
                        <div className="student">
                            <div className="student-info">
                                <img src="images/student-5.png" alt="" />
                                <div className="info">
                                    <h3>Divakar Jha</h3>
                                    <span>student</span>
                                </div>
                            </div>
                            <i className="fas fa-quote-right" />
                        </div>
                        <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A molestiae ipsa mollitia. Dolore sapiente animi ab eligendi voluptatum ipsa omnis.</p>
                    </div>
                    <div className="box">
                        <div className="student">
                            <div className="student-info">
                                <img src="images/student-6.png" alt="" />
                                <div className="info">
                                    <h3>Divakar Jha</h3>
                                    <span>student</span>
                                </div>
                            </div>
                            <i className="fas fa-quote-right" />
                        </div>
                        <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A molestiae ipsa mollitia. Dolore sapiente animi ab eligendi voluptatum ipsa omnis.</p>
                    </div>
                </main>
                {/* footer main  */}
                <main className="footer">
                    <div className="box-cont">
                        <div className="box">
                            <h3>about us</h3>
                            <p>Dummy hai abhi.</p>
                        </div>
                        <div className="box">
                            <h3>quick links</h3>
                            <a href="/">home</a>
                            <a href="/">course</a>
                            <a href="/">teacher</a>
                            <a href="/">announcement</a>
                            <a href="/">assignement</a>
                            <a href="/">review</a>
                        </div>
                        <div className="box">
                            <h3>follow us</h3>
                            <a href="/">facebook</a>
                            <a href="/">twitter</a>
                            <a href="/">instagram</a>
                            <a href="/">linkedin</a>
                        </div>
                        <div className="box">
                            <h3>contact us</h3>
                            <p> <i className="fas fa-phone" /> +123-456-7890 </p>
                            <p> <i className="fas fa-envelope" /> shoppeal@gmail.com </p>
                        </div>
                    </div>
                    <div className="credit"> created by <span> Divakar Jha </span> | all rights reserved </div>
                </main>
                
            </div>

        </div >

    )
}

export default Dashboard
