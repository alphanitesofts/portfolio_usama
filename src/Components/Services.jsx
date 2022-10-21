import React from 'react'

const Services = () => {
  return (
    <div>
        <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Services</h2>
          <p>Why I,m The Best </p>
        </header>
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="service-box blue">
              <i className="ri-discuss-line icon" />
              <h2>AWESOME FEATURES</h2>
              <p>The App And websites are nicely build. In our projects there is no any bugs we deliver our products to client after complete testing.</p>
              {/* <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right" /></a> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
            <div className="service-box orange">
              <i className="ri-discuss-line icon" />
              <h3>ANIMATED ELEMENTS</h3>
              <p> In our products Ripple effect on click are nicely animated and user get nice UI</p>
              {/* <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right" /></a> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
            <div className="service-box green">
              <i className="ri-discuss-line icon" />
              <h3>RESPONSIVE DESIGN</h3>
              <p>Apps and website will give same and customized view on all density screens. you will never face any kind of widget lagging on our apps.</p>
              {/* <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right" /></a> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={500}>
            <div className="service-box red">
              <i className="ri-discuss-line icon" />
              <h3>MODREN DESIGN</h3>
              <p>We deliver apps in modern design. If you provide us design we will develop it as same with modern style.</p>
              {/* <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right" /></a> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={600}>
            <div className="service-box purple">
              <i className="ri-discuss-line icon" />
              <h3>RETINA READY</h3>
              <p>We provide Retina display design, displaying a website, app that serves Retina-ready graphics (higher resolution) will display sharper images and brighter, more vivid colours</p>
              {/* <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right" /></a> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={700}>
            <div className="service-box pink">
              <i className="ri-discuss-line icon" />
              <h3>FAST SUPPORT</h3>
              <p>We will give you fast support in given timeframe after testing our app</p>
              {/* <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right" /></a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Services