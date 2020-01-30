const isDev = process.env.NODE_ENV === 'development'

const jsLoaders = () => {
  const loaders = [{
    loader: 'babel-loader'
  }]

  if (isDev) loaders.push('eslint-loader')
  return loaders
}

module.exports = jsLoaders