import * as React from 'react'

import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

import { useTheme } from '@emotion/react';

import ItemCard from '../util/ItemCard';

export default function CybersecurityScreen(props) {

    const { cybersecurity } = props

    const theme = useTheme()

    const [filteredCybersecurity, setFilteredCybersecurity] = React.useState(cybersecurity)

    return (
        <Box sx={theme.containers.pageContainer}>

            <Box sx={theme.containers.responsiveSubContainer}>
                <Typography variant='h1' sx={{borderBottom: '5px solid blue', width: 'fit-content'}}>Cybersecurity</Typography>
                <Typography variant='h2' sx={{mt: '50px'}}>Search or filter results</Typography>
                <Typography variant='h3' sx={{my: '10px'}}>Enter an name or keyword to find the article you're looking for:</Typography>
                <TextField 
                    id={'cybersecurity_filter'}
                    label={'Article name or keyword'}
                    onChange={(e) => setFilteredCybersecurity(cybersecurity.filter(s => s.service.toLowerCase().includes(e.target.value.toLowerCase())))}
                />
            </Box>

            <Divider sx={theme.util.divider} />

            <Box sx={theme.containers.responsiveSubContainer}>
                <Grid container spacing={3} sx={theme.containers.gridContainer}>
                        {filteredCybersecurity.map(cybersecurity => 
                            <Grid key={cybersecurity.id}>
                                <ItemCard link={cybersecurity.path} title={cybersecurity.headline} description={cybersecurity.info}/>
                            </Grid>
                        )}
                </Grid>
            </Box>
        </Box>
    )

    // const theme = useTheme()

    // return (
    //     <Box sx={theme.containers.pageContainer}>

    //         <Box sx={theme.containers.responsiveSubContainer}>
    //             <Typography variant='h1' sx={{borderBottom: '5px solid blue', width: 'fit-content'}}>Cybersecurity</Typography>
    //             <Typography sx={[theme.typography.body1, {mt: '50px'}]} >
    //                 Cybersecurity is essential for protecting sensitive information, maintaining privacy, and ensuring the integrity of digital systems.
    //                 As we increasingly rely on technology, cyber threats like hacking, data breaches, and ransomware attacks pose serious risks.
    //                 Strong cybersecurity practices not only prevent financial loss and reputational damage but also help maintain trust in digital infrastructure and allow us to stay safely connected.
    //             </Typography>
    //         </Box>

    //         <Divider sx={theme.util.divider} />

    //         <Box sx={theme.containers.responsiveSubContainer}>
    //             <Grid container spacing={3} sx={theme.containers.gridContainer}>
    //                 <Grid><ItemCardNoLink title='Phishing' description='...' /></Grid>
    //                 <Grid><ItemCardNoLink title='Safe Browsing' description='...' /></Grid>
    //                 <Grid><ItemCardNoLink title='Best Password Practices' description='...' /></Grid>
    //                 <Grid><ItemCardNoLink title='Protecting Less Tech-Savvy Loved Ones' description='Steps to take if you have someone in your life who is at higher risk of being a target and falling for digital scams.' /></Grid>
    //             </Grid>
    //         </Box>
    //     </Box>
    // )

}