#!/bin/bash

mvn install -Ppackage-docker-image -rf :ingredient-service -Dmaven.test.skip=true
#mvn clean install -Dmaven.test.skip=true