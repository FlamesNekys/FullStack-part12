FROM node:20 AS build-stage
WORKDIR /usr/src/app

COPY . .

RUN yarn

RUN yarn build

FROM node:20 as test

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=yarn.lock,target=yarn.lock \
    --mount=type=cache,target=/root/.npm \
    yarn --include=dev

COPY . .

RUN yarn test

FROM nginx:1.25-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
COPY --from=test /.gitignore /usr/share