import { useParams } from "react-router-dom"
export default function Contributor(){
	const {slug } = useParams();
	return <>
{slug} <br />
this is contributors pages
	</>
}