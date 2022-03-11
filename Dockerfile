FROM node:12.18.1

WORKDIR /app

COPY ["./src/package.json", "./"]

RUN npm install

ENV PORT=8000

EXPOSE ${PORT}

COPY ./src .

CMD [ "npx", "nodemon", "server.js" ]
