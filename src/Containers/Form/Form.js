// @flow
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Payment from '@material-ui/icons/Payment'

import MaskedInput from 'src/Components/MaskedInput'

const styles = theme => ({
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
  }
})

type Select = { value: string, label: string }

type Props = {
  errors: { phone: string, sum: string },
  touched: { phone: boolean, sum: boolean },
  values: { phone: string, sum: string | number, operator: string },
  handleChange: Function,
  handleBlur: Function,
  fetchList: Function,
  handleSubmit: Function,
  setFieldValue: Function,
  intl: { formatMessage: Function },
  list: Array<Select>,
  classes: {
    root: string,
    input: string,
    button: string,
    icon: string
  }
}

class Form extends Component<Props> {
  componentDidMount() {
    this.props.fetchList()
  }
  getProps = (id: string) => {
    const { errors, touched, values, handleChange, handleBlur } = this.props
    return {
      id,
      onChange: handleChange,
      onBlur: handleBlur,
      valid: Boolean(!errors[id] || !touched[id]),
      error: errors[id],
      value: values[id]
    }
  }
  render() {
    const {
      classes,
      list,
      intl,
      setFieldValue,
      values,
      handleSubmit
    } = this.props

    return (
      <Grid container spacing={16} alignItems="center" direction="column">
        <Grid item xs={12} md={6} lg={4} className={classes.root}>
          <MaskedInput
            {...this.getProps('phone')}
            mask="+7 (999) 999-99-99"
            className={classes.input}
          />

          <MaskedInput
            {...this.getProps('sum')}
            mask="9999"
            className={classes.input}
            startAdornment={
              <InputAdornment position="start">&#x20bd;</InputAdornment>
            }
          />

          <MaskedInput
            {...this.getProps('card')}
            mask="9999 9999 9999 9999"
            className={classes.input}
          />

          <MaskedInput
            {...this.getProps('cvv')}
            mask="999"
            className={classes.input}
          />

          <TextField
            id="operator"
            select
            label={intl.formatMessage({ id: 'Form.operator' })}
            className={classes.input}
            value={values.operator}
            onChange={e => setFieldValue('operator', e.target.value)}
            margin="normal"
          >
            {list.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {intl.formatMessage({ id: `Operator.${option.value}` })}
              </MenuItem>
            ))}
          </TextField>

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleSubmit}
          >
            {intl.formatMessage({ id: 'Actions.pay' })}
            <Payment className={classes.icon} />
          </Button>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Form)
