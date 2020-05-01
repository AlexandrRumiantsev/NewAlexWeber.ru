FROM node

WORKDIR /usr/src/app
RUN npm install -g nodemon

COPY package.json .

RUN npm install

RUN yarn global add nodemon


COPY . .

EXPOSE 5000

CMD [ "nodemon", "index.js" ]