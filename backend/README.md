# Mozart Docs Chatbot Backend

하이브리드 RAG + MCP 기반 문서 Q&A 챗봇 백엔드

## 아키텍처

```
Cache (Redis) → Vector Search (Qdrant) → MCP File Read → LLM Answer
```

### 핵심 기능

- **하이브리드 검색**: RAG으로 관련 문서 필터링 + MCP로 정확한 내용 읽기
- **스마트 캐싱**: Redis 기반 답변 캐싱으로 토큰 비용 절감
- **토큰 최적화**: 동적 Top-K 전략으로 불필요한 토큰 사용 최소화
- **LLM 유연성**: OpenAI, Claude 등 설정으로 선택 가능

## 설치 및 실행

### 1. 환경 설정

```bash
cd backend

# 가상환경 생성 (선택사항)
python -m venv venv
venv\\Scripts\\activate  # Windows
# source venv/bin/activate  # Linux/Mac

# 패키지 설치
pip install -r requirements.txt

# 환경 변수 설정
copy .env.example .env
# .env 파일을 열어서 API 키 등 설정
```

### 2. .env 파일 설정

```bash
# LLM API Keys (필수)
OPENAI_API_KEY=sk-...

# Vector Database
QDRANT_URL=http://localhost:6333

# Cache
REDIS_URL=redis://localhost:6379

# Server
HOST=0.0.0.0
PORT=8000

# Documents Path (절대 경로로 설정)
DOCS_PATH=D:/Github/mozart-docs/docs/docs
```

### 3. 인프라 시작 (Qdrant + Redis)

```bash
# Docker Compose로 Qdrant와 Redis 시작
docker-compose up -d

# 상태 확인
docker-compose ps
```

### 4. 문서 인덱싱

```bash
# 문서를 벡터 DB에 인덱싱 (최초 1회)
python scripts/index_docs.py
```

### 5. 백엔드 서버 실행

```bash
# 서버 시작
python -m app.main

# 또는 uvicorn으로 직접 실행
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## API 엔드포인트

### Health Check
```bash
GET /api/health
```

### Chat (질의응답)
```bash
POST /api/chat
Content-Type: application/json

{
  "question": "Mozart의 hooks에 대해 알려주세요",
  "conversation_history": []
}
```

### 문서 트리
```bash
GET /api/docs-tree
```

### 캐시 통계
```bash
GET /api/cache/stats
```

### 캐시 초기화
```bash
POST /api/cache/clear
```

## 테스트

```bash
# Health check
curl http://localhost:8000/api/health

# 챗봇 테스트
curl -X POST http://localhost:8000/api/chat \\
  -H "Content-Type: application/json" \\
  -d "{\"question\": \"hooks란 무엇인가요?\"}"

# API 문서 (Swagger)
open http://localhost:8000/docs
```

## 프로젝트 구조

```
backend/
├── app/
│   ├── main.py              # FastAPI 앱
│   ├── config.py            # 설정 관리
│   ├── api/
│   │   └── chat.py          # 챗봇 API
│   ├── services/
│   │   ├── hybrid_service.py   # 하이브리드 RAG+MCP
│   │   ├── vector_service.py   # 벡터 검색
│   │   └── cache_service.py    # 캐싱
│   ├── mcp/
│   │   └── filesystem_server.py # MCP 파일시스템
│   └── models/
│       ├── request.py       # API 요청 모델
│       └── response.py      # API 응답 모델
├── scripts/
│   └── index_docs.py        # 문서 인덱싱
├── config/
│   └── config.yaml          # 설정 파일
├── docker-compose.yml
├── requirements.txt
└── .env
```

## 설정 변경

### LLM 변경

`config/config.yaml`:
```yaml
llm:
  provider: "anthropic"  # openai → anthropic
  model: "claude-3-5-sonnet-20241022"
```

### RAG 파라미터 조정

```yaml
rag:
  chunk_size: 500          # 청크 크기
  chunk_overlap: 100       # 청크 겹침
  top_k_simple: 3          # 간단한 질문
  top_k_moderate: 5        # 보통 질문
  top_k_complex: 8         # 복잡한 질문
```

## 문제 해결

### Qdrant 연결 실패
```bash
# Qdrant가 실행 중인지 확인
docker-compose ps

# Qdrant 재시작
docker-compose restart qdrant
```

### Redis 연결 실패
```bash
# Redis 상태 확인
docker-compose logs redis

# Redis 재시작
docker-compose restart redis
```

### 문서 인덱싱 실패
```bash
# OPENAI_API_KEY 확인
echo %OPENAI_API_KEY%

# 문서 경로 확인
# .env의 DOCS_PATH가 정확한지 확인
```

## 비용 최적화

- **캐싱 활성화**: 중복 질문 0 토큰
- **작은 청크**: chunk_size=500 (기본 1000에서 축소)
- **저렴한 모델**: gpt-4o-mini 사용
- **동적 Top-K**: 질문 복잡도에 따라 검색 문서 수 조정

예상 비용 (월 1000 사용자, 각 10 질문):
- 캐시 히트율 60% 가정
- **$2-5/월** (RAG 없이 순수 MCP는 $800/월)

## 개발

```bash
# 개발 모드 (자동 리로드)
uvicorn app.main:app --reload

# 테스트
pytest

# 타입 체크
mypy app/
```

## 라이선스

MIT
