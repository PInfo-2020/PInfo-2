#!/bin/bash

# Removing database
v_list=$(docker ps -aq)
docker stop $v_list 2>/dev/null
docker rm $v_list 2>/dev/null
# docker system prune
# docker volume rm microservices_pgdata-ingr 2>/dev/null

# Launching servicestart

docker-compose -f docker-compose/docker-compose-ingredients.yml up