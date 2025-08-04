import {Box, Typography} from '@mui/material'
import { useTheme } from '@emotion/react'

export default function CardSwapHeader(props) {

    const {icon, text, bg} = props
    const theme = useTheme()

    return (
        <Box sx={{ borderBottom: '2px solid black', background: bg, borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}>
            <Box sx={{display: 'flex', alignItems: 'center', mx: '5px' }}>
                {icon}
                <Typography sx={theme.typography.card_h}>{text}</Typography>
            </Box>
        </Box>
    )
}