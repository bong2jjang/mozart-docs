# AGENT_LOG_VALUE

- **테이블 유형**: Output Table
- **컬럼 수**: 3
- **예약어 수**: 0

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | AGENT_ID | String | Y | N | Agent ID |
| 2 | VALUES | String | N | Y | Agent 계산 값 |
| 3 | TABLE_ID | String | N | Y | Agent 기록 테이블 |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| AGENT_ID | EvenProductionAgent |
