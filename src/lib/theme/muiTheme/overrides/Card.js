// ----------------------------------------------------------------------

export default function Card(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          // boxShadow: theme.customShadows.card,
          boxShadow:'0px 1px 2px rgba(0, 0, 0, 0.1)',
          borderRadius: Number(theme.shape.borderRadius) * 1,
          position: 'relative',
          padding:'15px',
          zIndex: 0, // Fix Safari overflow: hidden with border radius
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: 'h6' },
        subheaderTypographyProps: { variant: 'body2' },
      },
      styleOverrides: {
        root: {
          // padding: theme.spacing(3, 3, 0),
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          // padding: theme.spacing(3),
          // paddingBottom:'1rem !important'
        },
      },
    },
  };
}
