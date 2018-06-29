import fakeData from 'src/fakeData'

const api = {}

api.getOperatorsList = () =>
  new Promise(resolve => {
    setTimeout(() => resolve(fakeData), 500)
  })

api.postPayment = () =>
  new Promise((resolve, reject) => {
    const randomNumber = Math.round(Math.random() * 10)

    if (randomNumber >= 3) return resolve()

    reject('There is some troubles on server side')
  })

export default api
