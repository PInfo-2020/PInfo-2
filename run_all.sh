#!/bin/bash

# Run all services with Docker Compose
docker-compose -f docker-compose/docker-compose-microservices_user.yml -f docker-compose/docker-compose-microservices_recipe.yml up
