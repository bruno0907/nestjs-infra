#============================
# STAGE 1 - BUILD
#============================
FROM node:20 AS build

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm i -g pnpm && pnpm i

COPY . .
RUN pnpm build auth-service

#============================
# STAGE 1 - RUNTIME (FINAL)
#============================
FROM node:20-alpine

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist/apps/auth-service ./dist

EXPOSE 3001

CMD [ "node", "dist/main.js" ]