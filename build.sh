#!/usr/bin/env bash

npm install

cp -v node_modules/arrive/minified/arrive.min.js .

rm *.zip

now=$(date +"%Y%m%d_%H%M")

zip -r duolingoBinge_${now}.zip arrive.min.js clicker.js icon128.png icon16.png icon48.png manifest.json
