import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Pricing from './Components/Pricing';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
// import Team from './Components/Team';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Main from './Components/Main';

function App() {
  return (
    <div>
    
      <Router>
        <Navbar />
        {/* <Main/> */}
        <Routes>
          <Route path='/' element={<Main />} />
          {/* <Route path='/' element={<Home />} />
          <Route path='/About' element={< About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Pricing' element={< Pricing />} />
          <Route path='/Portfolio' element={< Portfolio />} />
          <Route path='/Testimonials' element={< Testimonials />} />
          */}
          <Route path='/Contact' element={<Contact />} /> 
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
