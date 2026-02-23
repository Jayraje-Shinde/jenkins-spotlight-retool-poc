// App.tsx
import { Route, Routes } from "react-router-dom";
import Contributor from './pages/Contributor';
import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      {/* Jenkins Header */}
      <jio-navbar property="https://contributors.jenkins.io"></jio-navbar>

      {/* Page content */}
      <main>
        <Routes>
          <Route path="/contributors/:slug" element={<Contributor />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/notfound" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Jenkins Footer */}
      <jio-footer property="https://contributors.jenkins.io"></jio-footer>
    </>
  );
}

export default App;