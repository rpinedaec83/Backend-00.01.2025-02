FROM node:18.16.0-alpine3.17
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY src/package.json ./
RUN npm install
COPY src/ ./
EXPOSE 9000
CMD [ "npm","start" ]