import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import NavbarComponents from './components/Navbar'
import Footer from './components/Footer'
import KelasPage from './pages/KelasPage'
import TestimonialPage from './pages/TestimonialPage'
import SyaratKetenPage from './pages/SyaratKetenPage'
import FaqPage from './pages/FaqPage'



function App() {
  return (
   <div>
    <NavbarComponents />
    <Routes>
      <Route path='/' Component={HomePage} />
      <Route path='/kelas' Component={KelasPage} />
      <Route path='/testimonial' Component={TestimonialPage} />
      <Route path='/Faq' Component={FaqPage} />
      <Route path='/syaratketen' Component={SyaratKetenPage} />
    </Routes>
    <Footer />
   </div>
  )
}

export default App
