#!/bin/bash

# Run all services with Docker Compose
cd web-ui
docker build -t "web-ui:latest" .
cd ..
docker-compose -f docker-compose/docker-compose-all.yml up
