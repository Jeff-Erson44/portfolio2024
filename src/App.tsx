import { Footer } from './components/Molecules/Footer/Footer'
import { Navbar } from './components/Molecules/Navbar/Navbar'
import { GridContainer } from './components/Organisms/GridContainer/GridContainer'
import { Index } from './pages/Index'
import { Error } from './pages/Error/Error'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { About } from './pages/About/About'
import { ProjectList } from './pages/ProjectList/ProjectList'
import { ProjectDetail } from './pages/ProjectDetail/ProjectDetail'
import { AsideHero } from './components/Molecules/AsideHero/AsideHero'

function App() {

  return (
    <GridContainer> 
      <Navbar />
      <AsideHero/>
      <Router>
        <Routes>
          {/* shift + cmd + ; */}
          <Route path="/" element={<Index/>} />
          <Route path="/projectList" element={<ProjectList/>} />
          <Route path="/project/:slug" element={<ProjectDetail/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<Error/>} />
          {/* tout autres chemins */}
        </Routes>
      </Router>
      <Footer />
    </GridContainer>
  )
}

export default App