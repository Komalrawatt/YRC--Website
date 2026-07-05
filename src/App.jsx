import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PastEvents from './pages/PastEvents'
import OnGoing from './pages/OngoingEvents'
import UpComing from './pages/UpComing'
import Team from './pages/Team'
// import Coordinators from './pages/Coordinators'
// import Members from './pages/Members'
// import Volunteers from './pages/Volunteers'
// import Alumni from './pages/Alumni'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Volunteers from './pages/Volunteers'

import { Routes, Route } from 'react-router-dom'
import OngoingEvents from './pages/OngoingEvents'


function App() {



  return (
    <div  >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/past-events" element={<PastEvents />} />
        <Route path="/ongoing-events" element={<OngoingEvents />} />
        <Route path="/upcoming-events" element={<UpComing />} />
        {/* <Route path="/coordinators" element={<Coordinators />} />
        <Route path="/members" element={<Members />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/alumni" element={<Alumni />} /> */}
        <Route path="/team" element={<Team/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/volunteers" element={<Volunteers />} />

        {/* <Route path="/login" element={<App />} />
        <Route path="/register" element={<App />} />
        <Route path="/forgot-password" element={<App />} />
        <Route path="/reset-password" element={<App />} />
        <Route path="/profile" element={<App />} /> */}
      </Routes> 

      
    </div>
  )
}

export default App
