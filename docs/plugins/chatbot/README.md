# Docusaurus Chatbot Plugin

AI 기반 문서 Q&A 챗봇 플러그인입니다.

## 기능

- 💬 실시간 질의응답
- 🔍 문서 기반 답변 생성
- 📚 참고 문서 링크 제공
- ⚡ 캐시 기반 빠른 응답
- 📱 반응형 디자인
- 🌙 다크 모드 지원
- 💾 대화 기록 저장 (localStorage)

## 설치

플러그인이 이미 설치되어 있습니다.

## 설정

### 1. Backend API URL 설정

`.env` 파일 생성:

```bash
CHATBOT_API_URL=http://localhost:8000
```

### 2. Docusaurus 설정

`docusaurus.config.js`에 플러그인 추가 (이미 추가되어 있음):

```javascript
plugins: [
  path.resolve(__dirname, './plugins/chatbot'),
]
```

## 사용법

1. 백엔드 서버 실행:
   ```bash
   cd backend
   docker-compose up -d
   python -m app.main
   ```

2. Docusaurus 개발 서버 실행:
   ```bash
   cd docs
   npm start
   ```

3. 브라우저에서 우측 하단 챗봇 버튼 클릭

## 컴포넌트 구조

```
chatbot/
├── src/
│   ├── components/
│   │   ├── Chatbot.tsx        # 메인 챗봇 컴포넌트
│   │   ├── ChatMessage.tsx    # 메시지 컴포넌트
│   │   └── ChatInput.tsx      # 입력 컴포넌트
│   ├── hooks/
│   │   └── useChatbot.ts      # 챗봇 상태 관리 Hook
│   ├── utils/
│   │   └── api.ts             # API 통신
│   ├── types/
│   │   └── index.ts           # TypeScript 타입
│   ├── styles/
│   │   └── chatbot.css        # 스타일
│   └── client-module.tsx      # Docusaurus 클라이언트 모듈
└── index.js                   # 플러그인 진입점
```

## 커스터마이징

### 환영 메시지 변경

`src/components/Chatbot.tsx`:

```typescript
const WELCOME_MESSAGE = `안녕하세요! 👋
당신의 커스텀 메시지`;
```

### 스타일 변경

`src/styles/chatbot.css` 파일을 수정하세요.

주요 CSS 변수:
- `--chatbot-primary`: 메인 컬러
- `--chatbot-bg`: 배경색
- `--chatbot-text`: 텍스트 색상

### API URL 변경

환경 변수 또는 `src/utils/api.ts` 파일:

```typescript
const API_BASE_URL = 'https://your-api.com';
```

## API 엔드포인트

| Endpoint | Method | 설명 |
|----------|--------|------|
| `/api/chat` | POST | 질의응답 |
| `/api/health` | GET | 헬스체크 |

## 문제 해결

### 챗봇이 표시되지 않음

1. 브라우저 콘솔 확인
2. 플러그인이 `docusaurus.config.js`에 추가되었는지 확인
3. 개발 서버 재시작

### API 연결 실패

1. 백엔드 서버가 실행 중인지 확인:
   ```bash
   curl http://localhost:8000/api/health
   ```

2. CORS 설정 확인 (`backend/config/config.yaml`):
   ```yaml
   server:
     cors_origins:
       - "http://localhost:3000"
   ```

### 대화 기록이 사라짐

`localStorage`를 확인하세요. 개인정보 보호 모드에서는 작동하지 않을 수 있습니다.

## 개발

### 타입 체크

```bash
tsc --noEmit
```

### 빌드

Docusaurus 빌드 시 자동으로 포함됩니다:

```bash
npm run build
```

## 라이선스

MIT
