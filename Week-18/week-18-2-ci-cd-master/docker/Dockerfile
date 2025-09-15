FROM node:latest

WORKDIR /app

COPY package.json package-lock.json tsconfig.json turbo.json ./
COPY apps/user-app ./apps/user-app
COPY packages ./packages

RUN npm install

RUN npm run db:generate

RUN npm run build

CMD ["npm","run","start-user-app"]