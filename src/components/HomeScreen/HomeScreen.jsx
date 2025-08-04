import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import { useTheme } from "@emotion/react";

import HomeHero from "./HomeHero.jsx";
import HomeHeroNew from "./HomeHeroNew.jsx";
import ItemCard from '../util/ItemCard';

export default function HomeScreen(props) {

  const { news } = props

  const theme = useTheme()

  return (
    <Box sx={theme.containers.pageContainer}>

      <HomeHeroNew />

      <Box sx={[theme.containers.responsiveSubContainer, {display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', py: '50px',
        backgroundImage: 'url(images/bg_1920x1080_swirls_white.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }]}>
        <Typography variant='h1' sx={{borderBottom: '5px solid blue', width: 'fit-content'}}>News</Typography>
        <Divider sx={theme.util.divider} />
        <Box sx={{
          }}>
          <Grid container spacing={3} sx={theme.containers.gridContainer}>
            {news.map(news => <Grid key={news.id}><ItemCard link={news.path} title={news.headline} description={news.info} /></Grid>)}
          </Grid>
        </Box>
      </Box>

    </Box>
  )
}