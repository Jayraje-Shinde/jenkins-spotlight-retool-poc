import {useMemo,useState} from 'react'
import {contributorsArray} from "../data/contributors";
import {useNavigate} from 'react-router-dom'
import Fuse from 'fuse.js';

export default function LandingPage() {
	 const [query, setQuery] = useState("");
	const navigate = useNavigate();
	const fuse = useMemo(() => {
    return new Fuse(contributorsArray, {
      keys: ["slug", "name", "location"], // keys to search in
      threshold: 0.5 // adjust to control fuzziness
    });
  }, [contributorsArray]);


const results = useMemo(() => {
    if (!query) return contributorsArray; // Return full list if no query

    return fuse.search(query).map(result => result.item);
  }, [fuse, query, contributorsArray]);

	return <>
		<input value={query} type="text" onChange={(e) => setQuery(e.target.value)} />
		<ul>
        {results.map(item => (
			
          <li key={item.slug}>
				<button onClick={() => navigate(`/contributors/${item.slug}`)} key={item.slug}>
          {item.name}
        </button>
          </li>
        ))}
      </ul>

	</>
}