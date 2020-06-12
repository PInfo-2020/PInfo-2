#!/bin/bash

#add ' -rf :recipe-service' to skip already-compiled services to save time (not on the first time !)
#mvn clean install -Dmaven.test.skip=true
# Uncomment when maven clean install compiles without error
mvn install -Ppackage-docker-image -Dmaven.test.skip=true -rf :recipe-service
docker build -t "web-ui:latest" .
