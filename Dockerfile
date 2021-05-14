FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3004

CMD [ "npm", "run", "start" ]

# build: docker build . -t url-shortener
# run: docker run -d -p 3004:3004 url-shortener