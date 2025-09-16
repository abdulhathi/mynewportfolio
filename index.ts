import concurrently from 'concurrently'

concurrently([
  {
    name: 'portfolio-server',
    command: 'bun run dev',
    cwd: 'packages/server',
    prefixColor: 'orange',
  },
  {
    name: 'portfolio-client',
    command: 'bun run dev',
    cwd: 'packages/client',
    prefixColor: 'blue',
  },
])
