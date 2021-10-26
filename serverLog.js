module.exports = (req, res, next) => {
  const { method, url } = req

  console.log(` $ API Server: ${method} ${req.get('host')} ${url} ${new Date()}`)

  next()
}
