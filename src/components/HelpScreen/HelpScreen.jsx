import * as React from 'react'

import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from '@mui/material/Grid';
// import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

import { useTheme } from '@emotion/react';

import ItemCardNoLink from '../util/ItemCardNoLink';

export default function HelpScreen() {

    const theme = useTheme()

    return (
        <Box sx={theme.containers.pageContainer}>

            <Box sx={theme.containers.responsiveSubContainer}>
                <Typography variant='h1' sx={{borderBottom: '5px solid blue', width: 'fit-content'}}>Help</Typography>
                <Typography sx={[theme.typography.body1, {mt: '50px'}]} >Need some help figuring out a technical issue? We offer in-person assistance at both Bock and TTI. We also offer remote assistance over phone and email.</Typography>
                
            </Box>

            <Divider sx={theme.util.divider} />

                <Box sx={[theme.containers.responsiveAccentSubContainer, {minHeight: '55vh'}]}>
                    <Grid container spacing={3} sx={theme.containers.gridContainer}>
                        <Grid><ItemCardNoLink title='Onsite' description='We typically offer in-person assistance at Bock from 8:00 AM to 5:00 PM, Monday through Friday. Assistance is also usually available at TTI once a week, though the day may vary.' /></Grid>
                        <Grid><ItemCardNoLink title='Email' description='Please reach out to us at it@bockwaterheaters.com for assistance.' /></Grid>
                        <Grid><ItemCardNoLink title='Phone' description='Please feel free to give us a call at extension 3339 or 3336.' /></Grid>
                    </Grid>
                </Box>

            {/* <Divider sx={theme.util.divider} />

            <Box sx={{mx: '5%'}}>
                <Typography variant='h1' sx={{borderBottom: '5px solid blue', width: 'fit-content'}}>Troubleshooting</Typography>
                <Typography sx={[theme.typography.body1, {mt: '50px'}]} >Interested in trying to solve a problem on your own? Here are some common issues and resolutions we've come across!</Typography>
                <Box sx={{mx: {lg: '10%', xl: '20%'}, mt: '30px'}}>
                    <Grid container spacing={2} columns={{xs: 1, md: 3}}>
                        <Grid size={{xs: 3, md: 1}}><ItemCardNoLink title='Temp' description='Temp' /></Grid>
                        <Grid size={{xs: 3, md: 1}}><ItemCardNoLink title='Temp' description='Temp' /></Grid>
                        <Grid size={{xs: 3, md: 1}}><ItemCardNoLink title='Temp' description='Temp' /></Grid>
                    </Grid>
                </Box>
            </Box> */}
        </Box>
    )

}