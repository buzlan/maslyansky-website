import { HashRouter, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Home from "./pages/Home"
import ServiceDetail from "./pages/ServiceDetail"

const AppContent: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Убираем хэш полностью на главной странице
    // Используем задержку, чтобы React Router успел обработать навигацию
    if (location.pathname === "/") {
      const timer = setTimeout(() => {
        const currentHash = window.location.hash;
        // Убираем хэш только если он пустой или содержит только слеш
        if (currentHash === "#/" || currentHash === "#") {
          const path = window.location.pathname;
          const search = window.location.search;
          // Убираем хэш, но сохраняем путь и query параметры
          window.history.replaceState(null, "", path + search);
        }
      }, 200);
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F3]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
      </Routes>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  )
}

export default App
