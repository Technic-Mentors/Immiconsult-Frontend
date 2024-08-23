import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pricing from './Components/Pricing';
import ScrollToTop from './ScrollToTop';
import Contact from './Components/Contact.1';
import IeltsCoaching from './Components/IeltsCoaching';
import SpokenEnglish from './Components/SpokenEnglish';
import PTECoaching from './Components/PTECoaching';
import LanguageCert from './Components/LanguageCert';
import VisaImigration from './Components/VisaImigration';
import TravelTour from './Components/Travel&Tour';

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/pricing-plans' element={<Pricing />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/ielts-coaching' element={<IeltsCoaching />} />
          <Route path='/spoken-english' element={<SpokenEnglish />} />
          <Route path='/pte-coaching' element={<PTECoaching />} />
          <Route path='/language-cert' element={<LanguageCert />} />
          <Route path='/visa-immigration' element={<VisaImigration/>} />
          <Route path='/travel-tour' element={<TravelTour/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
