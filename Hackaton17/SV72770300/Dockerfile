FROM node:22-alpine

WORKDIR /out/app

COPY package.json ./

RUN npm install --production

COPY src ./src/

EXPOSE 4000

CMD [ "npm", "start" ]