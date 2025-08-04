

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
import { useState, useEffect } from "react";

const bg_colors = [
  'linear-gradient(315deg, #8BA2E0, #f5f7fa)',
  'linear-gradient(315deg, #E0C58B, #f5f7fa)',
  'linear-gradient(315deg, #8BE08F, #f5f7fa)',
  'linear-gradient(315deg, #BD8BE0, #f5f7fa)',
  'linear-gradient(315deg, #E08B8B, #f5f7fa)',
  'linear-gradient(135deg, #f5f7fa,rgb(92, 96, 169))'
]

const cards = [
  
  {
    id: 0,
    content: <>
      <CardSwapHeader bg={bg_colors[5]} icon={<EmojiEmotionsIcon />} text={'Welcome!'} />
      <CardSwapBody bg={bg_colors[5]} text={'Welcome to our website! Please take a moment to explore this site. You may find something interesting!'} />
    </>,
  },
  {
    id: 1,
    content: <>
      <CardSwapHeader bg={bg_colors[0]} icon={<SettingsIcon />} text={'Services'} />
      <CardSwapBody bg={bg_colors[0]} text={'Looking for information on a specific service? Click on the Services page.'} />
    </>,
  },
  {
    id: 2,
    content: <>
      <CardSwapHeader bg={bg_colors[1]} icon={<FeedIcon />} text={'Forms'} />
      <CardSwapBody bg={bg_colors[1]} text={'Do you have a request? There may be a form for that on the Forms page.'} />
    </>,
  },
  {
    id: 3,
    content: <>
      <CardSwapHeader bg={bg_colors[4]} icon={<ConstructionIcon />} text={'News'} />
      <CardSwapBody bg={bg_colors[4]} text={'Interested in what\'s currently going on in the department? Click on the News page.'} />
    </>,
  },
  {
    id: 4,
    content: <>
      <CardSwapHeader bg={bg_colors[3]} icon={<LockIcon />} text={'Cybersecurity'} />
      <CardSwapBody bg={bg_colors[3]} text={'Want some help fortifying yourself against cyber threats? Check out the Cybersecurity page.'} />
    </>,
  },
  {
    id: 5,
    content: <>
      <CardSwapHeader bg={bg_colors[2]} icon={<HelpIcon />} text={'Help'} />
      <CardSwapBody bg={bg_colors[2]} text={'Having technical issues? We can assist you over on the Help page.'} />
    </>,
  },
]



export default function HomeHeroNew() {

  const theme = useTheme()

  const [leftCard, setLeftCard] = useState(cards[cards.length - 1])
  const [activeCard, setActiveCard] = useState(cards[0])
  const [rightCard, setRightCard] = useState(cards[1])

  const [isRotating, setIsRotating] = useState(true)

  const updateCards = (id) => {
    // get map cards to array of just their ids - find index of arg id
    const index = cards.map(card => card.id).indexOf(id)

    setLeftCard(cards[index === 0 ? cards.length - 1 : index - 1])
    setActiveCard(cards[index])
    setRightCard(cards[index === cards.length - 1 ? 0 : index + 1])
  } 

  const renderCards = () => {
    
    return (
      <Box sx={{height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

        <Box sx={[theme.util.carouselCard, {opacity: 0.95, transform: 'translateX(-60%) scale(0.8)', display: {xs: 'none', md: 'flex'}}]} onClick={() => updateCards(leftCard.id)}>
          {leftCard.content}
        </Box>

        <Box sx={[theme.util.carouselCard, {zIndex: 1}]} >
          {activeCard.content}
        </Box>

        <Box sx={[theme.util.carouselCard, {opacity: 0.95, transform: 'translateX(60%) scale(0.8)', display: {xs: 'none', md: 'flex'}}]} onClick={() => updateCards(rightCard.id)}>
          {rightCard.content}
        </Box>

      </Box>
    )
  }

  
  useEffect(() => {
    const interval = setInterval(() => updateCards(activeCard.id === cards.length - 1 ? 0 : activeCard.id + 1), 3000);
    return () => {
      clearInterval(interval);
    };
  }, [activeCard]);

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'url(images/bg_1920x1080_hibiscus_bop.png)', 
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      borderBottom: '5px solid blue',
      height: '600px', }}
    >

      {renderCards()}

    </Box>
  )
}