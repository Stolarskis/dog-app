FROM node:latest

WORKDIR /home/dog-app
COPY ./ .
RUN ls && echo $PWD

# Install dependencies then transpiles code
RUN npm install -y && npm run prod

ENTRYPOINT ["node", "./lib/index.js"]

