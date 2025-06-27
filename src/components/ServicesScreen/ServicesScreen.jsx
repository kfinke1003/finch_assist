import { Outlet } from 'react-router'

import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from '@mui/material/Grid';

import ServiceCard from "./ServiceCard"
import ItemCard from '../util/ItemCard';

export default function ServicesScreen(props) {

    const { services } = props

    return <Box>

    {/* TODO: search field */}

    <Grid container spacing={2} sx={{margin: '30px'}}>
        {/* {services.map(service => <ServiceCard key={service.id} service={service} />)} */}
        {services.map(service => <ItemCard key={service.id} link={service.path} title={service.service} description={service.info} gridSize={4} />)}
    </Grid>

    <Outlet />

    </Box>
}