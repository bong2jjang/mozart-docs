# RULE_FACTOR_DATA

- **테이블 유형**: Output Table
- **컬럼 수**: 7
- **예약어 수**: 0

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PLAN_VER | String |  |  | 기준 정보 버전 |
| 2 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 3 | RULE_ID | String |  |  | Rule ID |
| 4 | FACTOR_ID | String |  |  | Rule을 구성하는 우선순위 규칙 |
| 5 | FACTOR_SEQ | Int |  |  | (WEIGHTSORTED) 우선순위 규칙 간 우선순위 값 |
| 6 | FACTOR_WEIGHT | Double |  |  | (WEIGHTSUM) 우선순위 규칙 별 가중치 값 |
| 7 | FACTOR_VALUE | String |  |  | 우선순위 규칙 계산 시 사용되는 파라미터 값 문자열 |
