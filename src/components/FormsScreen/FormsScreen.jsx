import * as React from 'react'
import { useTheme } from '@emotion/react';

import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

import ItemCardExternal from '../util/ItemCardExternal.jsx';

export default function FormsScreen(props) {

    const { forms } = props

    const theme = useTheme()

    const [filteredForms, setFilteredForms] = React.useState(forms)

    return (
        <Box sx={theme.containers.pageContainer}>

            <Box sx={theme.containers.responsiveSubContainer}>
                <Typography variant='h1' sx={{borderBottom: '5px solid blue', width: 'fit-content'}}>Forms</Typography>
                <Typography variant='h2' sx={{mt: '50px'}}>Search or filter results</Typography>
                <Typography variant='h3' sx={{my: '10px'}}>Enter a form name or keyword to find the form you're looking for:</Typography>
                <TextField 
                    id={'forms_filter'}
                    label={'Form name or keyword'}
                    onChange={(e) => setFilteredForms(forms.filter(f => f.form.toLowerCase().includes(e.target.value.toLowerCase())))}
                />
            </Box>

            <Divider sx={theme.util.divider} />

            <Box sx={[theme.containers.responsiveAccentSubContainer, {minHeight: '50vh'}]}>
                <Grid container spacing={3} sx={theme.containers.gridContainer}>
                        {filteredForms.map(form => <Grid key={form.id}><ItemCardExternal link={form.path} title={form.form} description={form.info}/></Grid>)}
                </Grid>
            </Box>
        </Box>
    )
}