# Linux base image
FROM alpine
# Install Node, npm
RUN apk add --update npm
# Install http server for running react prod build
RUN npm install -g local-web-server
WORKDIR /client
# Copy everything to workdir
COPY ./ ./
# Install all dependencies
RUN npm install
# Build react prod build
RUN npm run build
CMD ws --spa index.html --port 3000 --directory ./build
