#!/usr/bin/env bash

npm install

rm *.zip

now=$(date +"%Y%m%d_%H%M")

zip -r duolingoBinge_${now}.zip arrive-2.0.0.min.js clicker.js icon128.png icon16.png icon48.png manifest.json
