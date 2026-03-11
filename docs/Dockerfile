FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install

# Apply Korean search support patch
COPY scripts/patch-korean-search.js ./scripts/
RUN node ./scripts/patch-korean-search.js

# Copy application code
COPY . .

# Build for production (generates search index)
RUN yarn build

# Expose port
EXPOSE 3000

# Serve production build
CMD ["yarn", "serve", "--host", "0.0.0.0", "--port", "3000"]
