# SCENARIO_OPTION_CONFIG

- **테이블 유형**: Input Table
- **컬럼 수**: 7
- **예약어 수**: 1

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | SCENARIO_ID | String | Y | N | 시나리오 ID |
| 2 | MODULE_ID | String | Y | N | 모듈 ID |
| 3 | PHASE_NO | Int | Y | N | Phase 번호 |
| 4 | OPTION_ID | String | Y | N | 옵션 ID |
| 5 | OPTION_VALUE | String | N | Y | 옵션 값 |
| 6 | CALENDAR_ID | String | N | Y | Calendar ID |
| 7 | DESCRIPTION | String | N | Y | 부가 설명 |

## 예약어 (Reserved Words)

### MODULE_ID

| 값 | 설명 |
|---|------|
| Global | 모든 모듈에 대해 적용되는 Option에 대한 MODULE_ID 값 |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| MODULE_ID | Global |
