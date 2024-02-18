<<<<<<< HEAD
FROM node:18-alpine
=======
FROM node:16-alpine
>>>>>>> c084e4b4972f5480c9dfb8f206147e8da04cb65b

WORKDIR /usr/app/

COPY package*.json ./

RUN npm install

RUN npm install -g next

COPY . .

RUN npm run build

EXPOSE 3000

<<<<<<< HEAD
CMD ["npm", "run",00 "start"]
=======
CMD ["npm", "start"]
>>>>>>> c084e4b4972f5480c9dfb8f206147e8da04cb65b
