import React, { useContext } from 'react';
import EnhancedTableToolbar from './TableToolbar';
import TableContext from './TableContext';
import { Box,Skeleton } from "@mui/material";

function EnhancedTableHeader(props) {
    const tableContextData = useContext(TableContext);
    console.debug("a1", tableContextData?.columns)
    console.debug("EnhancedTable : EnhancedTableHeader : tableContextData : ", tableContextData);
    return (
        <Box>

           { tableContextData?.columns?.length > 0 ? (
            <EnhancedTableToolbar
                className="bg-white"
                // numSelected={selected.length}
                // tableContextData={selected.length}
            />
               ) : (
        // Render your skeleton component here
        <Skeleton variant="rectangular" width="100%" height="2rem" />
      )}
        </Box>
    );
}

export default EnhancedTableHeader;