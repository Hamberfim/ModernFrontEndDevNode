## Modern Front End Development with Node.js

Small Compendium for Modern JS Web Development within Node Ecosystem

Babel integration:

- npm init -y
- npm i @babel/core @babel/node --save-dev
- npm i @babel/preset-env --save-dev
- create '.babelrc.json' config that only applies to a single part of a project in root next to package.json containing:
  `{
    "presets": [["@babel/preset-env"]]
}`
- alternative is to use babel.config.json
