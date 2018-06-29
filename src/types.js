// @flow

export type BarProps = {
  classes: { root: string },
  pathname: string,
  goBack: Function
}

export type FormikBag = { props: { pay: Function } }

export type FormikProps = {
  location: { state: { name: string } }
}

export type FormValues = {
  sum: string,
  phone: string,
  operator: string,
  card: string,
  cvv: string
}

type Select = { value: string, label: string }

export type FormProps = {
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
  isLoading: boolean,
  classes: {
    root: string,
    input: string,
    button: string,
    icon: string,
    spinner: string
  }
}

export type Item = {
  src: string,
  name: string
}

export type MainPageProps = {
  fetchList: Function,
  list: Array<Item>,
  isLoading: boolean,
  classes: { spinner: string }
}

export type MaskedInputProps = {
  mask: string,
  id: string,
  value: string | number,
  onChange: Function,
  onBlur: Function,
  error: string,
  valid: boolean,
  className: string
}

export type MenuButtonProps = {
  handleOpen: Function,
  handleClose: Function,
  anchor: HTMLElement | null
}

export type OperatorCardProps = {
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

export type State = {
  list: Array<Item>,
  isLoading: boolean,
  router: {
    location: {
      pathname: string
    }
  }
}

export type Theme = {
  spacing: {
    unit: number
  },
  breakpoints: {
    down: Function
  }
}
