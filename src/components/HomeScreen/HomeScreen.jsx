import CardSwap, { Card } from "../extras/CardSwap";

import { Typography, Box } from "@mui/material"

import SettingsIcon from '@mui/icons-material/Settings';
import LockIcon from '@mui/icons-material/Lock';
import FeedIcon from '@mui/icons-material/Feed';
import HelpIcon from '@mui/icons-material/Help';
import ConstructionIcon from '@mui/icons-material/Construction';

import CardSwapHeader from "../util/CardSwapHeader.jsx";
import CardSwapBody from "../util/CardSwapBody.jsx";

export default function HomeScreen() {

  const height = '550px'
  const width = '700px'

  const bg_colors = [
    'linear-gradient(315deg, #8BA2E0, #f5f7fa)',
    'linear-gradient(315deg, #E0C58B, #f5f7fa)',
    'linear-gradient(315deg, #8BE08F, #f5f7fa)',
    'linear-gradient(315deg, #BD8BE0, #f5f7fa)',
    'linear-gradient(315deg, #E08B8B, #f5f7fa)'
  ]

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'row', borderRadius: '15px', width: 'fit-content', margin: 'auto', background: 'linear-gradient(135deg, #f5f7fa,rgb(92, 96, 169))',}}>

      <Box sx={{ height: height, width: width, display: 'flex', justifyContent: 'center', flexDirection: 'column', px: '5%'}}>
        <Typography variant='h1' sx={{ width: 'fit-content'}}>Welcome!</Typography>
        <Typography>Please use the navigation bar on the top of the page to find your way around this site.</Typography>
      </Box>

      <Box sx={{ height: height, width: width, position: 'relative', overflow: 'hidden'}}>
        <CardSwap
          width = {600}
          height = {400}
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
          >
          <Card>
            <CardSwapHeader bg={bg_colors[0]} icon={<SettingsIcon />} text={'Services'} />
            <CardSwapBody bg={bg_colors[0]} text={'Looking for information on a specific service? Click on the Services page.'} />
          </Card>
          <Card>
            <CardSwapHeader bg={bg_colors[1]} icon={<FeedIcon />} text={'Forms'} />
            <CardSwapBody bg={bg_colors[1]} text={'Do you have a request? There may be a form for that on the Forms page.'} />
          </Card>
          <Card>
            <CardSwapHeader bg={bg_colors[2]} icon={<ConstructionIcon />} text={'Projects'} />
            <CardSwapBody bg={bg_colors[2]} text={'Interested in what\'s currently going on in the department? Click on the Projects page.'} />
          </Card>
          <Card>
            <CardSwapHeader bg={bg_colors[3]} icon={<LockIcon />} text={'Cybersecurity'} />
            <CardSwapBody bg={bg_colors[3]} text={'Want some help fortifying yourself against cyber threats? Check out the Cybersecurity page.'} />
          </Card>
          <Card>
            <CardSwapHeader bg={bg_colors[4]} icon={<HelpIcon />} text={'Help'} />
            <CardSwapBody bg={bg_colors[4]} text={'Having technicial issues? We can assist you over on the Help page.'} />
          </Card>
        </CardSwap>
      </Box>
    </Box>
  )
}