# SCENARIO_RULESET_CONFIG

- **테이블 유형**: Input Table
- **컬럼 수**: 6
- **예약어 수**: 2

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | SCENARIO_ID | String | Y | N | 실행 시나리오 ID |
| 2 | MODULE_ID | String | Y | N | 모듈 ID |
| 3 | PHASE_NO | Int | Y | N | Phase 번호 |
| 4 | TARGET_CATEGORY | String | Y | N | Ruleset 적용 대상 타입 |
| 5 | TARGET_ID | String | Y | N | Ruleset 적용 대상 |
| 6 | RULESET_ID | String | N | N | Ruleset ID |

## 예약어 (Reserved Words)

### TARGET_CATEGORY

| 값 | 설명 |
|---|------|
| Buffer | Ruleset 적용 대상이 Buffer인 경우 |
| ResourceGroup | Ruleset 적용 대상이 Resource Group인 경우 |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| TARGET_CATEGORY | Buffer, ResourceGroup |
