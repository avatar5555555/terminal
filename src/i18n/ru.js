const ru = {
  Operator: {
    mts: 'МТС',
    beeline: 'Билайн',
    megafon: 'Мегафон',
    other: 'Другой оператор'
  },
  Actions: {
    pay: 'Оплатить'
  },
  Title: 'Терминал',
  Form: {
    phone: 'Номер телефона',
    sum: 'Сумма',
    cvv: 'cvv',
    card: 'Номер карты',
    operator: 'Оператор'
  },
  Errors: {
    invalidPhone: 'Неверный номер телефона',
    required: 'Необходимо ввести',
    minSum: 'Минимальная сумма 1 рубль',
    maxSum: 'Максимальная сумма 1000 рублей',
    invalidCard: 'Неверный номер карты',
    invalidCvv: 'Неверный cvv',
    serverError: 'На сервере произошла ошибка, пожалуйста повторите платеж'
  },
  Successes: {
    payment: 'Платеж успешно проведен'
  }
}

export default ru
