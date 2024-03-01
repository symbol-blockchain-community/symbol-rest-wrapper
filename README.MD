# Symbol REST Wrapper

## setup

```shell
npm install 
npx tsc
npm run serve
```

## run on node

```sh
docker run -d \
    --env-file .env \
    -u root \
    -p 3002:3002 \
    --add-host=host.docker.internal:host-gateway \
    ghcr.io/ymuichiro/symbol-rest-wrapper:latest
```

## NetworkType

この REST Wrapper はノードと隣接して立てることを想定しているため、ネットワークタイプは隣接するノードに依存します。