# Typescript React Express Nginx Docker

## Client

### Development
* `yarn start` to start local server on `http://localhost:3000`

### Production build
* `yarn build` creates a prod build in `./build` directory.
* To run this built code we need server to serve the built code. Will use [local-web-server](https://www.npmjs.com/package/local-web-server)
* `ws --spa index.html --port 4040 --directory ./build` will run the code on `http://localhost:4040/`
><small>More info on [usage](https://github.com/lwsjs/local-web-server/wiki/CLI-usage)</small>

### Docker
* `docker build -f Dockerfile -t client .` to create docker image with name `client`
* `docker run -d -p 5040:4040 client` to run the docker image at port `5040`

### Dependencies
* [React Router](https://reactrouter.com/web/guides/quick-start) for routing.

### Ports
| --- | Client | Server |
| --- | --- | --- |
| Dev | 3000 | --- |
| Prod (local-web-server) | 4040 | --- |
| Docker | 5040 | -- |