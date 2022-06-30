# crud-docker

This project has been created using Vuejs, NodeExpress, MySql DB and Docker

## Run Application

To run the application you need to run the following command:

```shell script
docker-compose up
```

If DB was not already running please run the following command to restart backend service:

```shell script
docker-compose restart backend
```

### Alternative Run Application

You can make use of `make` commands by running the following command to run the application

```shell script
make run
```

and the following command to restart backend

```shell script
make restart-be
```