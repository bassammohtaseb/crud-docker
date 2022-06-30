
build:
	docker-compose build

run:
	docker-compose up

run-d:
	docker-compose up -d

down:
	docker-compose down

exec-be:
	docker-compose exec backend bash

exec-fe:
	docker-compose exec frontend bash

logs-be:
	docker-compose logs -f --tail=100 backend

logs-fe:
	docker-compose logs -f --tail=100 frontend

logs-db:
	docker-compose logs -f --tail=100 mysqldb