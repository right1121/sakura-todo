FROM node:16.14-bullseye-slim

RUN apt-get update

WORKDIR /app

RUN corepack enable yarn && \
    yarn global add @vue/cli && \
    yarn

COPY ./docker/vue/start.sh /
# ENTRYPOINT ["/start.sh"]
