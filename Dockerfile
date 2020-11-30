FROM mhart/alpine-node:12.19 AS builder
WORKDIR /app
COPY . .
RUN yarn build

FROM mhart/alpine-node:12.19
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "3000", "-s", "."]



