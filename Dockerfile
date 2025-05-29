FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm run prepare

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8001

COPY nginx.conf /etc/nginx/conf.d/online-store.conf

CMD ["nginx", "-g", "daemon off;"]
