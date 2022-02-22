import { createTheme, adaptV4Theme } from '@mui/material/styles';
import Colors from './data/colors.json'

export default createTheme(adaptV4Theme({
  typography: {
    allVariants: {
      fontFamily:
        "'Jost*', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
  },
  palette: {
    primary: {
      main: Colors.primaryBlue,
    },
    secondary: {
      main: Colors.primaryRed,
    },
  },
  props: {
    MuiChip: {
      variant: 'outlined',
    },
  },
}))
