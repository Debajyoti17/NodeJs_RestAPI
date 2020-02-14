# NodeJs_RestAPI

postgres: https://node-postgres.com/features/pooling

https://developer.okta.com/blog/2018/11/15/node-express-typescript

https://www.typescriptlang.org/Samples/

https://wanago.io/2018/12/17/typescript-express-error-handling-validation/

https://www.npmjs.com/package/express-generator-typescript

RabitMq: 
cmd to enable browser: rabbitmq-plugins.bat enable rabbitmq_management
http://localhost:15672/
default u/p: guest/guest

npm init

npm i g typescript

npm install express --save
	npm install body-parser --save
	npm install cookie-parser --save
	npm install multer --save
body-parser − This is a node.js middleware for handling JSON, Raw, Text and URL encoded form data.

cookie-parser − Parse Cookie header and populate req.cookies with an object keyed by the cookie names.

multer − This is a node.js middleware for handling multipart/form-data.


npm i -D ts-node nodemon typescript tslint

Expres project setup:

npx express-generator-typescript --with-auth "project_name" (project name default is express-gen-ts)




mkdir search-api
$ cd search-api
$ npm init -y

npm i typescript tsc-watch

npx tsc --init --moduleResolution node --resolveJsonModule --target es6 --noImplicitAny --sourceMap --lib dom,es2017 --outDir dist

npm i express@5.0.0-alpha.7 @types/express cors @types/cors compression @types/compression @types/node


