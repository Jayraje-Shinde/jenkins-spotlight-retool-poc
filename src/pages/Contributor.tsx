import { useParams } from "react-router-dom"
import { contributorsArray } from "../data/contributors";
export default function Contributor(){
	const {slug } = useParams();
		console.log(contributorsArray);
	return <>
{slug} <br />
this is contributors pages
	</>
}