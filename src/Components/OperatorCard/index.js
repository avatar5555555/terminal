// @flow

import React from 'react'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Send from '@material-ui/icons/Send'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

type Props = {
  src: string,
  name: string,
  classes: {
    image: string,
    container: string,
    root: string,
    icon: string,
    button: string,
    content: string
  }
}

const styles = theme => ({
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

const OperatorCard = ({ src, name, classes }: Props) => (
  <Grid item xs={12} md={6} lg={4} className={classes.root}>
    <Card>
      <div className={classes.container}>
        <CardMedia image={src} title={name} className={classes.image} />
        <CardContent className={classes.content}>
          <Typography variant="button">
            <FormattedMessage id={`Operator.${name}`} />
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            component={Link}
            to={{ pathname: '/payment', state: { name } }}
          >
            <FormattedMessage id="Actions.pay" />
            <Send className={classes.icon} />
          </Button>
        </CardContent>
      </div>
    </Card>
  </Grid>
)

export default withStyles(styles)(OperatorCard)
