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
        <Box sx={theme.containers.pageContainer}>

            <Box sx={theme.containers.responsiveSubContainer}>
                <Typography variant='h1' sx={{borderBottom: '5px solid blue', width: 'fit-content'}}>Cybersecurity</Typography>
                <Typography sx={[theme.typography.body1, {mt: '50px'}]} >
                    Cybersecurity is essential for protecting sensitive information, maintaining privacy, and ensuring the integrity of digital systems.
                    As we increasingly rely on technology, cyber threats like hacking, data breaches, and ransomware attacks pose serious risks.
                    Strong cybersecurity practices not only prevent financial loss and reputational damage but also help maintain trust in digital infrastructure and allow us to stay safely connected.
                </Typography>
            </Box>

            <Divider sx={theme.util.divider} />

            <Box sx={theme.containers.responsiveSubContainer}>
                <Grid container spacing={3} sx={theme.containers.gridContainer}>
                    <Grid><ItemCardNoLink title='Phishing' description='...' /></Grid>
                    <Grid><ItemCardNoLink title='Safe Browsing' description='...' /></Grid>
                    <Grid><ItemCardNoLink title='Best Password Practices' description='...' /></Grid>
                    <Grid><ItemCardNoLink title='Protecting Less Tech-Savvy Loved Ones' description='Steps to take if you have someone in your life who is at higher risk of being a target and falling for digital scams.' /></Grid>
                </Grid>
            </Box>
        </Box>
    )

}