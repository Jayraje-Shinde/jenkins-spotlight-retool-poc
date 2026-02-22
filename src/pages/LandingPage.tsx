import {contributorsArray} from "../data/contributors";
import {useNavigate} from 'react-router-dom'
export default function LandingPage() {
	
	const navigate = useNavigate();

	return <>
		{
			 contributorsArray.map((contributor) => (
        <button onClick={() => navigate(`/contributors/${contributor.slug}`)} key={contributor.slug}>
          {contributor.name}
        </button>
      ))
		}
	</>
}