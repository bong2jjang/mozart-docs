# PLAN_CONFIG

- **테이블 유형**: Input Table
- **컬럼 수**: 9
- **예약어 수**: 2

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PROJECT_ID | String | Y | N | 프로젝트 ID |
| 2 | PLAN_VER | String | Y | N | 계획 ID |
| 3 | PLAN_TYPE | String | N | N | 계획 수립 방식 |
| 4 | SCENARIO_ID | String | N | N | 계획 수립 시 사용하는 시나리오 ID |
| 5 | PLAN_PERIOD | Int | N | N | 계획 수립 기간 |
| 6 | PLAN_START_DATE | DateTime | N | N | 계획 수립 시작 시간 |
| 7 | REF_PLAN_VER | String | N | Y | 계획 수립 시 참고하는 계획 ID (MOZART Cloud의 Run Multi Scenario 기능에 사용 됨) |
| 8 | EXECUTION_TYPE | String | N | Y | 실행 타입 |
| 9 | DESCRIPTION | String | N | Y | 부가 설명 |

## 예약어 (Reserved Words)

### PLAN_TYPE

| 값 | 설명 |
|---|------|
| Manual | 수동으로 계획을 수립하는 경우 |
| Auto | 시스템에 정해진 스케줄에 의해 자동으로 수립하는 경우 |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| PLAN_TYPE | Manual, Auto |
