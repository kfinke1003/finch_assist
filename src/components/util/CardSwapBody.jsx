import { Box, Typography } from "@mui/material";
import { useTheme } from '@emotion/react';


export default function CardSwapBody(props) {

    const { bg, text } = props
    const theme = useTheme()

    return (
        <Box sx={{background: bg, borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px', flexGrow: '1'}}>
            <Typography sx={theme.typography.card_b}>{text}</Typography>
        </Box>
    )

}