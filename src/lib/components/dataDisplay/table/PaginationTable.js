import React from 'react';
import { Pagination } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Select } from '@mui/material';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
function PaginationTable(props) {
    const onPageChange = (event, value) => {
        if (event.target.innerText) {
            props.setPageNo(event.target.innerText)
        } else {
            props.setPageNo(value)
        }
    }
    const handleChange = (e) => {
        props.setMaterialTableRowLimit(e.target.value)
    };
    return (
        <div className="row justify-content-between align-items-baseline px-4">
            <div className='d-flex align-items-baseline col-md-4'>
                <Select
                    className=' m-4 selectMui'
                    defaultValue={props.setmaterialTableRowLimit ? props.setmaterialTableRowLimit : 10}
                    label={false}
                    sx={{
                        '& legend': { display: 'none' },
                        '& fieldset': { top: 0 },
                    }}
                    // InputLabelProps={{
                    //     shrink: false,
                    //   }}
                    onChange={handleChange} >
                    <MenuItem value={10} >10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={40}>40</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                </Select>
                {/* <p className='d-flex align-items-center'>Showing {props.toFromPage} to {props.rowsPerPage} of {props.totalPage} entities</p> */}
                <p className='fs-14 fw-400 color-page'>Showing {props.toFromPage} to {props.todata} of {props.totalPage} entries</p>
            </div>
            <div className='col-md-7 '>
                <Pagination
                    className="paginationStack d-flex justify-content-end customizePagination" size='large'
                    boundaryCount={1} count={props.lastPage} onChange={onPageChange} variant="outlined" shape="rounded"
                />
            </div>
        </div>
    );
}

export default PaginationTable;