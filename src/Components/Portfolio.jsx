import React from 'react'

const Portfolio = () => {
  return (
    <div>
      <main id="main">
      <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Portfolio</h2>
          <p>Check our latest work</p>
        </header>
        <div className="row" data-aos="fade-up" data-aos-delay={100}>
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">My Apps</li>
        
              {/* <li data-filter=".filter-card">Card</li> */}
              {/* <li data-filter=".filter-web">Web</li> */}
            </ul>
          </div>
        </div>
        <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay={200}>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets\img\portfolio\Alpha Designs\WhatsApp Image 2022-05-11 at 6.00.49 PM.jpeg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h4>Quran App</h4>
               
                {/* <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="App 1"><i className="bi bi-plus" /></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets\img\portfolio\Alpha Designs\WhatsApp Image 2022-05-10 at 6.05.51 PM.jpeg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h4>Business App</h4>
               
                {/* <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="Web 3"><i className="bi bi-plus" /></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets\img\portfolio\Alpha Designs\WhatsApp Image 2022-05-10 at 6.08.46 PM.jpeg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h4>Food App</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets\img\portfolio\Alpha Designs\WhatsApp Image 2022-05-10 at 6.09.44 PM.jpeg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h4>Services App</h4>
             
                {/* <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="Card 2"><i className="bi bi-plus" /></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets\img\portfolio\Alpha Designs\WhatsApp Image 2022-05-11 at 6.00.48 PM.jpeg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h4>Property App</h4>
                
                {/* <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="Web 2"><i className="bi bi-plus" /></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets\img\portfolio\Alpha Designs\WhatsApp Image 2022-05-10 at 6.21.18 PM.jpeg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h4>Social  App</h4>
                
                {/* <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="App 3"><i className="bi bi-plus" /></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets\img\portfolio\Alpha Designs\WhatsApp Image 2022-05-10 at 6.12.17 PM.jpeg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h4>Travel App</h4>
                
                {/* <div className="portfolio-links">
                  <a href="assets\img\portfolio\Alpha Designs\WhatsApp Image 2022-05-10 at 5.58.00 PM.jpeg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="Card 1"><i className="bi bi-plus" /></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets\img\portfolio\Alpha Designs\WhatsApp Image 2022-05-10 at 5.58.00 PM.jpeg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h4>Islamic App</h4>
                
                {/* <div className="portfolio-links">
                  <a href="assets\img\portfolio\Alpha Designs\WhatsApp Image 2022-05-11 at 6.00.50 PM (1).jpeg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="Card 3"><i className="bi bi-plus" /></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets\img\portfolio\Alpha Designs\WhatsApp Image 2022-05-11 at 6.00.50 PM (1).jpeg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h4>Client Management App</h4>
               
                {/* <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="Web 3"><i className="bi bi-plus" /></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Portfolio Section */}
      </main>
        
    </div>
  )
}

export default Portfolio