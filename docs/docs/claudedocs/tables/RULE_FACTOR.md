# RULE_FACTOR

- **테이블 유형**: Input Table
- **컬럼 수**: 5
- **예약어 수**: 2

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | RULE_ID | String | Y | N | Rule ID |
| 2 | FACTOR_ID | String | Y | N | Rule을 구성하는 우선순위 규칙 |
| 3 | FACTOR_SEQ | Int | N | Y | (WeightSorted) 우선순위 Factor 간 우선순위 값 |
| 4 | FACTOR_WEIGHT | Double | N | Y | (WeightSum) 우선순위 Factor 별 가중치 값 |
| 5 | FACTOR_VALUE | String | N | Y | Factor 계산 시 사용되는 파라미터 정보 (Default : FACTOR_MASTER의 FACTOR_VALUE 정보) |

## 예약어 (Reserved Words)

### FACTOR_SEQ

| 값 | 설명 |
|---|------|
| (Int ≥ 0) | Factor의 우선순위를 양의 정수로 입력합니다. |

### FACTOR_WEIGHT

| 값 | 설명 |
|---|------|
| (float ≥ 0) | Factor의 가중치를 0 이상의 실수로 입력합니다. |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| FACTOR_SEQ | (Int ≥ 0) |
| FACTOR_WEIGHT | (float ≥ 0) |
