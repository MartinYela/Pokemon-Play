FROM nginx:1.19.0-alpine as prod
COPY /dist /usr/share/nginx/html
COPY /default.conf /etc/nginx/conf.d/default.conf
EXPOSE 8000
CMD ["nginx", "-g", "daemon off;"]