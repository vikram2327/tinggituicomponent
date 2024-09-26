// prettier-ignore
// import { makeStyles, CircularProgress } from '@material-ui/core';
import { CircularProgress, Typography, makeStyles } from '@mui/material';
import React from "react";

function TableLoader(props) {
  const { customLoader, text } = props;

  return (
    <div style={{display:"flex", height:"480px",flexDirection:"column",justifyContent:"center",alignItems:"center", width:"100%"}}>
      {customLoader ?? <CircularProgress />}
      <div style={{ marginTop: 20 }} />
      {text && <Typography weight="bold">{text}</Typography>}
    </div>
  );
}

export default TableLoader;
