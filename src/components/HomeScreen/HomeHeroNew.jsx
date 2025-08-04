
import CardSwap, { Card } from "../extras/CardSwap.jsx";

import { Typography, Box } from "@mui/material"

import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';import SettingsIcon from '@mui/icons-material/Settings';
import LockIcon from '@mui/icons-material/Lock';
import FeedIcon from '@mui/icons-material/Feed';
import HelpIcon from '@mui/icons-material/Help';
import ConstructionIcon from '@mui/icons-material/Construction';

import { useTheme } from "@emotion/react";

import CardSwapHeader from "../util/CardSwapHeader.jsx";
import CardSwapBody from "../util/CardSwapBody.jsx";

import CenteredCarousel from "../util/CenteredCarousel.jsx";

export default function HomeHeroNew() {

  // const height = 'calc(100vh - 142px - 150px)'
  // const width = window.innerWidth / 2

  const bg_colors = [
    'linear-gradient(315deg, #8BA2E0, #f5f7fa)',
    'linear-gradient(315deg, #E0C58B, #f5f7fa)',
    'linear-gradient(315deg, #8BE08F, #f5f7fa)',
    'linear-gradient(315deg, #BD8BE0, #f5f7fa)',
    'linear-gradient(315deg, #E08B8B, #f5f7fa)',
    'linear-gradient(135deg, #f5f7fa,rgb(92, 96, 169))'
  ]

  const theme = useTheme()

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      flexDirection: 'row', 
      backgroundImage: 'url(images/bg_1920x1080_hibiscus_bop.png)', 
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      borderBottom: '5px solid blue' }}>

      <CenteredCarousel height={600}>
          <Box sx={theme.util.centeredCarouselCard}>
            <CardSwapHeader bg={bg_colors[0]} icon={<EmojiEmotionsIcon />} text={'Welcome!'} />
            <CardSwapBody bg={bg_colors[0]} text={'Welcome to our website! Please take a moment to explore this site. You may find something interesting!'} />
          </Box>
          <Box sx={theme.util.centeredCarouselCard}>
            <CardSwapHeader bg={bg_colors[0]} icon={<SettingsIcon />} text={'Services'} />
            <CardSwapBody bg={bg_colors[0]} text={'Looking for information on a specific service? Click on the Services page.'} />
          </Box>
          <Box sx={theme.util.centeredCarouselCard}>
            <CardSwapHeader bg={bg_colors[1]} icon={<FeedIcon />} text={'Forms'} />
            <CardSwapBody bg={bg_colors[1]} text={'Do you have a request? There may be a form for that on the Forms page.'} />
          </Box>
          <Box sx={theme.util.centeredCarouselCard}>
            <CardSwapHeader bg={bg_colors[4]} icon={<ConstructionIcon />} text={'News'} />
            <CardSwapBody bg={bg_colors[4]} text={'Interested in what\'s currently going on in the department? Click on the News page.'} />
          </Box>
          <Box sx={theme.util.centeredCarouselCard}>
            <CardSwapHeader bg={bg_colors[3]} icon={<LockIcon />} text={'Cybersecurity'} />
            <CardSwapBody bg={bg_colors[3]} text={'Want some help fortifying yourself against cyber threats? Check out the Cybersecurity page.'} />
          </Box>
          <Box sx={theme.util.centeredCarouselCard}>
            <CardSwapHeader bg={bg_colors[2]} icon={<HelpIcon />} text={'Help'} />
            <CardSwapBody bg={bg_colors[2]} text={'Having technical issues? We can assist you over on the Help page.'} />
          </Box>
        </CenteredCarousel>
    </Box>
  )
}