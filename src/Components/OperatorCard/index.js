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

import styles from './styles'

import type { OperatorCardProps } from 'src/types'

const OperatorCard = ({ src, name, classes }: OperatorCardProps) => (
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
