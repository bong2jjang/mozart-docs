# PM_PLAN_LOG

- **테이블 유형**: Output Table
- **컬럼 수**: 12
- **예약어 수**: 9

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PLAN_VER | String |  |  |  |
| 2 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 3 | RES_ID | String |  |  | Resource ID |
| 4 | PM_ID | String |  |  | PM ID |
| 5 | PM_PRIORITY | Int |  |  | 우선순위 |
| 6 | PM_POLICY | String |  |  | PM 정책 |
| 7 | ORG_START_DATETIME | DateTime |  |  | 기준정보에 정의한 PM 시작 시점 |
| 8 | ORG_END_DATETIME | DateTime |  |  | 기준정보에 정의한 PM 종료 시점 |
| 9 | REV_START_DATETIME | DateTime |  |  | 수정된 PM 시작 시점 |
| 10 | REV_END_DATETIME | DateTime |  |  | 수정된 PM 종료 시점 |
| 11 | REVISED_YN | String |  |  | PM 일정이 수정됐는지 여부 |
| 12 | EXECUTED_YN | String |  |  | PM 일정이 적용됐는지 여부 |

## 예약어 (Reserved Words)

### EXECUTED_YN

| 값 | 설명 |
|---|------|
| Y | PM 일정이 적용됨 |
| N | PM 일정이 적용되지 않음 |

### PM_POLICY

| 값 | 설명 |
|---|------|
| Fix_None | PM 일정이 변경되지 않고, 고정적으로 진행 (Lot Split X) |
| Fix_Split | PM 일정이 변경되지 않고, 고정적으로 진행 (Lot Split O) |
| Push | Lot 종료 시점 이후로 PM 일정을 밀어서 진행 |
| Pull | (미구현) PM_POLICY_VALUE 시간만큼 앞당겨서 PM을 진행할 수 있음 |
| Cancel | (미구현) 설비 Lot 작업과 PM 일정이 겹치는 경우, PM 취소 |

### REVISED_YN

| 값 | 설명 |
|---|------|
| Y | PM 일정이 수정됨 |
| N | PM 일정이 수정되지 않음 |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| PM_POLICY | Fix_None, Fix_Split, Push, Pull, Cancel |
| REVISED_YN | Y, N |
| EXECUTED_YN | Y, N |
