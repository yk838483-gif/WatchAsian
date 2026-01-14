FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Hugging Face expects port 7860
ENV PORT=7860
EXPOSE 7860

# Start the server
CMD ["npm", "start"]
