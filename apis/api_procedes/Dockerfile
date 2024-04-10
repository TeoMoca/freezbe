FROM node:19
ENV  NODE_ENV=dev

WORKDIR /procedes

COPY /package.json ./

RUN npm install

COPY dist/apis/api_procedes .

CMD [ "node", "server.js"]