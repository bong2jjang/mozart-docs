# ELAPSED_TIME_LOG

- **테이블 유형**: Output Table
- **컬럼 수**: 8
- **예약어 수**: 0

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PLAN_VER | String |  |  | 결과 버전 정보 |
| 2 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 3 | STAGE_ID | String |  |  | Stage ID |
| 4 | MODULE_KEY | String |  |  | 모듈 ID |
| 5 | PHASE_NO | Int |  |  | 모듈 Phase |
| 6 | RULE_POINT | String |  |  | 사용자 정의 로직 실행 지점 |
| 7 | CALL_CNT | Double |  |  | 호출 횟수 |
| 8 | ELAPSED_SEC | Double |  |  | 소요 시간 |
