# Typescript React Express Nginx Docker

[Wiki](https://github.com/sriramrudraraju/Trend/wiki) explains on how this template is created

## Running 
* `yarn start:docker` to create and run containes using docker.
* `yarn stop:docker` to stop and remover docker containers.
* Client can be acessed at `http://localhost:8080`

## Root

### Development
* `yarn install` to install all dependencies.
* `yarn start` to start client<small>`(port: 3000)`</small> and server<small>`(port: 8000)`</small> 

### Docker
* `docker compose up -d` build and run docker images.
* `docker compose down` stop and remove containers.
* More info on docker compoese [commands](https://docs.docker.com/engine/reference/commandline/compose/)

## Client

### Development
* `yarn start` to start local server on `http://localhost:3000`

### Docker (just for info)
* `docker build -f Dockerfile -t client .` to create docker image with name `client`
* `docker run -d -p 5040:3000 client` to run the docker image at port `5040`
* `docker rm $(docker stop $(docker ps -a -q --filter ancestor=client --format="{{.ID}}"))` to stop and delete containers created by `client` image.

### Dependencies
* [React Router](https://reactrouter.com/web/guides/quick-start) for routing.

## Server

### Development
* `yarn start` to start server at port `8000`

### Debug Mode
* VSC supports running the server within IDE using launch.json
* Create `.vscode/launch.json` file and paste below content. [More Info](https://code.visualstudio.com/docs/editor/debugging)
```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "program": "${workspaceFolder}/index.ts",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "outFiles": [
        "${workspaceFolder}/dist/**/*.js"
      ]
    }
  ]
}
```
* Also runs at port `8000`

### Docker (just for info)
* `docker build -f Dockerfile -t server-image .` to create docker image with name `server`
* `docker run -d -p 5050:8000 server` to run the docker image at port `5050`.
* `docker rm $(docker stop $(docker ps -a -q --filter ancestor=server --format="{{.ID}}"))` to stop and delete containers created by `server` image.

## Nginx
* For reverse-proxy

## Ports
| Environment | Client | Server |
| --- | --- | --- |
| Dev | 3000 | 8000 |
| Docker | 5040 | 5050 |

