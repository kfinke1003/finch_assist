import { Box, Typography } from "@mui/material";
import { useTheme } from '@emotion/react';


export default function CardSwapBody(props) {

    const { bg, text } = props
    const theme = useTheme()

    return (
        <Box sx={{border: '3px solid white', width: '100%', height: '100%', borderRadius: '10px', m: '5px', background: bg}}>
            <Typography sx={theme.typography.card_b}>{text}</Typography>
        </Box>
    )

}