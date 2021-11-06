FROM node:lts-alpine

RUN apk add --update-cache make g++ \
  && rm -rf /var/cache/apk/*

# Create app directory
RUN mkdir -p ~/.npm-global /home/node/app/

ENV PATH ~/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX ~/.npm-global

WORKDIR /home/node/app/

# Install app dependencies
COPY ./package.json .

RUN yarn

# Bundle app source
COPY . .

CMD ["yarn", "dev:api:debug"]
