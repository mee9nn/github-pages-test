import { http, HttpResponse } from 'msw'

const users = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor' },
  { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'Viewer' },
]

export const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json(users)
  }),

  http.get('/api/users/:id', ({ params }) => {
    const user = users.find((u) => u.id === Number(params.id))
    if (!user) {
      return HttpResponse.json({ message: 'User not found' }, { status: 404 })
    }
    return HttpResponse.json(user)
  }),
]
