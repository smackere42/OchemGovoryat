FROM node:16.15.0

WORKDIR /app

COPY package.json yarn.lock ./
RUN npm i --frozen-lockfile

COPY next.config.js ./next.config.js

COPY pages ./pages
COPY public ./public
COPY src ./src
COPY styles ./styles
RUN yarn run build

CMD [ "yarn", "start" ]