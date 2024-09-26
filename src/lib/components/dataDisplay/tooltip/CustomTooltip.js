import React from 'react';
import {Typography,styled} from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

function CustomTooltip(props) {
  // const HtmlTooltip = styled(({ className, ...props }) => (
  //   <Tooltip {...props} classes={{ popper: className }} enterNextDelay={500} />
  // ))(({ theme }) => ({
  //   [`& .${tooltipClasses.tooltip}`]: {
  //     backgroundColor: "black",
  //     color: ' #fff',
  //     maxWidth: 400,
  //     fontSize: theme.typography.pxToRem(16),
  //     border: '1px solid #dadde9',
  //   },
  //   arrow: {
  //     color: "black",
  //     backgroundColor: "black"
  //     // border: '1px solid #E6E8ED',
  //   },
  // }));
  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} disableInteractive />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));
  return (
    <BootstrapTooltip
      title={
        <React.Fragment>
          <Typography fontSize={props.fontSize} >{props.title}</Typography>
        </React.Fragment>
      }
      arrow
      placement={props.placement}
    >
      {props.children}
    </BootstrapTooltip>
  );
}

export default CustomTooltip;