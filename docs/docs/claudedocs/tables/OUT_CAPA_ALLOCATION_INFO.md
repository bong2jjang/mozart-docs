# OUT_CAPA_ALLOCATION_INFO

- **테이블 유형**: Output Table
- **컬럼 수**: 23
- **예약어 수**: 7

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PLAN_VER | String |  |  | 기준 정보 버전 |
| 2 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 3 | STAGE_ID | String |  |  | Stage ID |
| 4 | MODULE_ID | String |  |  | 모듈 ID |
| 5 | PHASE_NO | Int |  |  | 모듈 구동 단계 |
| 5.5 | RES_GROUP_ID | String |  |  | Resource Group ID |
| 6 | TARGET_ID | String |  |  | Resource ID |
| 7 | TARGET_TYPE | String |  |  | Resource 타입 (Resource/AddResource/SetupResource) |
| 8 | BUCKET_DATE | String |  |  | Resource에 Capacity가 정의된 날짜 |
| 9 | CAPA_TYPE | String |  |  | Resource Capacity 타입 |
| 10 | CAPA_MODE | String |  |  | 무한 Capacity 사용 여부 (Finite / Infinite) |
| 11 | TOTAL_CAPA | Double |  |  | 전체 Capacity |
| 12 | OFF_TIME_CAPA | Double |  |  | 비가동 시간으로 설정된 Capacity |
| 13 | ON_TIME_CAPA | Double |  |  | Bucket Date에서 Resource(Bucket)의 사용 가능한 Capacity Time Capa인 경우, Total Capacity - Off Time  Quantity Capa인 경우, Total Ca... |
| 14 | ALLOCATION_CAPA | Double |  |  | Resource가 Bucket Date 동안 사용한 Capacity |
| 15 | PM_CAPA | Double |  |  | PM에 소요된 Capacity |
| 16 | SETUP_CAPA | Double |  |  | Setup에 소요된 Capacity |
| 17 | REMAIN_CAPA | Double |  |  | 잔여 Capacity (TOTAL_CAPA - ALLOCATION_CAPA) |
| 18 | ALLOCATION_RATIO | Double |  |  | 할당 비율 (= Allocation Capa / On Time Capa) |
| 19 | CALENDAR_ID | String |  |  | Capacity 정의 Calendar ID |
| 20 | PATTERN_ID | String |  |  | Bucket Date가 속한 기간의 PATTERN ID |
| 21 | EFF_START_DATE | String |  |  | PATTERN ID의 시작 시점 |
| 22 | EFF_END_DATE | String |  |  | PATTERN ID의 종료 시점 |

## 예약어 (Reserved Words)

### CAPA_MODE

| 값 | 설명 |
|---|------|
| Finite | Calendar로 정의된 Capacity 만 사용하도록 설정 |
| Infinite | Calendar로 정의된 Capacity 이상으로 사용하도록 설정 |

### CAPA_TYPE

| 값 | 설명 |
|---|------|
| Time | Resource Capacity를 시간 기준으로 정의 |
| Quantity | Resource Capacity를 수량 기준으로 정의 |
| Count | Resource Capacity를 횟수 기준으로 정의 |

### TARGET_TYPE

| 값 | 설명 |
|---|------|
| Resource | Capacity 정의 대상이 Resource 인 경우 사용 |
| Constraint | Capacity 정의 대상이 Constraint 인 경우 사용 |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| TARGET_TYPE | Resource, Constraint |
| CAPA_TYPE | Time, Quantity, Count |
| CAPA_MODE | Finite, Infinite |
