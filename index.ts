import concurrently from 'concurrently'

concurrently([
  {
    name: 'portfolio-client',
    command: 'bun run dev',
    cwd: 'packages/portfolio-client',
    prefixColor: 'blue',
  },
])
