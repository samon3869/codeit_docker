# node를 설치한다.
# FROM 베이스 이미지
ARG NODE_VERSION
FROM node:${NODE_VERSION}

# 소스코드를 다운로드한다.
# COPY [복사할 경로] [붙여넣기할 경로]
COPY . /app

# 소스코드의 최상위 디렉토리로 이동한다.
WORKDIR /app

# 소스코드를 실행할 때 필요한 파일을 다운로드한다. (npm ci)
# 소스코드를 빌드한다 (npm run build)
RUN npm ci \
&& npm run build

# 환경 변수를 정의한다. (PORT)
ENV PORT=3000

# 서버를 실행한다 (npm run start)
ENTRYPOINT ["npm", "run", "start"]