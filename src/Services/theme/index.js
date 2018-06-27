import { createMuiTheme } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'
import grey from '@material-ui/core/colors/grey'

const colors = {
  palette: {
    primary: {
      main: green[500],
      dark: green[700],
      light: green[200],
      contrastText: '#fff'
    },
    secondary: {
      main: grey[500],
      dark: grey[700],
      light: grey[300],
      contrastText: '#fff'
    }
  }
}

const theme = createMuiTheme(colors)

export default theme
