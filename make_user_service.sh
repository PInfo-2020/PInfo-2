#!/bin/bash

mvn install -Ppackage-docker-image -rf :user-service -Dmaven.test.skip=true
#mvn clean install -Dmaven.test.skip=true
