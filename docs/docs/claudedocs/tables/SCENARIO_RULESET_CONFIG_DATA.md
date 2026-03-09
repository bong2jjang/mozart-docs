# SCENARIO_RULESET_CONFIG_DATA

- **테이블 유형**: Output Table
- **컬럼 수**: 6
- **예약어 수**: 3

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PLAN_VER | String |  |  | 기준 정보 버전 |
| 2 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 3 | MODULE_ID | String |  |  | RuleSet 이 사용되는 모듈 |
| 4 | TARGET_CATEGORY | String |  |  | 사용자 정의 로직 실행 지점 |
| 5 | TARGET_ID | String |  |  | 실행 대상 |
| 6 | RULESET_ID | String |  |  | 적용 RuleSet |

## 예약어 (Reserved Words)

### TARGET_CATEGORY

| 값 | 설명 |
|---|------|
| Buffer | Rule Set이 Buffer에 적용된 경우 |
| Operation | Rule Set이 Operation에 적용된 경우 |
| ResourceGroup | Rule Set이 Resource Group에 적용된 경우 |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| TARGET_CATEGORY | Buffer, Operation, ResourceGroup |
