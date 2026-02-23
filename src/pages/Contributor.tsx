import { useNavigate, useParams } from "react-router-dom"
import { contributorsArray } from "../data/contributors";
import DOMPurify from "dompurify";
import { useEffect } from "react";
import Layout from "../components/Layout";
import {
  Typography,
  Divider,
  Box,
  Chip,
  Stack
} from "@mui/material";
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

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        { contributor.name || contributor.slug}
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <Chip label={contributor.location} />
      </Stack>

      <Typography variant="subtitle1" sx={{ mb: 3 }}>
        {contributor.intro}
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Box
        sx={{
          "& h2": { mt: 4 },
          "& p": { mb: 2 },
        }}
      >
        <div dangerouslySetInnerHTML={{
	__html : DOMPurify.sanitize(contributor?.html ?? "")
	}} />
      </Box>
    </Layout>
  );

}




