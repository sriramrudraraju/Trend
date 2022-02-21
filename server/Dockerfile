# Linux base image
FROM alpine
# Install Node, npm
RUN apk add --update npm
# WORKDIR /server
WORKDIR /server
# Copy everything
COPY ./ ./
# Install dependencies
RUN npm install
CMD ["npm", "run", "start"]
