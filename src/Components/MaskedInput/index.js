// @flow

import React from 'react'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import InputMask from 'react-input-mask'
import { FormattedMessage } from 'react-intl'

import type { MaskedInputProps } from 'src/types'

export const MInput = (props: {}) => (
  <InputMask {...props} alwaysShowMask={false} maskChar="" />
)

const MaskedInput = (props: MaskedInputProps) => {
  const { mask, id, valid, error, className, ...rest } = props
  return (
    <FormControl className={className}>
      <InputLabel htmlFor={id} error={!valid}>
        <FormattedMessage id={`Form.${id}`} />
      </InputLabel>
      <Input
        {...rest}
        id={id}
        inputComponent={MInput}
        inputProps={{ mask }}
        error={!valid}
      />
      {!valid && (
        <FormHelperText error={!valid} id={`${id}-helper-text`}>
          <FormattedMessage id={`Errors.${error}`} />
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default MaskedInput
