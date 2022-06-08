FROM node:16-alpine

WORKDIR /oChemGovoryuatVRossii

COPY package.json yarn.lock ./
RUN yarn install
RUN npm i

COPY next.config.js ./next.config.js

COPY pages ./pages
COPY public ./public
COPY src ./src
COPY styles ./styles

CMD [ "yarn", "dev" ]