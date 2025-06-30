import * as React from 'react'

import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import ItemCard from '../util/ItemCard';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ServicesScreen(props) {

    const { services } = props

    const [filteredServices, setFilteredServices] = React.useState(services) 
    const [filterValue, setFilterValue] = React.useState('')

    const theme = useTheme()
    const is_sm = useMediaQuery(theme.breakpoints.up('md'))

    return <Box sx={{mx: '30px', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>

    {/* TODO: search field */}
    <Box sx={{border: '3px solid red'}}>
        <Typography>Search: </Typography>
        <TextField 
            id={'services_filter'}
            label={'Search For A Service'}
            onChange={(e) => setFilteredServices(services.filter(s => s.service.toLowerCase().includes(e.target.value.toLowerCase())))}
        />
    </Box>

    <Box sx={{margin: 'auto'}}>
        
        <Grid container spacing={2}>
            
                {filteredServices.map(service => <Grid key={service.id} xs={12} md={4}><ItemCard link={service.path} title={service.service} description={service.info}/></Grid>)}
            
        </Grid>
    </Box>


    </Box>
}