const http = require('http')

const opt = {
  host: process.env.NODEMCU_HOST,
  path: '/unlock',
  port: '80',
  method: 'POST'
};

const unlock = response => {
  const req = http.request(opt, (res) => {
    if(res && res.statusCode === 200) {
        setVal(true)
    } else setVal(false)
  })

  req.write("")
  req.end()
}

module.exports = { unlock }