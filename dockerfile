FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY src ./src
COPY tsconfig.json ./

RUN yarn tsc

EXPOSE 9000

CMD node dist/server.js