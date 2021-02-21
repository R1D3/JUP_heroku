import apisauce from 'apisauce'

const devApi = process.env.NODE_ENV !== 'production' ? 'http://localhost:8000' : ''

export const create = (baseURL = devApi + '/api') => {
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
