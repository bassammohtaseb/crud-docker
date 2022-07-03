# crud-docker

This project has been created using Vuejs, NodeExpress, MySql DB and Docker

## Run Application

To run the application you need to run the following commands in sequence:

```shell script
docker network create crud-sample
```

```shell script
docker-compose -f docker-compose-db.yml up -d
```

```shell script
docker-compose build
```

```shell script
docker-compose up
```

After following the above steps, visit `http://localhost:8080` to check full functionality