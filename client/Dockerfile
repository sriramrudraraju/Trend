# Linux base image
FROM alpine
WORKDIR /client
# Copy everything to workdir
COPY ./ ./
# Install Node, npm
RUN apk add --update npm
# Install all dependencies
RUN npm install
# Install http server for running react prod build
RUN npm install -g local-web-server
# Build react prod build
RUN npm run build
CMD ws --spa index.html --port 4040 --directory ./build