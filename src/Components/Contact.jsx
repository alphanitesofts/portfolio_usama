import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Contact = () => {

  const location = useLocation();
  const { subject } = location.state;
  const { message } = location.state;

  var mybutton = document.getElementById("myBtn");
  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    topFunction()
  }, [])

  return (
    <div>
      <nav className="navbar  navbar-expand-lg fixed-top  navbar-light bg-light  ">
        <div className="container-fluid">
          <Link to='/' className=" logo logo-icon d-flex align-items-center " style={{ marginTop: "2em", marginLeft: "1.5em" }} >
            <span style={{ fontSize: "3em" }} ><i className="fa-brands fa-connectdevelop"></i></span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 " style={{ fontSize: "1.05pc" }}>
              <li className="nav-item">
                <Link className="nav-link active text-primary" aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-primary" to="/Contact">Contact</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact mt-5">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </header>
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-geo-alt" />
                    <h3>Address </h3>
                    <p>Lahore Cantt, Pakistan</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-telephone" />
                    <h3>Call Us</h3>
                    <p>+92-3440049289</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-envelope" />
                    <h3>Email Us</h3>
                    <p>usama.abdullah425@gmail.com</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-clock" />
                    <h3>Open Hours</h3>
                    <p>Monday - Friday<br />9:00AM - 06:00PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form action="https://formsubmit.co/uabdullah425@gmail.com" method="post" className="php-email-form">
                <input type="hidden" name="_next" value="http://localhost:3000/" />
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6 ">
                    <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                  </div>
                  <div className="col-md-12">
                    <input defaultValue={subject} type="text" className="form-control" name="subject" placeholder="Subject" required />
                  </div>
                  <div className="col-md-12">
                    <textarea className="form-control" name="message" rows={6} placeholder="Message" required defaultValue={message} />
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>{/* End Contact Section */}



    </div>
  )
}

export default Contact