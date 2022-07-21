FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
WORKDIR /app
COPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./
RUN pnpm install --frozen-lockfile --prod

FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Vite needs to set the environment variable before build.
ENV VITE_API_KEY YOUR_API_KEY
ENV VITE_AUTH_DOMAIN YOUR_AUTH_DOMAIN
ENV VITE_PROJECT_ID YOUR_PROJECT_ID
ENV VITE_STORAGE_BUCKET YOUR_STORAGE_BUCKET
ENV VITE_MESSAGING_SENDER_ID YOUR_MESSAGING_SENDER_ID
ENV VITE_APP_ID YOUR_APP_ID
ENV VITE_MEASUREMENT_ID YOUR_MEASUREMENT_ID
ENV VITE_FORMSPREE_KEY YOUR_FORMSPREE_KEY
ENV VITE_RE_CAPTCHA_KEY YOUR_RE_CAPTCHA_KEY

RUN pnpm build

FROM nginx:alpine
COPY /docker/nginx.conf /etc/nginx/conf.d/configfile.template

COPY --from=builder /app/dist /usr/share/nginx/html

ENV NODE_ENV production
ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080

CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
