#!/bin/bash
docker stop __template__-service
docker rm __template__-service
docker rmi -f unige/__template__-service
