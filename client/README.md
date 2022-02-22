# Client

## Development
* `yarn install` to install dependencies.
* `yarn start` to start local server on `http://localhost:3000`

## Docker (just for info)
* `docker build -f Dockerfile -t client .` to create docker image with name `client`
* `docker run -d -p 5040:3000 client` to run the docker image at port `5040`
* `docker rm $(docker stop $(docker ps -a -q --filter ancestor=client --format="{{.ID}}"))` to stop and delete containers created by `client` image.

## Dependencies
* [React Router](https://reactrouter.com/web/guides/quick-start) for routing.
