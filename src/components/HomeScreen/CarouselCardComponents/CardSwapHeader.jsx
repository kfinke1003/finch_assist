import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

export default function CardSwapHeader(props) {
    const { icon, text, bg } = props;
    const theme = useTheme();

    return (
        <Box sx={{
            backgroundImage: 'url(images/bg_1920x1080_swirls_black.png)',
            backgroundColor: 'black',
            borderBottom: '3px solid black',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
            width: '100%',
            height: '50%',
            position: 'relative',
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                height: '100%',
                textAlign: 'center',
            }}>
                <Typography sx={[theme.typography.card_h, { fontSize: {xs: '2.25rem', lg: '3rem'}, color: 'white' }]}>
                    {text}
                </Typography>
            </Box>

            {/* Icon Overlap Circle */}
            <Box sx={{
                position: 'absolute',
                bottom: '-30px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'black',
                border: '3px solid black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 5,
            }}>
                {icon}
            </Box>
        </Box>
    );
}
