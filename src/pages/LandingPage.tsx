import {  useNavigate } from "react-router-dom";
export default function LandingPage(){
	const navigate = useNavigate();
const gotoContributors = () => {
	navigate('/contributors/my name is Jay');
}
	return <>
	<button onClick={gotoContributors}>Hello</button>
	this is landing page 
	</>
}