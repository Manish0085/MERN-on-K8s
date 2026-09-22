FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Receive Vite variable from docker-compose build args
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Vite embeds VITE_API_URL into the production JavaScript
RUN npm run build


FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/vite.config.js ./vite.config.js

RUN addgroup -S appgroup && \
    adduser -S appuser -G appgroup && \
    mkdir -p /app/node_modules/.vite-temp && \
    chown -R appuser:appgroup /app

USER appuser

EXPOSE 5173

CMD ["npx", "vite", "preview", "--host", "0.0.0.0", "--port", "5173"]