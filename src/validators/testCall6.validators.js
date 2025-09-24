
export default ({
  body: {
    username: { regex: /^[a-zA-Z0-9_]{3,}$/, message: 'Username must be alphanumeric, min 3 chars' },
    email: { regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email format' },
    password: { regex: /^.{6,}$/, message: 'Password must be at least 6 characters' }
  },
  // header: {
  //   'x-auth': { regex: /^Bearer\s.+$/, message: 'Auth header must be in Bearer format' }
  // },
  // cookie: {
  //   session: { regex: /^[A-Za-z0-9_-]{10,}$/, message: 'Invalid session cookie' }
  // }
})