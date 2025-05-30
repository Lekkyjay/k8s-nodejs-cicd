import request from 'supertest'
import app from './app'

describe('GET /hello', () => {
  it('should return status 200 and a response text', async () => {
    const response = await request(app).get('/api/hello')
    console.log('response.body................', response.body)
    expect(response.status).toBe(200)
    expect(response.text).toBe('Hello World!')
    expect(response.body).toEqual({})
  })
})
