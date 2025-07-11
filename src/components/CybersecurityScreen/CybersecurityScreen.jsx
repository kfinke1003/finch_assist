import * as React from 'react'

import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

import { useTheme } from '@emotion/react';

import ItemCardNoLink from '../util/ItemCardNoLink';

export default function CybersecurityScreen() {

    const theme = useTheme()

    return (
        <Box sx={{mx: '30px', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>

            <Box sx={{mx: '5%'}}>
                <Typography variant='h1' sx={{borderBottom: '5px solid blue', width: 'fit-content'}}>Cybersecurity</Typography>
                <Typography sx={[theme.typography.body1, {mt: '50px'}]} >
                    Cybersecurity is essential for protecting sensitive information, maintaining privacy, and ensuring the integrity of digital systems.
                    As we increasingly rely on technology, cyber threats like hacking, data breaches, and ransomware attacks pose serious risks.
                    Strong cybersecurity practices not only prevent financial loss and reputational damage but also help maintain trust in digital infrastructure and allow us to stay safely connected.
                </Typography>
                <Box sx={{mx: {lg: '10%', xl: '20%'}, mt: '30px'}}>
                    <Grid container spacing={2} columns={{xs: 1, md: 3}}>
                        <Grid size={{xs: 3, md: 1}}><ItemCardNoLink title='Phishing' description='...' /></Grid>
                        <Grid size={{xs: 3, md: 1}}><ItemCardNoLink title='Safe Browsing' description='...' /></Grid>
                        <Grid size={{xs: 3, md: 1}}><ItemCardNoLink title='Best Password Practices' description='...' /></Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )

}