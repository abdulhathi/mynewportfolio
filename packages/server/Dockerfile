FROM oven/bun:1 AS base

WORKDIR /app

COPY package.json bun.lockb* ./
RUN bun install

# Copy app
COPY . .

EXPOSE 4000

CMD [ "bun", "run", "dev" ]