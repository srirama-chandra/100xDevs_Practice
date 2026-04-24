FROM node:22.18-alpine3.22

WORKDIR /app

COPY package.* .
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]