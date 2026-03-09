# BOM_CONTROL

- **테이블 유형**: Input Table
- **컬럼 수**: 5
- **예약어 수**: 4

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 10 | BOM_ID | String | Y | N | BOM ID |
| 20 | CONTROL_ID | String | Y | N | 제어 기준 유형 |
| 30 | CONTROL_TYPE | String | Y | N | 제어 대상 코드 |
| 40 | ACTION_TYPE | String | N | N | 제어 방식 |
| 50 | DESCRIPTION | String | N | Y | 설명 |

## 예약어 (Reserved Words)

### ACTION_TYPE

| 값 | 설명 |
|---|------|
| Fix | CONTROL_TYPE 에 정의한 값은 해당 BOM만 지나갈 수 있습니다. |
| Exclude | CONTROL_TYPE 에 정의한 값은 해당 BOM을 제외하고 지나갈 수 있습니다. |

### CONTROL_ID

| 값 | 설명 |
|---|------|
| DemandID | 수요 코드 |
| DemandItemID | 수요 제품 코드 |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| CONTROL_ID | DemandID, DemandItemID |
| ACTION_TYPE | Fix, Exclude |
