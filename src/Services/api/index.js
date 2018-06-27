const fakeData = [
  { name: 'mts', src: '/Images/mts.png' },
  { name: 'beeline', src: '/Images/beeline.png' },
  { name: 'megafon', src: '/Images/megafon.png' },
  { name: 'other', src: '/Images/other.png' }
]

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
