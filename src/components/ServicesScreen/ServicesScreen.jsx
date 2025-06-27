import { Routes, Route } from 'react-router'

import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from '@mui/material/Grid';

import ServiceCard from "./ServiceCard"
import VPNServiceScreen from "./Services/VPNServiceScreen"

const services = [
  {id: 0, service: 'VPN', path: '/services/vpn', element: <VPNServiceScreen />, info: 'WatchGuard Mobile VPN allows you to access company resources from almost anywhere—provided you have an internet connection.'},
  {id: 1, service: 'VPN', path: '/services/vpn', element: <VPNServiceScreen />, info: 'WatchGuard Mobile VPN allows you to access company resources from almost anywhere—provided you have an internet connection.'},
  {id: 2, service: 'VPN', path: '/services/vpn', element: <VPNServiceScreen />, info: 'WatchGuard Mobile VPN allows you to access company resources from almost anywhere—provided you have an internet connection.'},
  {id: 3, service: 'VPN', path: '/services/vpn', element: <VPNServiceScreen />, info: 'WatchGuard Mobile VPN allows you to access company resources from almost anywhere—provided you have an internet connection.'},
]

export default function ServicesScreen() {

    return <Box>

    {/* TODO: search field */}

    <Grid container spacing={2} sx={{margin: '30px'}}>
        {services.map(service => <ServiceCard key={service.id} service={service} />)}
    </Grid>

    <Routes>
        {services.map(service => <Route key={service.id} path={service.path} element={service.element}/>)}
    </Routes>

    </Box>
}