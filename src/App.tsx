import {Router, Route, Routes } from "react-router-dom";
import Contributor from './pages/Contributor'
import LandingPage from './pages/LandingPage'
function App() {

  return (
   
	<Routes>
		<Route path="/contributors/:slug" element={<Contributor />}/>
		<Route path="/" element={<LandingPage />}/>
</Routes>
  )
}

export default App
