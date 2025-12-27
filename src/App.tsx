import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ServiceDetail from "./pages/ServiceDetail"

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-[#F7F6F3]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
