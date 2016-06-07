#!/bin/bash
tagname=$1
git push --delete origin $tagname
git tag --delete $tagname
