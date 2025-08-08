import * as React from 'react'
import { useTheme } from '@emotion/react';

import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

import ItemCard from '../util/ItemCard';

export default function NewsScreen(props) {

    const { news } = props

    const theme = useTheme()

    const [filteredNews, setFilteredNews] = React.useState(news)

    return (
        <Box sx={theme.containers.pageContainer}>

            <Box sx={theme.containers.responsiveSubContainer}>
                <Typography variant='h1' sx={{borderBottom: '5px solid blue', width: 'fit-content'}}>News</Typography>
                <Typography variant='h2' sx={{mt: '50px'}}>Search or filter results</Typography>
                <Typography variant='h3' sx={{my: '10px'}}>Enter an name or keyword to find the article you're looking for:</Typography>
                <TextField 
                    id={'news_filter'}
                    label={'Article name or keyword'}
                    onChange={(e) => setFilteredNews(news.filter(s => s.service.toLowerCase().includes(e.target.value.toLowerCase())))}
                />
            </Box>

            <Divider sx={theme.util.divider} />

            <Box sx={[theme.containers.responsiveAccentSubContainer, {minHeight: '50vh'}]}>
                <Grid container spacing={3} sx={theme.containers.gridContainer}>
                        {filteredNews.map(news => 
                            <Grid key={news.id}>
                                <ItemCard link={news.path} title={news.headline} description={news.info}/>
                            </Grid>
                        )}
                </Grid>
            </Box>
        </Box>
    )
}