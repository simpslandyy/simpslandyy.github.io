const prod = process.env.NODE_ENV === 'production'

module.exports = () => {
  return { 'process.env.BACKEND_URL': prod ? '/simpslandyy.github.io' : ''}
}