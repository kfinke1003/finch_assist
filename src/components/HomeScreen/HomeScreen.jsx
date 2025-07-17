
import { Typography, Box } from "@mui/material"

import { useTheme } from "@emotion/react";

import HomeHero from "./HomeHero.jsx";

export default function HomeScreen() {

  const theme = useTheme()

  return (
    <Box sx={theme.containers.pageContainer}>

      <HomeHero />

      <Box>
        <Typography>Hello</Typography>
      </Box>

    </Box>
  )
}