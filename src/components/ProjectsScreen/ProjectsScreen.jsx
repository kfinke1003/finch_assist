import * as React from 'react'

import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import { useTheme } from '@emotion/react';

import ItemCardNoLink from '../util/ItemCardNoLink';

export default function ProjectsScreen() {

    const theme = useTheme()

    return (
        <Box sx={theme.containers.pageContainer}>

            <Box sx={theme.containers.responsiveSubContainer}>
                <Typography variant='h1' sx={{borderBottom: '5px solid blue', width: 'fit-content'}}>Projects</Typography>
                <Typography sx={[theme.typography.body1, {mt: '50px'}]} >
                    Here's what's currently going on in the department!
                </Typography>
            </Box>

            <Divider sx={theme.util.divider} />

            <Box sx={theme.containers.responsiveSubContainer}>
                <Grid container spacing={3} sx={theme.containers.gridContainer}>
                    <Grid><ItemCardNoLink title='Development of this website' description='This website is being developed to help facilitate more efficient interaction between you and us.' /></Grid>
                    <Grid><ItemCardNoLink title='Migration from Windows 10 to Windows 11' description='Support for Windows 10 ends on October 14, 2025. All of our machines will need to be upgraded to Windows 11 by this time.' /></Grid>
                    <Grid><ItemCardNoLink title='More Cool Stuff' description='...' /></Grid>
                </Grid>
            </Box>
        </Box>
    )
}