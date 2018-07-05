FROM node:9.11-alpine

RUN mkdir /app
WORKDIR /app

COPY package.json .
RUN npm i --prod

COPY src ./src
COPY config.js .
COPY server.js .

RUN npm run build

EXPOSE 4000
CMD npm run prod
