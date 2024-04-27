FROM node:21 as build

WORKDIR /reactchatapp

COPY public/ /reactchatapp/public
COPY src/ /reactchatapp/src
COPY package.json /reactchatapp/
COPY .env /reactchatapp/

RUN npm install

ARG REACT_APP_API_ADDRESS
ENV REACT_APP_API_ADDRESS $REACT_APP_API_ADDRESS
ARG REACT_APP_AUTH_API_ADDRESS
ENV REACT_APP_AUTH_API_ADDRESS $REACT_APP_AUTH_API_ADDRESS

FROM node:21-alpine
COPY --from=build /reactchatapp /

CMD ["npm", "start"]

# RUN npm run build

# FROM nginx
# COPY --from=ui-builder /home/ui/build /usr/share/nginx/html
# CMD ["nginx", "-g", "daemon off;"]