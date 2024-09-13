# Use the official Node.js image as the base
FROM node:alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json if present
COPY package*.json ./

# Install any necessary dependencies
RUN npm install || echo "No dependencies to install"

# Copy the entire project into the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# Command to run the server
CMD ["node", "server.js"]
