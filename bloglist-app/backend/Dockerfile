FROM node:20

WORKDIR /usr/src/app


COPY --chown=node:node . .

RUN yarn

USER node

CMD yarn start