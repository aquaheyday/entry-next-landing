# ─────────────────────────────────────────────────────────────────────────────
# 1) BUILD STAGE
# ─────────────────────────────────────────────────────────────────────────────
FROM node:18-alpine AS builder
WORKDIR /app

# 1) 의존성 설치 캐시 활용
COPY package.json package-lock.json ./
RUN npm ci

# 2) 소스 복사 및 빌드
COPY . .
RUN npm run build

# ─────────────────────────────────────────────────────────────────────────────
# 2) PRODUCTION STAGE
# ─────────────────────────────────────────────────────────────────────────────
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# 3) 불필요한 파일 삭제 (옵션)
RUN rm -rf /app/src /app/.github /app/.vscode

# 4) 빌드 아티팩트만 복사
COPY --from=builder /app/.next          ./.next
COPY --from=builder /app/public         ./public
COPY --from=builder /app/node_modules   ./node_modules
COPY --from=builder /app/package.json   ./package.json

# ✏️ 설정 파일 복사: next.config.ts
COPY --from=builder /app/next.config.ts  ./next.config.ts

EXPOSE 3000

CMD ["npm", "run", "start"]
