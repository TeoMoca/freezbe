FROM node:19
ENV  NODE_ENV=dev

WORKDIR /auth

COPY /package.json ./

RUN npm install

COPY dist/apis/api_auth .

CMD [ "node", "server.js"]