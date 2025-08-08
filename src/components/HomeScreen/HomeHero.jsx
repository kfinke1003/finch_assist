

import Box from "@mui/material/Box"

import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';import SettingsIcon from '@mui/icons-material/Settings';
import LockIcon from '@mui/icons-material/Lock';
import FeedIcon from '@mui/icons-material/Feed';
import HelpIcon from '@mui/icons-material/Help';
import NewspaperIcon from '@mui/icons-material/Newspaper';

import { useTheme } from "@emotion/react";

import CardSwapHeader from "./CarouselCardComponents/CardSwapHeader.jsx";
import CardSwapBody from "./CarouselCardComponents/CardSwapBody.jsx";

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
      <CardSwapHeader bg={bg_colors[4]} icon={<NewspaperIcon />} text={'News'} />
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

export default function HomeHero() {

  const theme = useTheme()

  const [activeIndex, setActiveIndex] = useState(0)

  const getCardPosition = (index) => {
    if (index === activeIndex) return 'active'
    if (index === (activeIndex + 1) % cards.length) return 'right'
    if (index === (activeIndex - 1 + cards.length) % cards.length) return 'left'
    return 'hidden'
  }

  // this function dynamically updates the styling for each card
  // this makes it so they don't re-render, allowing the CSS animation to work
  const renderCards = () => {
    return (
      <Box sx={{
        height: '600px',
        width: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {cards.map((card, index) => {
          const position = getCardPosition(index)

          const baseStyles = {
            position: 'absolute',
            transition: 'all 0.6s ease-in-out',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }

          let cardStyles = {}

          if (position === 'active') {
            cardStyles = {
              opacity: 1,
              transform: 'translateX(0%) scale(1)',
              zIndex: 3,
            }
          } else if (position === 'left') {
            cardStyles = {
              opacity: 0,
              transform: 'translateX(-60%) scale(0.8)',
              zIndex: 2,
            }
          } else if (position === 'right') {
            cardStyles = {
              opacity: 0,
              transform: 'translateX(60%) scale(0.8)',
              zIndex: 2,
            }
          } else {
            // Hidden cards not shown
            cardStyles = {
              opacity: 0,
              transform: 'scale(0.8)',
              zIndex: 1,
              pointerEvents: 'none',
            }
          }

          return (
            <Box
              key={card.id}
              sx={[theme.util.carouselCard, baseStyles, cardStyles]}
              onClick={() => {
                if (position === 'left') {
                  setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length)
                } else if (position === 'right') {
                  setActiveIndex((prev) => (prev + 1) % cards.length)
                }
              }}
            >
              {card.content}
            </Box>
          )
        })}
      </Box>
    )
  }

  // timer for automatic rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

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