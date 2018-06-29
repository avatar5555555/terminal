// @flow

import type { Theme } from 'src/types'

const styles = (theme: Theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: theme.spacing.unit,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-center'
    }
  },
  input: {
    margin: theme.spacing.unit,
    width: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  button: {
    alignSelf: 'flex-end',
    margin: theme.spacing.unit,
    [theme.breakpoints.down('sm')]: {
      width: '94%'
    }
  },
  icon: {
    marginLeft: theme.spacing.unit
  },
  spinner: {
    marginTop: theme.spacing.unit * 10
  }
})

export default styles
