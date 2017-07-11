#!/bin/bash
docker run --rm  --name mynodejs -v $(pwd):/mnt/test  -w /mnt/test \
	         node:4.8 npm run wpk
cp  dist/bundle.js ~/workspaces/flask-docker/static/dist/
echo "done, cp dist/bundle.js ~/workspaces/flask-docker/static/dist/"
