import { useParams } from "react-router-dom"
import { contributorsArray } from "../data/contributors";
import DOMPurify from "dompurify";
export default function Contributor(){
	const { slug } = useParams();
	const john = {
		name : "john doe",
		location : "Berlin",
		intro : "Iam Fake person",
		html : "<div>Random HTML</div>"
	}
	const contributor = contributorsArray.find(item => item.slug === slug) || john ;
	return <>
	<h1>{contributor.name}</h1>
<span>{contributor.location}</span>
<p>Intro : {contributor.intro}</p>
<div dangerouslySetInnerHTML={{
	__html : DOMPurify.sanitize(contributor?.html ?? "")
	}} />

	</>
}