import React from 'react';
import { useTheme } from '@emotion/react';
import Markdown from 'react-markdown'

import Box from "@mui/material/Box";

export default function RenderMarkdown(props) {
    const { markdown, w, h } = props

    const width = w ? w : 'auto'
    const height = h ? h : 'auto'

    const theme = useTheme();

    const components = {
        img:({node,...props})=><img style={{...theme.util.markdownImage, width: width, height: height}}{...props}/>,
        blockquote:({node,...props})=><blockquote style={{...props.style, borderLeft: '5px solid blue', padding: '1px 0px 1px 20px'}}{...props}/>
    }
    
    return (
        <Box sx={[theme.containers.pageContainer, {mb: '60px'}]}>
            <Box sx={theme.containers.responsiveSubContainer}>
                <Markdown components={components}>{markdown}</Markdown>
            </Box>
        </Box>
    )
}