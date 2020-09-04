FROM node:14.6.0-alpine
ENV PORT 4000
USER root
LABEL author="César Delgado" maintainer="cesar.delgado.arcos@gmail.com"

COPY ./ .
RUN npm install

CMD ["node", "index.js"]