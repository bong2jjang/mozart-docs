# RULESET_AGENT

- **테이블 유형**: Input Table
- **컬럼 수**: 4
- **예약어 수**: 2

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | RULESET_ID | String | Y | N | Ruleset ID |
| 2 | AGENT_ID | String | Y | N | Agent ID |
| 3 | AGENT_NAME | String | N | N | Agent 명 |
| 4 | PARAM_VALUE | String | N | Y | Agent 입력값 |

## 예약어 (Reserved Words)

### AGENT_ID

| 값 | 설명 |
|---|------|
| EvenProductionAgent | 평준화 Agent |
| EvenProductionAgent | 평준화 Agent |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| AGENT_ID | EvenProductionAgent, EvenProductionAgent |
