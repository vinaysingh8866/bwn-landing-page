// App.tsx
import { VStack } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PrivacyPolicy from './components/PrivacyPolicy';
import { useEffect } from 'react';
import { trackDownload } from './services/downloadTracker';
import { trackVisit } from './services/visitTracker';

function App() {
  useEffect(() => {
    window.addEventListener('load', () => {
      trackVisit();
    });

    const handleDownload = () => {
      trackDownload();
    };

    window.addEventListener('beforeunload', handleDownload);
    return () => {
      window.removeEventListener('beforeunload', handleDownload);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <VStack className="fadeIn duration-1s delay-0s" bg="#F4F7F9" minH="100vh" w="full" gap={0}>
              <Navbar />
              <Home />
            </VStack>
          }
        />
        <Route path="/apk/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;