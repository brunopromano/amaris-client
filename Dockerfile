FROM node:latest as angular
WORKDIR /app
COPY package.json /app
COPY . .
RUN npm install --silent
RUN npm run build --prod

FROM nginx:alpine
VOLUME  /var/cache/nginx
COPY --from=angular app/dist/amaris-client /usr/share/nginx/html
