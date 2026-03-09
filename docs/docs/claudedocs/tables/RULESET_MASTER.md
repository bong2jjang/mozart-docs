# RULESET_MASTER

- **테이블 유형**: Input Table
- **컬럼 수**: 4
- **예약어 수**: 3

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | RULESET_ID | String | Y | N | Ruleset ID |
| 2 | MODULE_TYPE | String | N | N | Ruleset 적용 모듈 타입 |
| 3 | MAX_LEVEL | Int | N | N | Ruleset 내 Level 수 |
| 4 | DESCRIPTION | String | N | Y | 부가 설명 |

## 예약어 (Reserved Words)

### MODULE_TYPE

| 값 | 설명 |
|---|------|
| PBO | Plan By Order |
| PBB | Plan By Backward |
| PBF | Plan By Forward |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| MODULE_TYPE | PBO, PBB, PBF |
