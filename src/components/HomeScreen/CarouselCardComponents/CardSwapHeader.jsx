import {Box, Typography} from '@mui/material'
import { useTheme } from '@emotion/react'

export default function CardSwapHeader(props) {

    const {icon, text, bg} = props
    const theme = useTheme()

    return (
        <Box sx={{ 
            backgroundImage: bg, 
            borderBottom: '2px solid black', 
            borderTopLeftRadius: '5px', 
            borderTopRightRadius: '5px',
            width: '100%' }}
        >
            <Box sx={{display: 'flex', alignItems: 'center', mx: '5px' }}>
                {icon}
                <Typography sx={theme.typography.card_h}>{text}</Typography>
            </Box>
        </Box>
    )
}