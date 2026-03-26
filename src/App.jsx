import React from 'react'
import './App.css'
import {Route , Routes} from 'react-router-dom'
import Home from './screen/HomeScreen.jsx'
import Footer from './component/footer.jsx'
import Header from './component/header.jsx'

// International Routes
import InternationalScreen from './screen/InterNationalScreen.jsx'
import InternationalCard from './cards/InterNatCard.jsx'

// Package Routes
import PackageGrid from './screen/PackageScreen.jsx'
import PackageDetails from './cards/PackageCard.jsx'

// Honeymoon Routes
import HoneymoonScreen from './screen/HoneyMoonScreen.jsx'
import HoneymoonDetailsPage from './cards/HoneymoonCard.jsx'

// Group Tour Routes

import GroupTourDetails from './cards/GroupTourCard.jsx'
import GroupTours from './screen/TourGroupScreen.jsx'

// Spiritual Routes
import SpiritualScreen from './screen/SpiritualScreen.jsx'
import SpiritualCard from './cards/SpritualCard.jsx'

// Not Found 
import NotFound from './screen/notFound.jsx'

const  App = () => {
  return (
   <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Packages */}
      <Route path="/packages" element={<PackageGrid />} />
      <Route path="/packages/:id" element={<PackageDetails />} />

      {/* Honeymoons */}
      <Route path="/honeymoon" element={<HoneymoonScreen />} />
      <Route path="/honeymoon/:id" element={<HoneymoonDetailsPage />} />

      {/* Group Tours */}
      <Route path="/group-tours" element={<GroupTours />} />    
      <Route path="/group-tour/:id" element={<GroupTourDetails />} />

      {/* International Tours */}
      <Route path="/international" element={<InternationalScreen />} />
      <Route path="/international/:id" element={<InternationalCard />} />

      {/* Spiritual Tours */}
      <Route path="/spiritual" element={<SpiritualScreen />} />
      <Route path="/spiritual/:id" element={<SpiritualCard />} />

      {/* Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
   </div>
  )
}

export default App
