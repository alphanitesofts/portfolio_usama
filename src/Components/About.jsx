import React from 'react'

const About = () => {
  return (
    <div>
      <div id='main'>
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row gx-0">
              <div className="col-lg-9 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay={200}>
                <div className="content">
                  <h3>Who I AM</h3>
                  <h2>Usama Abdullah</h2>
                  <p>
                    I am an Android and IOS and Web developer and love my work . I have been into Mobile and Web Development since 3 years and I am just loving it. Since my start, I have worked over many Android, IOS and web development projects for many clients and produced high quality work.
                  </p>
                  <div className="text-center text-lg-start">
                    <a href="#" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                      <span>Read More</span>
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay={200}>
                <img src="assets\img\testimonials\usama Profile.jpg" className="img-fluid p-1 border border-2 ms-5" alt  style={{borderRadius:"2em"}}/>
              </div>
            </div>
          </div>
        </section>

        {/* ======= Counts Section ======= */}
        <section id="counts" className="counts">
          <div className="container" data-aos="fade-up">
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-emoji-smile" />
                  <div>
                    <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter" />
                    <p><strong>Happy Clients  2000+</strong> </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-journal-richtext" style={{ color: '#ee6c20' }} />
                  <div>
                    <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={1} className="purecounter" />
                    <p><strong>Projects 400+</strong> </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-headset" style={{ color: '#15be56' }} />
                  <div>
                    <span data-purecounter-start={0} data-purecounter-end={1463} data-purecounter-duration={1} className="purecounter" />
                    <p> <strong>Hours Of Support 1000+</strong> </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-people" style={{ color: '#bb0852' }} />
                  <div>
                    <span data-purecounter-start={0} data-purecounter-end={15} data-purecounter-duration={1} className="purecounter" />
                    <p> <strong>Hard Workers 500+</strong> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{/* End Counts Section */}
        {/* ======= Features Section ======= */}
        <section id="features" className="features">
          <div className="container" data-aos="fade-up">
            {/* <header className="section-header">
          <h2>Features</h2>
          <p>My  Works</p>
        </header>
        <div className="row">
          <div className="col-lg-6">
            <img src="assets/img/features.png" className="img-fluid" alt />
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
            <div className="row align-self-center gy-4">
              <div className="col-md-6" data-aos="zoom-out" data-aos-delay={200}>
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check" />
                  <h3>Eos aspernatur rem</h3>
                </div>
              </div>
              <div className="col-md-6" data-aos="zoom-out" data-aos-delay={300}>
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check" />
                  <h3>Facilis neque ipsa</h3>
                </div>
              </div>
              <div className="col-md-6" data-aos="zoom-out" data-aos-delay={400}>
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check" />
                  <h3>Volup amet voluptas</h3>
                </div>
              </div>
              <div className="col-md-6" data-aos="zoom-out" data-aos-delay={500}>
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check" />
                  <h3>Rerum omnis sint</h3>
                </div>
              </div>
              <div className="col-md-6" data-aos="zoom-out" data-aos-delay={600}>
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check" />
                  <h3>Alias possimus</h3>
                </div>
              </div>
              <div className="col-md-6" data-aos="zoom-out" data-aos-delay={700}>
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check" />
                  <h3>Repellendus mollitia</h3>
                </div>
              </div>
            </div>
          </div>
        </div>  */}


            {/* Feature Icons */}
            <div className="row feature-icons" data-aos="fade-up">
              <h3>Live Applications</h3>
              <div className="row">
                <div className="col-xl-4 text-center" data-aos="fade-right" data-aos-delay={100}>
                  <img src="assets/img/features-3.png" className="img-fluid p-4" alt />
                </div>
                <div className="col-xl-8 d-flex content">
                  <div className="row align-self-center gy-4">
                    <div className="col-md-6 icon-box" data-aos="fade-up">
                      <i className="fa-brands fa-google-play" />

                      <div>
                        <h4>Online Tracker</h4>
                        <a href="https://play.google.com/store/apps/details?id=com.lastlogapp" target={"_blank"}>    Check it...</a>
                      </div>
                    </div>
                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
                      <i className="fa-brands fa-google-play" />
                      <div>
                        <h4>Mp3 music player</h4>
                        <a href="https://play.google.com/store/apps/details?id=code.jiya.techs.mp3music" target={"_blank"}>Check it...</a>
                      </div>
                    </div>
                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
                      <i className="fa-brands fa-google-play" />
                      <div>
                        <h4>Quran for Android</h4>
                        <a href="https://play.google.com/store/apps/details?id=com.quran.labs.androidquran" target={"_blank"}>Check it...</a>
                      </div>
                    </div>
                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={300}>
                      <i className="fa-brands fa-google-play" />
                      <div>
                        <h4>Galeyr eCommerce</h4>
                        <a href="https://play.google.com/store/apps/details?id=galeyr.ecommerce2" target={"_blank"}>Check it...</a>
                      </div>
                    </div>
                    {/* <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
                      <i className="fa-brands fa-google-play" />
                      <div>
                        <h4>Molestiae dolor</h4>
                        <p>Et fuga et deserunt et enim. Dolorem architecto ratione tensa raptor marte</p>
                      </div>
                    </div> */}
                    {/* <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={500}>
                      <i className="fa-brands fa-google-play" />
                      <div>
                        <h4>Explicabo consectetur</h4>
                        <p>Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore</p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>End Feature Icons
          </div>
        </section>
      </div>

    </div>
  )
}

export default About