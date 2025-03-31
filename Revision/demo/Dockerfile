# Use Node.js 20 image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project
COPY . .

# Expose the app's port
EXPOSE 3000

# Run the app using Nodemon for live reload
CMD ["npx", "nodemon", "server.js"]
