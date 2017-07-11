#!/bin/bash
echo $@
docker run -it --rm  --name mynodejs -v $(pwd):/mnt/test  -w /mnt/test \
	 node:4.8 /bin/bash
#node $@

