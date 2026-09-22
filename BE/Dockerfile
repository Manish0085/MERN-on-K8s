# Place this file at BE/Dockerfile in the MERN_notesApp repo

FROM node:20-alpine

WORKDIR /app

# Install deps first for better layer caching
COPY package*.json ./
RUN npm install --omit=dev

# Copy the rest of the backend source
COPY . .

# Run as a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 5001

# These are NOT baked into the image — pass them at runtime with
# `docker run --env-file .env` or via Kubernetes ConfigMap/Secret:
#   MONGO_URI
#   PORT=5001
#   NODE_ENV=production
#   UPSTASH_REDIS_REST_URL
#   UPSTASH_REDIS_REST_TOKEN

CMD ["node", "src/server.js"]