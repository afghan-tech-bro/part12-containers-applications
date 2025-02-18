FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm i

USER node

CMD npm run dev