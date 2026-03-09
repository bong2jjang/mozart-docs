# RULE_MASTER

- **테이블 유형**: Input Table
- **컬럼 수**: 4
- **예약어 수**: 2

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | RULE_ID | String | Y | N | Rule ID |
| 2 | RULE_POINT | String | Y | N | Rule이 적용되는 Rule Point |
| 3 | SORT_TYPE | String | N | N | 우선순위 정렬 방식 |
| 4 | DESCRIPTION | String | N | Y | Rule 설명 |

## 예약어 (Reserved Words)

### SORT_TYPE

| 값 | 설명 |
|---|------|
| WeightSorted | Factor 기반의 우선순위 정렬 진행. 만약, 우선순위가 동일한 경우, 다음 Factor로 정렬 진행. ( FACTOR_SEQ 순서대로 Factor 반영) |
| WeightSum | Factor 별로 점수 평가를 진행한 후, 점수와 FACTOR_WEIGHT를 고려한 가중합(Weight Sum)으로 최종 점수를 도출하고, 이를 기반으로 정렬 진행 |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| SORT_TYPE | WeightSorted, WeightSum |
