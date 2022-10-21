import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {

  return (
    <div>
      <section id="pricing" className="pricing">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Pricing</h2>
            <p>Check our Pricing</p>
          </header>
          <div className="row gy-4" data-aos="fade-left">
            {/* <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay={100}>
            <div className="box">
              <h3 >Free Plan</h3>
              <div className="price"><sup>$</sup>0<span> / mo</span></div>
              <img src="assets/img/pricing-free.png" className="img-fluid" alt />
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li className="na">Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <a href="#" className="btn-buy">Buy Now</a>
            </div>
          </div> */}
            <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={200}>
              <div className="box">
                <h3 >Silver Plan</h3>
                <div className="price"><sup>$</sup>100</div>
                <img src="assets/img/pricing-starter.png" className="img-fluid" alt />
                <ul>
                  <strong> <p>This include medium size, 1-7 activities, offline apps. This is informative app. registration apps</p>
                    <li>14 Days Delivery</li>
                    <li>Functional app</li>
                    <li>1 operating system</li>
                    <li>Upload to app store</li>
                    <li>App icon  </li>
                    <li>5 Screens </li>
                    <li className='na'>Splash screen</li>
                    <li className='na'>Ad network integration</li>
                    <li>Include source code</li></strong>
                </ul>
                <Link to="/Contact" state={{ subject: "For Buying Silver Plan for Application", message: "Hi Usama, I would like to choose your Silver Plan ..." }} className="btn-buy">Buy Now</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={300}>
              <div className="box">
                <span className="featured">Featured</span>
                <h3 >Gold Plan</h3>
                <div className="price"><sup>$</sup>300</div>
                <img src="assets/img/pricing-business.png" className="img-fluid" alt />
                <ul>
                  <strong><p>Convert your responsive website into Mobile apps. and small size app</p>
                    <li>7 Days Delivery</li>
                    <li>Functional app</li>
                    <li>1 operating system</li>
                    <li>Upload to app store</li>
                    <li>App icon  </li>
                    <li>10 Screens</li>
                    <li className='na'>Splash screen</li>
                    <li className='na'>Ad network integration</li>
                    <li>Include source code</li></strong>
                </ul>
                <Link to="/Contact" state={{ subject: "For Buying Gold Plan for Application", message: "Hi Usama, I would like to choose your Gold Plan ..." }} className="btn-buy">Buy Now</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={400}>
              <div className="box">
                <h3 >Platinum Plan</h3>
                <div className="price"><sup>$</sup>700</div>
                <img src="assets/img/pricing-ultimate.png" className="img-fluid" alt />
                <ul>
                  <strong><p>Mainly for business purposes Dynamic Apps. Price can very based on size of app.high dimensional app</p>
                    <li>30 Days Delivery</li>
                    <li>Functional app</li>
                    <li>1 operating system</li>
                    <li>Upload to app store</li>
                    <li>App icon  </li>
                    <li>15+ Screens  </li>
                    <li>Splash screen</li>
                    <li>Ad network integration</li>
                    <li>Include source code</li></strong>
                </ul>
                <Link to="/Contact" state={{ subject: "For Buying Platinum Plan for Application", message: "Hi Usama, I would like to choose your Platinum Plan ..." }} className="btn-buy">Buy Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>{/* End Pricing Section */}
      {/* ======= F.A.Q Section ======= */}
      {/* <section id="faq" className="faq">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>F.A.Q</h2>
          <p>Frequently Asked Questions</p>
        </header>
        <div className="row">
          <div className="col-lg-6">
          
            <div className="accordion accordion-flush" id="faqlist1">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                    Non consectetur a erat nam at lectus urna duis?
                  </button>
                </h2>
                <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                  <div className="accordion-body">
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                    Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
                  </button>
                </h2>
                <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                  <div className="accordion-body">
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?
                  </button>
                </h2>
                <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                  <div className="accordion-body">
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
          
            <div className="accordion accordion-flush" id="faqlist2">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-1">
                    Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                  </button>
                </h2>
                <div id="faq2-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                  <div className="accordion-body">
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-2">
                    Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
                  </button>
                </h2>
                <div id="faq2-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                  <div className="accordion-body">
                    Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-3">
                    Varius vel pharetra vel turpis nunc eget lorem dolor?
                  </button>
                </h2>
                <div id="faq2-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                  <div className="accordion-body">
                    Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    </div>
  )
}

export default Pricing