import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up"> Mobile  Application Developer</h1>
              <h2 data-aos="fade-up" data-aos-delay={400}>I offer Android, React Native and Laravel API Services</h2>
              <div data-aos="fade-up" data-aos-delay={600}>
                <div className="text-center text-lg-start">
                  <a href='#contact'  className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Get Started</span>
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 hero-img" data-aos="zoom-out" data-aos-delay={200}>
              <img src="assets\img\undraw_programming_re_kg9v.svg" className="img-fluid" alt />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;