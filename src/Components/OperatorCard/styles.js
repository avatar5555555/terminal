// @flow

import type { Theme } from 'src/types'

const styles = (theme: Theme) => ({
  image: {
    width: 100,
    height: 100,
    margin: theme.spacing.unit
  },
  container: {
    display: 'flex',
    flex: 1
  },
  root: {
    width: '100%'
  },
  icon: {
    marginLeft: theme.spacing.unit
  },
  button: {
    alignSelf: 'center',
    [theme.breakpoints.down('sm')]: {
      alignSelf: 'flex-end'
    }
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-end'
    }
  }
})

export default styles
