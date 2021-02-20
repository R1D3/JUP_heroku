import apisauce from 'apisauce'

export const create = (baseURL = 'http://5dbc6ea7922e.ngrok.io/api') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 100000
  })

  api.setHeader('Accept', 'application/json')

  const updateApiHeader = (headerKey, headerContent) => {
    api.setHeader(headerKey, headerContent)
  }

  const deleteApiHeader = (name) => api.deleteHeader(name)

  const testUserCode = (level, text) => api.post('/test', { level, text })

  return {
    testUserCode,
    updateApiHeader,
    deleteApiHeader
  }
}
