# Mozart Docs with AI Chatbot 🤖

Mozart 프레임워크 문서 사이트 + 하이브리드 RAG+MCP 기반 AI 챗봇

## ✨ 주요 기능

- 🤖 **AI 기반 Q&A 챗봇**: 문서 내용을 학습한 실시간 질의응답
- 🚀 **하이브리드 RAG+MCP**: 벡터 검색 + 파일 직접 읽기로 정확도와 속도 양립
- ⚡ **스마트 캐싱**: 중복 질문 0 토큰, 99% 비용 절감
- 📚 **자동 문서 참조**: 답변과 함께 관련 문서 링크 제공
- 💰 **비용 최적화**: 월 $12-25로 운영 (기존 대비 99.4% 절감)
- ✅ **안정적인 챗봇 UI**: Router 컨텍스트 통합, 페이지 이동 시 유지, 자동 복구 기능

## 🚀 빠른 시작 (Docker 권장)

### 필수 요구사항
- Docker & Docker Compose
- OpenAI API Key 또는 Anthropic API Key

### 1단계: 환경 설정

```bash
# 환경 변수 설정
cd backend
cp .env.example .env
# .env 파일에 OPENAI_API_KEY 또는 ANTHROPIC_API_KEY 입력
```

### 2단계: Docker로 전체 서비스 실행

```bash
# 프로젝트 루트에서 실행
npm run dev
# 또는: docker-compose up --build
```

이 명령어 하나로 다음이 자동 실행됩니다:
- ✅ Qdrant Vector DB (포트 6333)
- ✅ Redis Cache (포트 6379)
- ✅ Backend API (포트 8000)
- ✅ Frontend Docs (포트 3000)

### 3단계: 문서 인덱싱 (최초 1회)

```bash
# 백엔드 컨테이너에서 실행
docker-compose exec backend python scripts/index_docs.py
```

### 4단계: 챗봇 사용

http://localhost:3000 접속 후 우측 하단 챗봇 버튼 클릭!

## 📦 NPM 스크립트

```bash
npm run dev        # 개발 모드 (로그 출력)
npm run start      # 백그라운드 실행
npm run stop       # 서비스 중지
npm run restart    # 서비스 재시작
npm run logs       # 전체 로그 확인
npm run logs:backend   # 백엔드 로그만 확인
npm run logs:frontend  # 프론트엔드 로그만 확인
npm run build      # Docker 이미지 빌드
npm run clean      # 완전 초기화 (볼륨 삭제)
```

## 🔧 로컬 개발 (Docker 없이)

Docker 없이 개발하려면 아래 단계를 따르세요:

<details>
<summary>펼치기</summary>

### 백엔드 실행
```bash
cd backend
pip install -r requirements.txt
docker-compose up -d  # Qdrant, Redis만 실행
python scripts/index_docs.py
python -m app.main
```

### 프론트엔드 실행
```bash
cd docs
npm install
npm start
```
</details>

## 💰 비용 분석

**월 10,000 질문 기준 (1,000명 × 10개)**

| 방식 | 토큰 | 비용 |
|------|------|------|
| 순수 MCP | 80M | $800 💸 |
| 순수 RAG | 20M | $200 💰 |
| **하이브리드** | 3.1M | **$2-5** ✅ |

**절감율: 99.4%** (캐시 60% 가정)

## 📖 문서

- [Docker 상세 가이드](./README.docker.md) - Docker 명령어 및 트러블슈팅
- [백엔드 README](./backend/README.md) - API 및 아키텍처
- [챗봇 플러그인 README](./docs/plugins/chatbot/README.md) - 프론트엔드 구현

## 🛠️ 기술 스택

- **Frontend**: React, Docusaurus, TypeScript
- **Backend**: Python, FastAPI, LangChain
- **Vector DB**: Qdrant
- **Cache**: Redis
- **LLM**: OpenAI GPT-4o-mini / Claude

## 📝 라이선스

MIT

