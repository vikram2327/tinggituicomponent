import React, { useContext, useState } from "react";
import { Box, Skeleton } from '@mui/material';
import { Table } from '@mui/material';
import { TableContainer } from '@mui/material';
import { TablePagination } from '@mui/material';
import './TableComponent.css';
import TableContext from "./TableContext";
import EnhancedTableBody from "./EnhancedTableBody";
import EnhancedTableHead from "./EnhancedTableHead";
// import '../../../../../src/lib/assets/styles/Customized.css'
import '../../../assets/styles/Customized.css';


const TableComponent = ({ todoTable, ...props }) => {

    const tableContextData = useContext(TableContext);
    // console.debug("EnhancedTable : TableComponent : tableContextData : ", tableContextData);

    const pageChange = (newPage) => {
        if (props?.onPageChangeHandler !== undefined) {
            props?.onPageChangeHandler(newPage);

        }
    }
    const handleChangePage = (event, newPage) => {
        // console.debug("EnhancedTable : TableComponent : handleChangePage : newPage : ", newPage);
        if (props?.onPageChangeHandler !== undefined) {
            props?.onPageChangeHandler(newPage);
        }
    };

    return (<>
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
            {tableContextData?.columns.length > 0 ? (
                <Box>
                     <TableContainer sx={{ height:'calc(100vh - 200px)', width: '100%' }} className="tableContainner">
                    {/* <TableContainer sx={{ maxHeight: 570, width: '100%' }} className="tableContainner"> */}
                        <Table stickyHeader aria-label="sticky table" size="small">
                            <EnhancedTableHead />
                            <EnhancedTableBody />
                        </Table>
                    </TableContainer>
                    {tableContextData?.paginationActiveStatus?(
                        <TablePagination
                        rowsPerPageOptions={props?.rowsPerPageOptions}
                        component="div"
                        count={tableContextData?.totalCount}
                        rowsPerPage={props?.rowsPerPage}
                        page={props?.page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={props?.handleChangeRowsPerPage}
                    />
                    ):null}
                    
                </Box>
            ) : (
                // Render your skeleton component here
                <Skeleton variant="rectangular" width="100%" height="2rem" />
            )}
        </Box>
    </>)
}

export default TableComponent;