import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, IconButton, styled, Paper, Typography, FormControl, Grid, InputAdornment, Stack, TextField } from "@mui/material";
import CustomTooltip from "../tooltip/CustomTooltip";
import FilterListIcon from '@mui/icons-material/FilterList';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import TableContext from "./TableContext";
import SearchIcon from '@mui/icons-material/Search';
import TableBotton from "./TableBotton";
import { modeBasedDataProcessor } from "../../../utils/developmentMode";


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const EnhancedTableToolbar = (props) => {
  // const { numSelected } = props;

  const tableContextData = useContext(TableContext);
  console.debug("EnhancedTableToolbar : tableContextData : ", tableContextData);
  // console.log('c2', tableContextData)
  const tableActionHandler = (d) => {
    switch (d.type) {
      case "button":
        return (
          // <>c</>/
          <Item className={d.disabled == true ? "shadow-none buttonPadding" : "shadow-none buttonPadding"} id={d.id} >
            {d.disabled == true ?
              <CustomTooltip title={"The employee has not completed 90 days, so you can neither change the status nor export the data."} fontSize={16} placement="top" >
                <IconButton className={d.classes} >
                  {d.disabledIcon}
                  <h6 className="m-0 pl-2 fs-15 fw-550 text-nowrap">  {d.label}</h6>
                </IconButton>
              </CustomTooltip> :
              <IconButton className={d.classes} onClick={d.clickHandler} >
                {d.buttonIcon}
                <h6 className="m-0 pl-2 fs-15 fw-550 text-nowrap">{d.label}</h6>
              </IconButton>
            }
          </Item>
        );
        break;
      case "component":
        return d.component;
        break;
      case "icon":
        return (
          <Item className="shadow-none buttonPadding" id={d.id}>
            <CustomTooltip title={d.label} fontSize={16} placement="top">
              <IconButton className={d.classes} onClick={d.clickHandler}>
                {d.icon}
              </IconButton>
            </CustomTooltip>
          </Item>
        );
        break;
      default:
        return "default";
    }
  };
  const tableToolbarHandler = (d) => {
    switch (d.type) {
      case "icon":
        return (
          <Item className="shadow-none buttonPadding" id={d.id}>
            <CustomTooltip title={d.label} fontSize={16} placement="top">
              {/* <Tooltip title={d.label} sx={{ bgcolor: "black", color: "white",  fontSize: 50,padding:2 }}> */}
              <IconButton onClick={d.clickHandler} className={d.classes}>
                {d.icon}
              </IconButton>
            </CustomTooltip>
          </Item>
        );
        break;
      case "button":
        return (
          <Item className="shadow-none buttonPadding" id={d.id}>

            <IconButton className={d.classes} onClick={d.clickHandler} disabled={d.disabled}>
              {d.buttonIcon}
              <h5 className="m-0 pl-2 text-nowrap">  {d.label}</h5>
            </IconButton>
          </Item>
        );
        break;
      case "component":
        return d.component;
        break;
      default:
        return "default";
    }
  };

  const [showClearIcon, setShowClearIcon] = useState("none");


  const processedSearchHandler = modeBasedDataProcessor(
    <FormControl>
      <TextField
        size="small"
        variant="outlined"
        onChange={(e) => { tableContextData.searchHandler(e.target.value, e) }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ borderRadius: '3rem' }}>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );

  const processedColumnButton = modeBasedDataProcessor(
    <Button variant="text" startIcon={<ViewColumnIcon />} sx={{ color: 'black' }}>
      Column
    </Button>
  );

  const processedFilterButton = modeBasedDataProcessor(
    <Button variant="text" startIcon={<FilterListIcon />} sx={{ color: 'black' }}>
      Filter
    </Button>
  );

  return (
    <Box sx={{ pt: 2 }}>
      <Grid container spacing={2}>
        {tableContextData?.selectedRows?.size > 0 ?
          <Grid item xs={6}>
            <Box sx={{ display: "flex", alignItems: "center", }}  >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {tableContextData.selectedRows.size + ' Item Selected'}
                {tableContextData?.actions !== undefined && tableContextData?.actions !== null && tableContextData?.refreshData !== undefined && tableContextData?.refreshData !== null ?
                  // <tableContextData.actions refreshData={tableContextData.refreshData} />
                  React.cloneElement(tableContextData.actions, { refreshData: tableContextData.refreshData })
                  : null
                }
              </Box>

            </Box>
          </Grid> :
          <Grid item xs={12} sx={{ pt: '0px !important' }}>
            <Box
              sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
            >
              <Box>
                <Typography variant="h6" color='text.primary'>{tableContextData?.title}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {tableContextData?.searchHandler &&
                  <Box sx={{ display: 'flex' }}>
                    <Box>
                      {processedSearchHandler}
                    </Box>
                    {/* <Box>
                      <FormControl >
                        <TextField
                          size="small"
                          variant="outlined"
                          onChange={(e) => { tableContextData.searchHandler(e.target.value, e) }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start" sx={{ borderRadius: '3rem' }}>
                                <SearchIcon />
                              </InputAdornment>
                            ),

                          }}
                        />
                      </FormControl>
                    </Box> */}
                    <Box sx={{ ml: 2 }}>
                      {processedColumnButton}
                    </Box>
                    <Box sx={{ ml: 2 }}>
                      {processedFilterButton}
                    </Box>
                    {/* <Box sx={{ ml: 2 }}>
                      <Button variant="text" startIcon={<ViewColumnIcon />} sx={{ color: 'black' }}>
                        Column
                      </Button>
                    </Box>
                    <Box sx={{ ml: 2 }}>
                      <Button variant="text" startIcon={<FilterListIcon />} sx={{ color: 'black' }}>
                        Filter
                      </Button>
                    </Box> */}
                  </Box>
                }
              </Box>
            </Box>
          </Grid>}
      </Grid>
    </Box>
  );
};

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

export default EnhancedTableToolbar;
