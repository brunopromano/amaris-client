FROM node:lts-alpine as angular
# ENV NODE_ENV=production
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME  /var/cache/nginx
COPY --from=angular app/dist/amaris-client /usr/share/nginx/html

# rodar na pasta raiz do projeto:
# docker build -t amaris-client .
# docker run -p 8081:80 (meu-omputador:nginx)