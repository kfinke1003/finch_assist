import * as React from 'react'
import { useTheme } from '@emotion/react';

import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

import ItemCard from '../util/ItemCard';

export default function ServicesScreen(props) {

    const { services } = props

    const theme = useTheme()

    const [filteredServices, setFilteredServices] = React.useState(services)

    return (
        <Box sx={theme.containers.pageContainer}>

            <Box sx={{mx: '5%'}}>
                <Typography variant='h1' sx={{borderBottom: '5px solid blue', width: 'fit-content'}}>Services</Typography>
                <Typography variant='h2' sx={{mt: '50px'}}>Search or filter results</Typography>
                <Typography variant='h3' sx={{my: '10px'}}>Enter a service name or keyword to find the service you're looking for:</Typography>
                <TextField 
                    id={'services_filter'}
                    label={'Service name or keyword'}
                    onChange={(e) => setFilteredServices(services.filter(s => s.service.toLowerCase().includes(e.target.value.toLowerCase())))}
                />
            </Box>

            <Divider sx={{my: '30px'}} />

            <Box sx={{mx: {lg: '10%', xl: '20%'}}}>
                <Grid container spacing={2} columns={{xs: 1, md: 3}}>
                        {filteredServices.map(service => <Grid key={service.id} size={{xs: 3, md: 1}}><ItemCard link={service.path} title={service.service} description={service.info}/></Grid>)}
                </Grid>
            </Box>
        </Box>
    )
}