# Server

## Development
* `yarn install` to install dependencies.
* `yarn start` to start server at port `8000`

## Debug Mode
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

## Docker (just for info)
* `docker build -f Dockerfile -t server-image .` to create docker image with name `server`
* `docker run -d -p 5050:8000 server` to run the docker image at port `5050`.
* `docker rm $(docker stop $(docker ps -a -q --filter ancestor=server --format="{{.ID}}"))` to stop and delete containers created by `server` image.