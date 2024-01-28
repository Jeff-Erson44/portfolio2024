import { Home } from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'




function App() {
  return (
    <> 
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          {/* shift + cmd + ; */}
          <Route path="/" element={<Home/>} />
          {/* <Route path="/tl" element={<TestLouis/>} />
          <Route path="/tl/:id" element={<TestLouis/>} /> */}
          {/* tout autres chemins */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
