FROM mhart/alpine-node:12.19 AS builder

WORKDIR /app
COPY . .

#install project dependencies
RUN yarn install

# Builds the app for production to the `build` folder
RUN yarn build

FROM mhart/alpine-node:12.19

# install serve - https://github.com/vercel/serve#readme
RUN yarn global add serve

WORKDIR /app

# copy the production build folder
COPY --from=builder /app/build .

# use serve for development purposes only!
# serve the application on 8080 port
CMD ["serve", "-p", "8080", "-s", ".", "-n"]



