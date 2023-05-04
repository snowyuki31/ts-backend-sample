FROM node:16-alpine
RUN yarn global add @nestjs/cli
WORKDIR /api
COPY package.json yarn.lock ./
RUN yarn install --prod --frozen-lockfile
COPY . .

RUN yarn run prisma generate
RUN yarn run prisma migrate

EXPOSE 3000
CMD ["yarn", "run", "start"]