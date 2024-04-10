FROM node:19
ENV  NODE_ENV=dev

WORKDIR /modeles

COPY /package.json ./

RUN npm install

COPY dist/apis/api_modeles .

CMD [ "node", "server.js"]