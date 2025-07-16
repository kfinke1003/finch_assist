import * as React from 'react'

import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from '@mui/material/Grid';

import { useTheme } from '@emotion/react';

import ItemCardNoLink from '../util/ItemCardNoLink';

export default function ProjectsScreen() {

    const theme = useTheme()

    return (
        <Box sx={theme.containers.pageContainer}>

            <Box sx={{mx: '5%'}}>
                <Typography variant='h1' sx={{borderBottom: '5px solid blue', width: 'fit-content'}}>Projects</Typography>
                <Typography sx={[theme.typography.body1, {mt: '50px'}]} >
                    Here's what's currently going on in the department!
                </Typography>
                <Box sx={{mx: {lg: '10%', xl: '20%'}, mt: '30px'}}>
                    <Grid container spacing={2} columns={{xs: 1, md: 3}}>
                        <Grid size={{xs: 3, md: 1}}><ItemCardNoLink title='Development of this website' description='This website is being developed to help facilitate more efficient interaction between you and us.' /></Grid>
                        <Grid size={{xs: 3, md: 1}}><ItemCardNoLink title='Migration from Windows 10 to Windows 11' description='Support for Windows 10 ends on October 14, 2025. All of our machines will need to be upgraded to Windows 11 by this time.' /></Grid>
                        <Grid size={{xs: 3, md: 1}}><ItemCardNoLink title='More Cool Stuff' description='...' /></Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}