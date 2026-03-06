# Docker 기반 개발 환경

Mozart Docs 프로젝트를 Docker로 실행하는 가이드입니다.

## 사전 요구사항

- Docker Desktop 또는 Docker Engine 설치
- Docker Compose v2.0 이상

## 빠른 시작

### 1. 환경 설정

백엔드 환경 변수 설정:

```bash
cd backend
cp .env.example .env
# .env 파일을 열어서 API 키 등 설정
```

필수 환경 변수:
- `OPENAI_API_KEY` 또는 `ANTHROPIC_API_KEY`: LLM API 키

### 2. 서비스 시작

**Windows:**
```cmd
start-dev.bat
```

**Linux/Mac:**
```bash
./start-dev.sh
```

**또는 직접 실행:**
```bash
docker-compose up -d
```

### 3. 접속

- **프론트엔드**: http://localhost:3000
- **백엔드 API**: http://localhost:8000
- **API 문서**: http://localhost:8000/docs
- **Qdrant UI**: http://localhost:6333/dashboard

## 서비스 구성

```
┌─────────────┐
│  Frontend   │ :3000
│ (Docusaurus)│
└──────┬──────┘
       │
       ▼
┌─────────────┐     ┌─────────┐
│   Backend   │────▶│  Redis  │ :6379
│  (FastAPI)  │     │ (Cache) │
└──────┬──────┘     └─────────┘
       │
       ▼
┌─────────────┐
│   Qdrant    │ :6333
│  (Vector)   │
└─────────────┘
```

## 주요 명령어

### 서비스 관리

```bash
# 전체 서비스 시작
docker-compose up -d

# 특정 서비스만 시작
docker-compose up -d backend

# 로그 확인
docker-compose logs -f

# 특정 서비스 로그
docker-compose logs -f backend

# 서비스 중지
docker-compose down

# 볼륨까지 삭제 (완전 초기화)
docker-compose down -v
```

### 개발 모드

코드 변경 시 자동으로 반영됩니다:
- **백엔드**: `--reload` 옵션으로 Hot Reload 활성화
- **프론트엔드**: Docusaurus 개발 서버 자동 감지

### 빌드 재실행

코드나 의존성 변경 시:

```bash
# 이미지 재빌드
docker-compose build

# 재빌드 후 시작
docker-compose up -d --build
```

### 컨테이너 접속

```bash
# 백엔드 컨테이너 접속
docker-compose exec backend bash

# 프론트엔드 컨테이너 접속
docker-compose exec frontend sh
```

## 문서 인덱싱

최초 실행 시 문서를 벡터 DB에 인덱싱해야 합니다:

```bash
# 백엔드 컨테이너에서 실행
docker-compose exec backend python scripts/index_docs.py
```

## 트러블슈팅

### 포트 충돌

이미 사용 중인 포트가 있는 경우:

```bash
# docker-compose.yml에서 포트 변경
ports:
  - "3001:3000"  # 3000 → 3001로 변경
```

### 권한 문제 (Linux)

```bash
# qdrant_data 디렉토리 권한 설정
sudo chown -R $USER:$USER backend/qdrant_data
```

### 캐시 초기화

```bash
# 빌드 캐시 없이 재빌드
docker-compose build --no-cache

# 모든 데이터 초기화
docker-compose down -v
```

### 로그 확인

```bash
# 모든 서비스 로그
docker-compose logs -f

# 에러만 확인
docker-compose logs -f | grep -i error
```

## 개발 vs 프로덕션

현재 설정은 **개발 환경**용입니다:
- Hot reload 활성화
- 소스 코드 볼륨 마운트
- 디버그 모드

프로덕션 배포 시에는 별도의 `docker-compose.prod.yml`을 사용하세요.

## 성능 최적화

### 볼륨 캐싱 (Mac)

```yaml
volumes:
  - ./backend/app:/app/app:cached
```

### 메모리 제한

```yaml
deploy:
  resources:
    limits:
      memory: 2G
```

## 참고사항

- 백엔드는 Qdrant와 Redis가 정상 작동할 때까지 대기합니다 (healthcheck)
- 프론트엔드 빌드는 최초 1-2분 소요됩니다
- 개발 중에는 `docker-compose logs -f`로 로그를 모니터링하세요
