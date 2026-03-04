import * as React from 'react'
import { useTheme } from '@emotion/react';

import Typography from "@mui/material/Typography"
import Link from '@mui/material/Link';
import Box from "@mui/material/Box"
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

import BenefitCardExternal from '../util/BenefitCardExternal.jsx';

export default function LinksScreen(props) {

    const { links } = props

    const theme = useTheme()

    const [filteredLinks, setFilteredLinks] = React.useState(links)

    return (
        <Box sx={theme.containers.pageContainer}>

            <Box sx={theme.containers.responsiveSubContainer}>
                <Typography variant='h1' sx={{borderBottom: '5px solid blue', width: 'fit-content'}}>Links</Typography>
                <Typography variant='h3' sx={{my: '20px'}}>Click on a tile to go to the listed website.</Typography>
                <Link variant='h3' href={'/pdf/2026_BradfordWhite_BenefitGuide_Updated.pdf'}>Benefits Guide PDF</Link>
                <Typography variant='h2' sx={{mt: '30px'}}>Search or filter results</Typography>
                <Typography variant='h3' sx={{my: '10px'}}>Enter a name or keyword to find the link you're looking for:</Typography>
                <TextField 
                    id={'links_filter'}
                    label={'Link name or keyword'}
                    onChange={(e) => setFilteredLinks(links.filter(l => {
                        return l.title.toLowerCase().includes(e.target.value.toLowerCase()) || l.info.toLowerCase().includes(e.target.value.toLowerCase()) || l.benefit.toLowerCase().includes(e.target.value.toLowerCase())
                    }))}
                />
            </Box>

            <Divider sx={theme.util.divider} />

            <Box sx={[theme.containers.responsiveAccentSubContainer, {minHeight: '50vh'}]}>
                <Grid container spacing={3} sx={theme.containers.gridContainer}>
                        {filteredLinks.map(link => <Grid key={link.id}><BenefitCardExternal link={link.path} title={link.title} benefit={link.benefit} phone={link.phone} description={link.info}/></Grid>)}
                </Grid>
            </Box>
        </Box>
    )
}