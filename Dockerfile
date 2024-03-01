# ----- stage 0 -----
FROM node:20-alpine

COPY . /app
WORKDIR /app/

RUN \
  apk add --update --no-cache make g++ jpeg-dev cairo-dev giflib-dev pango-dev libtool autoconf automake && \
  npm install && \ 
  npx tsc

# ----- stage 1 -----
FROM node:20-alpine 

COPY --from=0 /app/dist /app/dist
COPY --from=0 /app/data /app/data
COPY --from=0 /app/schema /app/schema

COPY --from=0 /app/package.json /app/package.json
COPY --from=0 /app/tsconfig.json /app/tsconfig.json
COPY --from=0 /app/package-lock.json /app/package-lock.json

WORKDIR /app/

RUN \ 
  apk update && \
  apk add --update --no-cache make g++ jpeg-dev cairo-dev giflib-dev pango-dev libtool autoconf automake && \
  apk add --no-cache tini && \
  npm ci --omit=dev


ENV NODE_ENV=production

RUN addgroup -S app && adduser -S app -G app
USER app

EXPOSE 3000

ENTRYPOINT ["/sbin/tini", "--"]
CMD [ "npm", "run", "serve" ]