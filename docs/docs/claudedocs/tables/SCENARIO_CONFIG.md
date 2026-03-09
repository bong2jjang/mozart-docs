# SCENARIO_CONFIG

- **테이블 유형**: Input Table
- **컬럼 수**: 8
- **예약어 수**: 3

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | SCENARIO_ID | String | Y | N | 시나리오 ID |
| 2 | STAGE_ID | String | N | N | Stage ID |
| 3 | MODULE_ID | String | Y | N | 모듈 ID |
| 4 | REF_MODULE_ID | String | N | Y | 참조할 모듈 ID |
| 5 | MODULE_TYPE | String | N | N | 모듈 타입 |
| 6 | MAX_PHASE | Int | N | N | 모듈의 Phase 개수 |
| 7 | MODULE_SEQ | Int | N | N | 모듈 실행 순서 |
| 8 | DESCRIPTION | String | N | Y | 부가 설명 |

## 예약어 (Reserved Words)

### MODULE_TYPE

| 값 | 설명 |
|---|------|
| PBB | Plan By Backward |
| PBF | Plan By Forward |
| PBO | Plan By Order |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| MODULE_TYPE | PBB, PBF, PBO |
