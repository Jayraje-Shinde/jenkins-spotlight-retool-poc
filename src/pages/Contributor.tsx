import { useNavigate, useParams } from "react-router-dom"
import { contributorsArray } from "../data/contributors";
import DOMPurify from "dompurify";
import { useEffect } from "react";
export default function Contributor(){
	const { slug } = useParams();
	const navigate = useNavigate();

	const contributor = contributorsArray.find(item => item.slug === slug);
	
	useEffect(() => {
  if (!contributor) {
    navigate('/notfound');
  }
}, [contributor, navigate]);

 if (!contributor) { // This double check ensures the page doesn’t render content before the redirect happens
    return null;
  }

	return <>
	<h1>{contributor.name}</h1>
<span>{contributor.location}</span> 
<p>Intro : {contributor.intro}</p>
<div dangerouslySetInnerHTML={{
	__html : DOMPurify.sanitize(contributor?.html ?? "")
	}} />

	</>
}


