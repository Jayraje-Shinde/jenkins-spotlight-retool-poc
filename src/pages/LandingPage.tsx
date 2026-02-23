import { useMemo, useState } from 'react'
import { contributorsArray } from "../data/contributors";
import { useNavigate } from 'react-router-dom'
import Fuse from 'fuse.js';
import Layout from "../components/Layout";
import { deepPurple } from "@mui/material/colors";
import {
	TextField,
	Card,
	CardContent,
	Typography,
	CardActionArea,
	Avatar
} from "@mui/material";

import Grid from "@mui/material/Grid";

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
		if (!query) return []; // Return full list if no query

		return fuse.search(query).map(result => result.item);
	}, [fuse, query, contributorsArray]);


	return (
		<Layout>
			<Typography variant="h4" gutterBottom>
				Contributor Spotlight
			</Typography>

			<TextField
				fullWidth
				label="Search contributors"
				variant="outlined"
				sx={{ mb: 4 }}
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>

<Grid container spacing={3}>
  {(query ? results : contributorsArray).map((item) => (
    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.slug}>
      <Card sx={{ transition: "0.2s", "&:hover": { boxShadow: 6 } }}>
        <CardActionArea
          onClick={() => navigate(`/contributors/${item.slug}`)}
        >
			
          <CardContent>
				<Avatar sx={{ bgcolor: deepPurple[500] }}>
  {item.name.charAt(0)}
</Avatar>
            <Typography variant="h6">{item.name}</Typography>

            <Typography variant="subtitle2" color="text.secondary">
              {item.location}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
              color="text.secondary"
            >
              {item.intro}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  ))}
</Grid>
		</Layout>
	);

	// return <>
	// 	<input value={query} type="text" onChange={(e) => setQuery(e.target.value)} />
	// 	<ul>
	//      {results.map(item => (

	//        <li key={item.slug}>
	// 			<button onClick={() => navigate(`/contributors/${item.slug}`)} key={item.slug}>
	//        {item.name}
	//      </button>
	//        </li>
	//      ))}
	//    </ul>

	// </>
}




