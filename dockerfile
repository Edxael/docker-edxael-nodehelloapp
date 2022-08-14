FROM node:16.16.0-alpine3.15

WORKDIR /myapp
COPY ./ /myapp

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]