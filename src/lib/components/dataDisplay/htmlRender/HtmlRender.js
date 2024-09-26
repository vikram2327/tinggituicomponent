import React from 'react';
import { Box } from '../../../utils/AllImportsHelper';

function HtmlRender({ htmlContent }) {
    return (
        <Box dangerouslySetInnerHTML={{ __html: htmlContent }}
        >
        </Box>
    );
}

export default HtmlRender;