# Node base image
FROM node:alpine
# WORKDIR /server
WORKDIR /server
# Copy everything
COPY ./ ./
# Install dependencies
RUN npm install
CMD ["npm", "run", "start"]