# Mozart Docs with AI Chatbot 🤖

Mozart 프레임워크 문서 사이트 + 하이브리드 RAG+MCP 기반 AI 챗봇

## ✨ 주요 기능

- 🤖 **AI 기반 Q&A 챗봇**: 문서 내용을 학습한 실시간 질의응답
- 🚀 **하이브리드 RAG+MCP**: 벡터 검색 + 파일 직접 읽기로 정확도와 속도 양립
- ⚡ **스마트 캐싱**: 중복 질문 0 토큰, 99% 비용 절감
- 📚 **자동 문서 참조**: 답변과 함께 관련 문서 링크 제공
- 💰 **비용 최적화**: 월 $12-25로 운영 (기존 대비 99.4% 절감)

## 🚀 빠른 시작

### 필수 요구사항
- Node.js 18+
- Python 3.10+
- Docker & Docker Compose
- OpenAI API Key

### 1단계: 백엔드 실행

```bash
cd backend

# 패키지 설치
pip install -r requirements.txt

# 환경 변수 설정
cp .env.example .env
# .env 파일에 OPENAI_API_KEY 입력

# 인프라 시작
docker-compose up -d

# 문서 인덱싱
python scripts/index_docs.py

# 서버 실행
python -m app.main
```

### 2단계: 프론트엔드 실행

```bash
cd docs
npm install
npm start
```

### 3단계: 챗봇 사용

http://localhost:3000 접속 후 우측 하단 챗봇 버튼 클릭!

## 💰 비용 분석

**월 10,000 질문 기준 (1,000명 × 10개)**

| 방식 | 토큰 | 비용 |
|------|------|------|
| 순수 MCP | 80M | $800 💸 |
| 순수 RAG | 20M | $200 💰 |
| **하이브리드** | 3.1M | **$2-5** ✅ |

**절감율: 99.4%** (캐시 60% 가정)

## 📖 문서

- [백엔드 README](./backend/README.md)
- [챗봇 플러그인 README](./docs/plugins/chatbot/README.md)

## 🛠️ 기술 스택

- **Frontend**: React, Docusaurus, TypeScript
- **Backend**: Python, FastAPI, LangChain
- **Vector DB**: Qdrant
- **Cache**: Redis
- **LLM**: OpenAI GPT-4o-mini / Claude

## 📝 라이선스

MIT

