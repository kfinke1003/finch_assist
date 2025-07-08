
import DecryptedText from "../extras/DecryptedText.jsx"

import { Typography, Box, Divider } from "@mui/material"
import { useTheme } from '@emotion/react';

export default function HomeScreen() {

    const theme = useTheme()

    return (
    <Box sx={{mx: '30px', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>

            <Box sx={{mx: '5%'}}>
                {/* <Typography variant='h1' sx={{ width: 'fit-content'}}>Home</Typography> */}
                <DecryptedText 
                    text='UTWI Information Technology'
                    speed={5}
                    maxIterations={10}
                    sequential={true}
                    revealDirection="start"
                    useOriginalCharsOnly={false}
                    animateOn="view"
                />
                <DecryptedText 
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." 
                    speed={5}
                    maxIterations={10}
                    sequential={true}
                    revealDirection="start"
                    useOriginalCharsOnly={false}
                    animateOn="view"
                />
                
            </Box>
        </Box>
    )
}