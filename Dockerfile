FROM node:18-alpine

WORKDIR /workspace

COPY package*.json ./
COPY nx.json tsconfig.base.json ./

RUN npm install

COPY . .

EXPOSE 4200

CMD ["npx", "nx", "serve", "my-todos", "--host", "0.0.0.0"]