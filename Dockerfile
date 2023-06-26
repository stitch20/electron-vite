FROM node:16.16.0-alpine

WORKDIR /app

COPY ./package*.json ./
RUN export NODE_TLS_REJECT_UNAUTHORIZED=0
RUN npm ci

COPY . .
RUN npm run dev