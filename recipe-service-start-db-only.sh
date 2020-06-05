#!/bin/bash

# Removing database
v_list=$(docker ps -aq)
docker stop $v_list 2>/dev/null
docker rm $v_list 2>/dev/null
docker volume rm docker-compose_pgdata-recipe 2>/dev/null

# Launching service

docker-compose -f docker-compose/docker-compose-microservices_recipe_db.yml up
