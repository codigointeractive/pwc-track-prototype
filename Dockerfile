FROM node:8.1.4

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
COPY package.json /usr/src/app/
RUN npm install && npm cache clean --force
COPY . /usr/src/app
RUN ./node_modules/.bin/gulp  build

CMD ./node_modules/.bin/gulp serve
