# build stage
FROM node:lts-alpine as build-stage

LABEL maintainer="Vincent Mosoti <vincent@crafted.co.ke>"

WORKDIR /app

ARG VUE_APP_SOCKET_URL 
ARG VUE_APP_API_URL 

ENV VUE_APP_SOCKET_URL $VUE_APP_SOCKET_URL
ENV VUE_APP_API_URL $VUE_APP_API_URL

COPY package*.json ./

# ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

COPY . .

RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

#replace default conf file
#COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]