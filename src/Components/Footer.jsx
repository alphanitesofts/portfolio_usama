import React from 'react'

const Footer = () => {
  return (
    <>
         {/* ======= Footer ======= */}
  <footer id="footer" className="footer">
    <div className="footer-newsletter">
      <div className="container">
      
      </div>
    </div>
    <div className="footer-top">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-info">
            <a href="index.html" className="logo d-flex align-items-center">
              <img src="assets/img/logo.png" alt />
              <span>Get In Touch</span>
            </a>
            
            <div className="social-links mt-3">
              <a href="https://twitter.com/UsamaAb43517015"  target={"_blank"}  className="twitter"><i className="bi bi-twitter" /></a>
              <a href="https://github.com/usama425"  target={"_blank"}  className="github"><i className="bi bi-github" /></a>
              <a href="https://www.instagram.com/_usama.abdullah/" target={"_blank"}  className="instagram"><i className="bi bi-instagram" /></a>
              <a href="https://www.linkedin.com/in/usama-abdullah-412164188/" target={"_blank"} className="linkedin"><i className="bi bi-linkedin" /></a>
              <a href="https://join.skype.com/invite/gzwUBnQIfuM0" target={"_blank"} className="skype"> <i className="bi bi-skype" /></a>

            </div>
          </div>
          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bi bi-chevron-right" /> <a href="#">Home</a></li>
              <li><i className="bi bi-chevron-right" /> <a href="#">About us</a></li>
              <li><i className="bi bi-chevron-right" /> <a href="#">Services</a></li>
              <li><i className="bi bi-chevron-right" /> <a href="#">Terms of service</a></li>
              <li><i className="bi bi-chevron-right" /> <a href="#">Privacy policy</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bi bi-chevron-right" /> <a href="#">App Design</a></li>
              <li><i className="bi bi-chevron-right" /> <a href="#">App Development</a></li>
              <li><i className="bi bi-chevron-right" /> <a href="#">Product Management</a></li>
              {/* <li><i className="bi bi-chevron-right" /> <a href="#">Marketing</a></li> */}
              <li><i className="bi bi-chevron-right" /> <a href="#">UI/UX Development</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
            Lahore Cantt, Pakistan <br />
              <strong>Phone:</strong>+92-3440049289<br />
              <strong>Email:</strong>usama.abdullah425@gmail.com<br />
            </p>
          </div>
        </div>
      </div>
    </div>
    
  </footer>{/* End Footer */}
    </>
  )
}

export default Footer