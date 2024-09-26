import React, { useContext } from 'react';
import { TableBody } from '@mui/material';
import TableContext from './TableContext';
import { Box, Checkbox, TableCell, TableRow, Typography } from '@mui/material';
import TableLoader from './TableLoader';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#347edd',
        color: '#ffffff',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: '#347edd',
    },
}));

function EnhancedTableBody(props) {
    const tableContextData = useContext(TableContext);
    console.debug("EnhancedTable : EnhancedTableBody : tableContextData : ", tableContextData);
    return (
        
        <TableBody className='tableBody'>
            {
                tableContextData.loading && !tableContextData?.data.length
                    ?
                    <TableRow>
                        <TableCell colSpan={tableContextData?.columns?.length} align="center">
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "480px" }}>
                                <TableLoader text="Fetching Table data ..." />
                            </Box>
                        </TableCell>
                    </TableRow>
                    :

                    (tableContextData?.data.length ?

                        (
                            tableContextData.data).map(
                                (row, index) => (
                                    // <Box>h</Box>
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        {console.debug("EnhancedTable : EnhancedTableBody : row : ", row)}
                                        {console.debug("EnhancedTable : EnhancedTableBody : row : column : ", tableContextData.columns)}
                                        {tableContextData.selectableRows ?
                                            < TableCell
                                            // className={column.frozen ? 'sticky' : ''}
                                            // sx={sx}
                                            // key={column.id}
                                            // align={column.align}
                                            >
                                                <Box>
                                                    <Checkbox
                                                        checked={tableContextData?.selectedRows.has(row.id)}
                                                        onClick={tableContextData.handleRowSelect ? (e) => tableContextData.handleRowSelect(row.id, row, e) : undefined}
                                                    />
                                                </Box>
                                            </TableCell>
                                            : ""}

                                        {tableContextData?.columns?.map((column) => {
                                            const value = (column?.selector != null) ? (typeof column.selector === 'function'?column.selector(row):row[column.selector]): (tableContextData.defaultEmptyCell ? tableContextData.defaultEmptyCell : "-");
                                            { console.debug("EnhancedTable : EnhancedTableBody : row : column : value :", value) }
                                            let sx = { borderBottom: '1px solid rgba(0, 0, 0, 0.1)' };
                                            if (column.frozenAt) {
                                                sx['left'] = column.frozenAt;
                                            }
                                            return (
                                                <TableCell
                                                    sx={sx}
                                                    key={column.id}
                                                    style={{textAlign:'center'}}
                                                >
                                                    {value?.length > 20 ? (
                                                <LightTooltip title= {value} arrow>
                                                    {value?.substring(0, 20) + '...'}
                                                </LightTooltip>
                                            ) : (
                                                value
                                            )}
                                                   
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                )
                            )
                        :
                        (
                            <TableRow>
                                <TableCell colSpan={tableContextData?.columns?.length} align="center">
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "480px" }}>
                                        <Typography>No Data Found</Typography>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        )
                    )
            }
        </TableBody >
    );
}

export default EnhancedTableBody;