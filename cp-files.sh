#!/bin/bash

pwd
date
timedatectl
cp prd-build.sh
pnpm docs:build
cp CNAME docs/
cp robots.txt docs/
cp naverf9541c054d6beab319f39bc6d207e2d8.html docs/
cp googlef9329aab45ee1cc1.html docs/
cat /etc/os-release
