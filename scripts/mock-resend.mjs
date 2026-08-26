import { createServer } from 'node:http'

const port = Number(process.env.MOCK_RESEND_PORT || 3199)
const fail = process.env.MOCK_RESEND_FAIL === '1'

createServer((request, response) => {
  let body = ''
  request.on('data', (chunk) => {
    body += chunk
  })
  request.on('end', () => {
    if (request.method !== 'POST' || !request.url?.endsWith('/emails')) {
      response.writeHead(404, { 'Content-Type': 'application/json' })
      response.end(JSON.stringify({ message: 'Not found' }))
      return
    }
    if (fail) {
      response.writeHead(500, { 'Content-Type': 'application/json' })
      response.end(JSON.stringify({ message: 'Mock provider failure' }))
      return
    }
    const parsed = JSON.parse(body || '{}')
    if (!parsed.from || !parsed.to || !parsed.subject) {
      response.writeHead(422, { 'Content-Type': 'application/json' })
      response.end(JSON.stringify({ message: 'Missing email fields' }))
      return
    }
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify({ id: 'mock-email-id' }))
  })
}).listen(port, '127.0.0.1', () => {
  console.log(`Mock Resend ${fail ? 'failure' : 'success'} provider listening on ${port}`)
})
