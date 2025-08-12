import { Box, Typography } from "@mui/material";
import { useTheme } from '@emotion/react';


export default function CardSwapBody(props) {

    const { bg, text } = props
    const theme = useTheme()

    return (
        <Box sx={{
            // backgroundImage: bg,
            borderBottomRightRadius: '5px', 
            borderBottomLeftRadius: '5px', 
            // flexGrow: '1',
            height:'50%'
        }}
        >
            <Typography sx={[theme.typography.card_b, {fontSize: {xs: '1.25rem', md: '1.5rem'}, textAlign: 'center', py: '30px'}]}>{text}</Typography>
        </Box>
    )

}