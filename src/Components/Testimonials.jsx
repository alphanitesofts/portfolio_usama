import React from 'react'

const Testimonials = () => {
  return (
    <div>
      {/* ======= Testimonials Section ======= */}
      <section id="testimonials" className="testimonials">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Testimonials</h2>
            <p>What they are saying about us</p>
          </header>
          {/* SLIDER */}
          <div id="carouselExampleDark" className="carousel carousel-dark slide p-5" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1}  aria-label="Slide 2" />
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2}  aria-label="Slide 3" />
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={3}  aria-label="Slide 4" />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval={1000}>
                <div className="card text-center">
                  <div className="card-body">
                    <div className="profile mt-auto">
                      <img src="assets\img\testimonials\6a1ed561-6bca-4981-b389-6bcc4dd3a864.jfif" className="comments-img" alt />
                      <h3>MeasMary</h3>
                      <h6>Usama was so nice to work with, very good communicator, he understood my requirements perfectly and delivered amazing results! I would definitely reccommend if you need any help with mobile application development!</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" >
                <div className='text-center'>
                  <div className="card">
                    <div className="card-body">
                      <div className="profile mt-auto">
                        <img src="assets/img/testimonials/testimonials-3.jpg" className="comments-img" alt />
                        <h4>Saul Goodman</h4>
                        <h6>Very skilled and knowledgeable!He has been very patient and implemented all the required changes seamlessly</h6>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="carousel-item" >
                <div className='text-center'>
                  <div className="card">
                    <div className="card-body">
                      <div className="profile mt-auto">
                        <img src="assets/img/testimonials/testimonials-4.jpg" className="comments-img" alt />
                        <h4>Saul Goodman</h4>
                        <h6>Excellent worker! Will be using Usama for all coding work in future</h6>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="carousel-item" >
                <div className='text-center'>
                  <div className="card">
                    <div className="card-body">
                      <div className="profile mt-auto">
                        <img src="assets/img/testimonials/testimonials-5.jpg" className="comments-img" alt />
                        <h3>Saul Goodman</h3>
                        <h6>awsome communication skills.He has completed my project before time.Highly recommended.</h6>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>{/* End Testimonials Section */}
  
    </div>
  )
}

export default Testimonials