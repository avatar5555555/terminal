const fakeData = [{ name: '', src: '' }]

const api = {}

api.getOperatorsList = () =>
  new Promise(resolve => {
    setTimeout(() => resolve(fakeData), 500)
  })

api.postPayment = () =>
  new Promise((resolve, reject) => {
    const randomNumber = Math.round(Math.random() * 10)

    if (randomNumber >= 3) return resolve()

    reject()
  })

export default api
