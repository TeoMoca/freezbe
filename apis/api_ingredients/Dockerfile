FROM node:19
ENV  NODE_ENV=dev

WORKDIR /ingredients

COPY /package.json ./

RUN npm install

COPY /apis/api_ingredients .

CMD [ "node", "server.js"]