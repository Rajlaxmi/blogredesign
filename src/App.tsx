import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PublicationsPage from './pages/PublicationsPage';
import ResearchPage from './pages/ResearchPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/publications" element={<PublicationsPage />} />
      <Route path="/research" element={<ResearchPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
