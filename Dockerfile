# https://github.com/vercel/next.js/tree/canary/examples/with-docker
FROM node:16-alpine
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --chown=nextjs:nodejs next.config.js ./
COPY --chown=nextjs:nodejs .next/static .next/static
COPY --chown=nextjs:nodejs .next/standalone ./

USER nextjs

CMD ["node", "server.js"]
