FROM node:16-alpine
RUN yarn global add @nestjs/cli
WORKDIR /api
COPY package.json yarn.lock ./
RUN yarn install
COPY . .

EXPOSE 3000