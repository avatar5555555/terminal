// @flow

import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import InputAdornment from '@material-ui/core/InputAdornment'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Payment from '@material-ui/icons/Payment'
import CircularProgress from '@material-ui/core/CircularProgress'

import MaskedInput from 'src/Components/MaskedInput'
import type { FormProps } from 'src/types'

class Form extends Component<FormProps> {
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
      handleSubmit,
      isLoading
    } = this.props

    return (
      <Grid container spacing={16} alignItems="center" direction="column">
        {isLoading ? (
          <CircularProgress
            id="spinner"
            size={70}
            className={classes.spinner}
          />
        ) : (
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
        )}
      </Grid>
    )
  }
}

export default Form
