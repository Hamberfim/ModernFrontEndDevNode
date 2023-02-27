## Modern Front End Development with Babel & Node.js

Simple Babel Integration:

- npm init -y
- npm i @babel/core @babel/node --save-dev
- npm i @babel/preset-env --save-dev
- create '.babelrc.json' config that only applies to a single part of a project in root next to package.json containing:
  `{
    "presets": [["@babel/preset-env"]]
}`
- alternative is to use babel.config.json
- add to package.json:
  `"scripts": {
"start": "babel-node index.js"`
- run `npm start` in terminal
