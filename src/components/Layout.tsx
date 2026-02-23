import { Container, Box } from "@mui/material";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Container maxWidth="lg">
      <Box component="main" sx={{ mt: 6, mb: 6 }}>
        {children}
      </Box>
    </Container>
  );
}