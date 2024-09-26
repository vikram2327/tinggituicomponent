import { Box, Checkbox, TableCell, TableHead, TableRow, Tooltip, tooltipClasses, styled } from '@mui/material';
import React, { useContext } from 'react';
import TableContext from './TableContext';



function EnhancedTableHead(props) {
    const tableContextData = useContext(TableContext);
    console.debug("EnhancedTable : EnhancedTableHead : tableContextData : ", tableContextData);

    return (
        <TableHead className='tableHead' sx={{height:'3.5rem !important'}}>
            <TableRow>
                {tableContextData.selectableRows ?
                    < TableCell
                        sx={{ backgroundColor: '#EEF6FF' }}
                    >

                        <Box>
                            {
                                !tableContextData.selectableRowsNoSelectAll ?
                                    (
                                        <Checkbox
                                            indeterminate={tableContextData?.selectedRows.size > 0 && tableContextData?.selectedRows.size < tableContextData?.data.length}
                                            checked={tableContextData?.data?.length == 0 ? false : tableContextData?.selectedRows.size === tableContextData?.data.length}
                                            // checked={tableContextData?.selectedRows.size === tableContextData?.data.length}
                                            onClick={tableContextData.handleSelectAllClick ? (e) => tableContextData.handleSelectAllClick(e) : undefined}
                                        />
                                    )
                                    : ""
                            }

                        </Box>
                    </TableCell>
                    : ""}
                {tableContextData?.columns?.map((column, index) => {
                    let sx = { backgroundColor: '#EEF6FF' };
                    if (column.frozenAt) {
                        sx['left'] = column.frozenAt;
                    }
                    return (

                        (
                            // <></>

                            <TableCell
                                className={column.frozen ? 'sticky' : ''}
                                sx={sx}
                                key={index}
                                align={column.align}
                                style={{
                                    textAlign:'center',
                                    minWidth: column?.minWidth || "inherit",
                                    color: "black", backgroundColor: '#EEF6FF',
                                }}
                            >
                                {column.label}
                            </TableCell>
                        )
                    )
                })}
            </TableRow>
        </TableHead>
    );
}

export default EnhancedTableHead;