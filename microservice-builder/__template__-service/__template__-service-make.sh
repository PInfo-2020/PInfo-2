#!/bin/bash

#add ' -rf :__template__-service' to skip already-compiled services to save time (not on the first time !)
mvn clean install -Dmaven.test.skip=true
# Uncomment when maven clean install compiles without error
#mvn install -Ppackage-docker-image -Dmaven.test.skip=true