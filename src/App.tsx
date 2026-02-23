import { Route, Routes } from "react-router-dom";
import Contributor from './pages/Contributor'
import LandingPage from './pages/LandingPage'
import NotFoundPage from './pages/NotFoundPage'
function App() {
	return (

		<>
		<Routes>
			<Route path="/contributors/:slug" element={<Contributor />} />
			<Route path="/" element={<LandingPage />} />
			<Route path="/notfound" element={<NotFoundPage />} />
		</Routes>
		
		
		</>
	)
}

export default App
