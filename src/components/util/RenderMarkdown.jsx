import React from 'react';
import { useTheme } from '@emotion/react';
import Markdown from 'react-markdown'

import Box from "@mui/material/Box";

export default function RenderMarkdown(props) {
    const { markdown } = props

    const theme = useTheme();
    
    return (
        <Box sx={[theme.containers.pageContainer, {mb: '60px'}]}>
            <Box sx={theme.containers.responsiveSubContainer}>
                <Markdown components={{img:({node,...props})=><img style={theme.util.markdownImage}{...props}/>}}>{markdown}</Markdown>
            </Box>
        </Box>
    )
}