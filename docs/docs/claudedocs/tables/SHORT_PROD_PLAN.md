# SHORT_PROD_PLAN

- **테이블 유형**: Output Table
- **컬럼 수**: 59
- **예약어 수**: 15

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PLAN_VER | String |  |  | 결과 버전 정보 |
| 2 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 3 | STAGE_ID | String |  |  | Stage ID |
| 4 | MODULE_ID | String |  |  | 모듈 ID |
| 5 | PHASE_NO | Int |  |  | Phase 번호 |
| 6 | LEVEL_NO | Int |  |  | Level 번호 |
| 7 | PLAN_SEQ | Int |  |  | 생산 순서 |
| 8 | DEMAND_ID | String |  |  | Demand ID |
| 9 | MO_ID | String |  |  | 제조 주문 (Manufacturing Order) ID |
| 10 | LOT_ID | String |  |  | Lot ID (Split 또는 Assembly 이후, 마지막 Buffer에서 Lot ID) |
| 11 | BOM_ID | String |  |  | BOM ID |
| 12 | ALLOCATION_TYPE | String |  |  | 할당 방식 |
| 13 | DEMAND_ITEM_ID | String |  |  | Demand Item ID |
| 14 | DUE_DATE | String |  |  | 납기 일자 |
| 15 | DEMAND_PRIORITY | Double |  |  | Demand의 우선순위 |
| 16 | LOT_GROUP_KEY | String |  |  | Lot Group의 Key (PBO 사용 X) |
| 17 | FROM_ITEM_ID | String |  |  | From Item ID |
| 18 | FROM_SITE_ID | String |  |  | From Site ID |
| 19 | FROM_BUFFER_ID | String |  |  | From Buffer ID |
| 20 | TO_ITEM_ID | String |  |  | To Item ID |
| 21 | TO_SITE_ID | String |  |  | To Site ID |
| 22 | TO_BUFFER_ID | String |  |  | To Buffer ID |
| 23 | ROUTING_ID | String |  |  | Routing ID |
| 24 | OPER_ID | String |  |  | Operation ID(Lot의 위치가 Buffer인 경우, Null) |
| 25 | OPER_YIELD | Double |  |  | 수율 |
| 26 | PLAN_QTY | Double |  |  | 생산 수량 |
| 27 | PLAN_UNIT_QTY | Double |  |  | PLAN_QTY 값의 최종 Demand 기준 환산 수량 |
| 28 | RES_ID | String |  |  | Resource ID |
| 29 | ARRIVAL_DATETIME | DateTime |  |  | Buffer 또는 Operation 도착 시간 |
| 30 | START_DATETIME | DateTime |  |  | Buffer 또는 Operation에서의 생산 시작 시간 |
| 31 | END_DATETIME | DateTime |  |  | Buffer 또는 Operation에서의 생산 종료 시간 |
| 32 | RES_END_DATETIME | DateTime |  |  | Resource에 Lot을 투입할 수 있는 시간  (인라인 설비의 경우 END TIME과 본 컬럼 값이 달라짐) |
| 33 | CREATION_TYPE | String |  |  | Lot별 생성 타입을 구분 |
| 34 | WIP_TYPE | String |  |  | WIP 타입 (Wip or Inventory) |
| 35 | PLAN_DATE | String |  |  | START_TIME 과 동일 |
| 36 | PLAN_WEEK | String |  |  | START_TIME이 포함되는 주차 |
| 37 | PLAN_MONTH | String |  |  | START_TIME이 포함되는 월 |
| 38 | TARGET_DATETIME | DateTime |  |  | MO_ID의 해당 Buffer 또는 Operation에서의 목표 완료 시점 (TARGET_PLAN의 TARGET_DATETIME). |
| 39 | TARGET_DATE | String |  |  | TARGET_DATETIME이 포함되는 날짜 |
| 40 | TARGET_WEEK | String |  |  | TARGET DATE가 포함되는 주차 |
| 41 | TARGET_MONTH | String |  |  | TARGET DATE가 포함되는 월 |
| 42 | LPST_GAP_DAY | Double |  |  | TARGET_DATETIME과 END_DATETIME의 차이. 양수인 경우 납기까지 여유가 있다는 의미이고, 음수인 경우 납기를 넘은 것을 의미 |
| 43 | MAX_LATENESS_DAY | Double |  |  | 후행 생산 허용 일수 |
| 44 | EXTENDED_DUE_DATETIME | DateTime |  |  | 지연가능 납기 |
| 45 | EXTENDED_TARGET_DATETIME | DateTime |  |  | 지연가능 TARGET DATE |
| 46 | MAX_RES_LATE_DATETIME | DateTime |  |  | 미구현 |
| 47 | ADD_RES | String |  |  | 미구현 |
| 48 | ADD_RES_CAPA | Double |  |  | 미구현 |
| 49 | ADD_RES_ALLOCATION_QTY | Double |  |  | 미구현 |
| 50 | ADD_RES_CUM_ALLOCATION_QTY | Double |  |  | 미구현 |
| 51 | ADD_RES_REMAIN_QTY | Double |  |  | 미구현 |
| 52 | RES_START_DATETIME | DateTime |  |  | 미구현 |
| 53 | B_CHG_RATIO | Double |  |  | 현재 Target의 BCumChangeRatio 값 |
| 54 | TOTAL_TAT | Double |  |  | END_TIME과 START_TIME의 차이(단위: 초) |
| 55 | SUM_TAT | Double |  |  | 미구현 |
| 56 | SUM_YIELD | Double |  |  | 미구현 |
| 57 | SPLIT_RATIO | Double |  |  | 미구현 |
| 58 | RETRY_CNT | Int |  |  | Retry 횟수 |
| 59 | ORG_LOT_ID | String |  |  | Lot ID(현재 Buffer에서의 Lot ID) |

## 예약어 (Reserved Words)

### ALLOCATION_TYPE

| 값 | 설명 |
|---|------|
| NonWorking | Calendar 정보에 #OffTime을 설정하거나, Plan Horizon 내에 #Capacity 또는 #WorkTime으로 설정되지 않은 구간 |
| PM | PM 정보 기반으로 적용된 PM 구간 |
| Setup | SETUP 정보 기반으로 적용된 Setup 구간 |
| (Null) | NonWorking, PM, Setup 이외의 구간 |

### CREATION_TYPE

| 값 | 설명 |
|---|------|
| Creation | Lot 최초 생성 |
| Normal | InTarget, MBS Lot |
| Assembly | 조립된 Lot |
| SplitByBom | BOM에 의해 Split 된 Lot |
| SplitByCapacity | Capa에 의해 Split 된 Lot |
| Retrying | Retry하는 Lot |
| StageOut | Stage Out으로 생성된 WIP |
| Incoming | Stage Out으로 생성된 Lot |
| Wip | WIP으로 생성된 Lot |

### WIP_TYPE

| 값 | 설명 |
|---|------|
| Wip | Operation에 존재하는 경우입니다. |
| Inventory | Buffer에 존재하는 경우입니다. |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| ALLOCATION_TYPE | NonWorking, PM, Setup, (Null) |
| CREATION_TYPE | Creation, Normal, Assembly, SplitByBom, SplitByCapacity, Retrying, StageOut, Incoming, Wip |
| WIP_TYPE | Wip, Inventory |
