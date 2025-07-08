import React from 'react';
import Markdown from 'react-markdown'

import Box from "@mui/material/Box";

export default function RenderMarkdown(props) {
    const { markdown } = props

    
    return (
        <Box sx={{mx: {lg: '10%', xl: '20%'}, my: '60px'}}>
            <Markdown>{markdown}</Markdown>
        </Box>
    )

}