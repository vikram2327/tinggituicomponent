import React, { memo, useState } from "react";
import { Box, CircularProgress, Skeleton } from "@mui/material";
import { Card } from '@mui/material';
import { useEffect } from "react";
import TableContext from "./TableContext";
import TableComponent from "./TableComponent";
import EnhancedTableHeader from "./EnhancedTableHeader";

const EnhancedTable = memo(({ data, ...props }) => {

  // console.debug("EnhancedTable : props : ", props);

  const [selectedRows, setSelectedRows] = useState(new Set());
  const [selectedRowsObject, setSelectedRowsObject] = useState(new Set());
  const [rowData, setRowData] = useState([]);

  const [paginationActiveStatus, setPaginationActiveStatus] = useState(true);
  const [page, setPage] = useState(0);
  const predefinedRowPerPageOptions = [10, 50, 100];
  const [rowsPerPage, setRowsPerPage] = useState(predefinedRowPerPageOptions[0]);
  const [rowsPerPageOptions, setRowsPerPageOptions] = useState([...predefinedRowPerPageOptions]);
  const [totalCount, setTotalCount] = useState(0);

  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [initialLoad, setInitialLoad] = useState(true); 
  const skeletonItem = Array(10).fill(null);

  useEffect(function () {
    // console.debug("EnhancedTable : useEffect : pagination : props : ", props);
    if(props?.pagination !== undefined){
      setPaginationActiveStatus(props?.pagination)
    }
  },[props?.pagination])

  const handleRowSelect = (rowId, row, e) => {
    const newSelectedRows = new Set(selectedRows);
    const newSelectedRowsObj = new Set(selectedRowsObject);

    // let rowData = rowId;
    let rowDataObj = JSON.stringify(row);
    let rowData = rowId;
    if (newSelectedRows.has(rowData)) {
      newSelectedRows.delete(rowData);
      newSelectedRowsObj.delete(rowDataObj);
    } else {
      newSelectedRows.add(rowData);
      newSelectedRowsObj.add(rowDataObj);
    }
    setSelectedRows(newSelectedRows);
    setSelectedRowsObject(newSelectedRowsObj);
    tableContextData?.onSelectedRowsChange(Array.from(newSelectedRowsObj));
  };

  const handleSelectAllClick = (event) => {
    const newSelectedRows = event.target.checked ? new Set(tableContextData?.data.map((row) => row.id)) : new Set();
    setSelectedRows(newSelectedRows);
    tableContextData?.onSelectedRowsChange(Array.from(newSelectedRows));
  };


  const onPageChangeHandler = (newPage) => {
    // console.debug("EnhancedTable : onPageChangeHandler : newPage : ", newPage);
    setPage(newPage);
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    onPageChangeHandler(0);
  };

  function refreshData() {
    console.debug("refreshData CliCK Handler");
    dataRender();
  }

  function dataRender() {
    // console.debug("EnhancedTableA : useEffect");
    // console.debug("EnhancedTableA : useEffect : data : ", data);
    setLoading(true);
    setError(null);
    if (typeof data === 'function') {
      // console.debug("EnhancedTableA : useEffect : if block");
      data(page + 1, rowsPerPage).then(({ tableData, totalData }) => {
        // console.debug("EnhancedTableA : useEffect : if block : tableData : ", tableData);
        setRowData(tableData);
        setTotalCount(totalData);
        setLoading(false);
        setInitialLoad(false); // Mark the initial load as complete

        setSelectedRows(new Set());
        setSelectedRowsObject(new Set());
        
      }).catch((error) => {
        // setError(error);
        setLoading(false);
        setInitialLoad(false); // Mark the initial load as complete
      });
    } else if (Array.isArray(data)) {
      // console.debug("EnhancedTableA : useEffect : else  if block");
      const start = page * rowsPerPage;
      const end = start + rowsPerPage;
      setRowData(data.slice(start, end));
      setTotalCount(data.length);
      setLoading(false);
      setInitialLoad(false); // Mark the initial load as complete
    }
  }

  useEffect(dataRender, [page, rowsPerPage, data]);

  const tableContextData = {
    ...props,
    handleRowSelect: handleRowSelect,
    handleSelectAllClick: handleSelectAllClick,
    selectedRows: selectedRows,
    data: rowData,
    refreshData: refreshData,
    totalCount: totalCount,
    paginationActiveStatus:paginationActiveStatus,
  };

  return (
    <TableContext.Provider value={tableContextData}>
      <Box sx={{ width: "100%" }}>
        <Box>
          <Card sx={{ border: '1px solid #0000001A', padding: '1rem !important', height: "100vh !important " }}>
            <Box sx={{ mx: 1 }}>
              <EnhancedTableHeader />
              <Box sx={{ my: 2 }}>
                {initialLoad && loading
                  ?
                  skeletonItem.map((_, index) => (
                    <Skeleton key={index} sx={{ mt: 1 }} variant="rounded" width="100%" height={60} />
                  ))
                  :
                  <Box>
                    <TableComponent
                      rowsPerPage={rowsPerPage}
                      rowsPerPageOptions={rowsPerPageOptions}
                      handleChangeRowsPerPage={handleChangeRowsPerPage}
                      page={page}
                      onPageChangeHandler={onPageChangeHandler}
                    />
                    {loading && !initialLoad && (
                      <Box style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255, 255, 255, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <CircularProgress />
                      </Box>
                    )}
                  </Box>

                }

              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </TableContext.Provider>
  );
})

export default EnhancedTable;
/*
Document
in this table i give the condition if the table head have minwidth have more than 30 than i give below
tooltip condition please check 
      if (minWidth < 30) {
            return formattedLabel.slice(0, 15) + '...';
        } else if (minWidth >= 30 && formattedLabel.length > 25) {
            return formattedLabel.slice(0, 25) + '...';
        }
*/

/*
# Table Props
property | type | default value | Required |Description
onSelectedRowsChange | Funtionc | 

columns | array | []|

          loading={false}
          columns={columnsHeadings}
          data={data}
          selectableRows
          actions={<TableToolbar
            selectedRows={selectedRows}
            surveyListDataChangeHandler={surveyListDataChangeHandler}
            tableData={data}
          />}
          onSelectedRowsChange={handleRowSelected}
          // selectedRows={selectedRows}
          searchHandler={searchHandler}


## columns elaboration
label
selector
minWidth{
# In this table, we use Material-UI components, which only support the minWidth property for column headers.
#  In this table, The minWidth is applied conditionally: if a value is provided, it is used; otherwise, it defaults to inherit
}

TO Check
id
name
*/