FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN yarn

CMD ["yarn", "dev"]