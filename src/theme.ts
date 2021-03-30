import { createMuiTheme } from '@material-ui/core'

export default createMuiTheme({
  typography: {
    allVariants: {
      fontFamily:
        "'Jost*', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
  },
  palette: {
    primary: {
      main: '#51c5dd',
    },
    secondary: {
      main: '#f76076',
    },
  },
  props: {
    MuiChip: {
      variant: 'outlined',
    },
  },
})
