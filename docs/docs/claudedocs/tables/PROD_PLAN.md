# PROD_PLAN

- **테이블 유형**: Output Table
- **컬럼 수**: 55
- **예약어 수**: 11

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PLAN_VER | String |  |  | 결과 정보 버전 |
| 2 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 3 | STAGE_ID | String |  |  | Stage ID |
| 4 | MODULE_ID | String |  |  | 모듈 ID |
| 5 | PHASE_NO | Int |  |  | Phase 번호 |
| 6 | LEVEL_NO | Int |  |  | Level 번호 |
| 7 | ALLOCATION_SEQ | Int |  |  | 할당 순서 |
| 8 | PLAN_SEQ | Int |  |  | 출력 순서 |
| 9 | DEMAND_ID | String |  |  | Demand ID |
| 10 | MO_ID | String |  |  | 제조 주문 (Manufacturing Order) ID |
| 11 | LOT_ID | String |  |  | Lot ID (Split 또는 Assembly 이후, 마지막 Buffer에서 Lot ID) |
| 12 | BOM_ID | String |  |  | BOM ID |
| 13 | DEMAND_ITEM_ID | String |  |  | Demand의 Item ID |
| 14 | DEMAND_SITE_ID | String |  |  | Demand의 Site ID |
| 15 | DEMAND_BUFFER_ID | String |  |  | Demand의 Buffer ID |
| 16 | DUE_DATE | String |  |  | Demand의 납기일자 |
| 17 | DEMAND_PRIORITY | Double |  |  | Demand의 우선순위 |
| 18 | LOT_GROUP_KEY | String |  |  | Lot의 Lot Group의 Key(PBO 사용 X) |
| 19 | ITEM_ID | String |  |  | Item ID |
| 20 | ITEM_TYPE | String |  |  | Item 타입 |
| 21 | SITE_ID | String |  |  | Site ID |
| 22 | BUFFER_ID | String |  |  | From Buffer ID |
| 23 | ROUTING_ID | String |  |  | Routing ID |
| 24 | OPER_ID | String |  |  | Operation ID |
| 25 | OPER_YIELD | Double |  |  | 수율 |
| 26 | CHANGE_RATIO | Double |  |  | BCumChangeRatio의 약자로, PLAN_QTY * B_CHG_RATIO = PLAN_UNIT_QTY이 될 수 있도록  BOM path의 수율과 From/To Qty를 고려하여 나온 값 |
| 27 | TOTAL_TAT | Double |  |  | END_TIME과 START_TIME 값의 차이 (단위: 초) |
| 28 | IN_PLAN_QTY | Double |  |  | Buffer 또는 Operation 투입 수량 |
| 29 | IN_PLAN_UNIT_QTY | Double |  |  | IN_PLAN_QTY의 최종 Demand 기준 환산 수량 |
| 30 | OUT_PLAN_QTY | Double |  |  | Buffer 또는 Operation 생산 완료 수량 |
| 31 | OUT_PLAN_UNIT_QTY | Double |  |  | OUT_PLAN_QTY의 최종 Demand 기준 환산 수량 |
| 32 | RES_ID | String |  |  | Resource ID |
| 33 | ARRIVAL_DATETIME | DateTime |  |  | Buffer 또는 Operation 도착 시간 |
| 34 | START_DATETIME | DateTime |  |  | Buffer 또는 Operation에서의 생산 시작 시간 |
| 35 | END_DATETIME | DateTime |  |  | Buffer 또는 Operation에서의 생산 종료 시간 |
| 36 | RES_END_DATETIME | DateTime |  |  | Resource에서의 생산 종료 시간 |
| 37 | CREATION_TYPE | String |  |  | Lot별 생성 타입 |
| 38 | WIP_TYPE | String |  |  | WIP 타입 (Wip or Inventory) |
| 39 | PLAN_DATE | String |  |  | START_TIME이 포함되는 일자 |
| 40 | PLAN_WEEK | String |  |  | START_TIME이 포함되는 주차 |
| 41 | PLAN_MONTH | String |  |  | START_TIME이 포함되는 월 |
| 42 | TARGET_DATETIME | DateTime |  |  | MO_ID의 해당 Buffer 또는 Operation에서의 목표 완료 시점 (TARGET_PLAN의 TARGET_DATETIME) |
| 43 | TARGET_DATE | String |  |  | TARGET_DATETIME이 포함되는 날짜 |
| 44 | TARGET_WEEK | String |  |  | TARGET_DATETIME가 포함되는 주차 |
| 45 | TARGET_MONTH | String |  |  | TARGET_DATETIME가 포함되는 월 |
| 46 | LPST_GAP_DAY | Double |  |  | TARGET_DATETIME과 END_DATETIME의 차이.  양수인 경우 납기까지 여유가 있다는 의미이고,  음수인 경우 납기를 넘은 것을 의미 |
| 47 | MAX_LATENESS_DAY | Double |  |  | 후행 생산 허용 일수 |
| 48 | EXTENDED_DUE_DATETIME | DateTime |  |  | 지연가능 납기 |
| 49 | EXTENDED_TARGET_DATETIME | DateTime |  |  | 지연가능 TARGET DATE |
| 50 | RETRY_COUNT | Double |  |  | Retry 횟수 |
| 51 | USED_CAPA | Double |  |  | Quantity 타입 Resource에 대해 차감된 Capacity  (Lot Qty * Usage Per) |
| 52 | USAGE_PER | Double |  |  | Quantity 타입 Resource에 대한 Capacity 차감 비율 |
| 53 | ORG_LOT_ID | String |  |  | Lot ID (현재 Buffer에서의 Lot 코드) |
| 54 | REF_PLAN_VER | String |  |  | 참조 계획 코드 |
| 55 | UTIL_RATE | Double |  |  | Resource의 가동율 (0~1) |

## 예약어 (Reserved Words)

### CREATION_TYPE

| 값 | 설명 |
|---|------|
| Creation | Lot 최초 생성 |
| Normal | InTarget, MBS Lot |
| Assembly | 조립된 Lot |
| SplitByBom | BOM에 의해 Split된 Lot |
| SplitByCapacity | Capa에 의해 Split된 Lot |
| Retrying | 재시도하는 Lot |
| StageOut | Stage Out으로부터 생성된 Wip |
| Incoming | Stage Out되면서 생성된 Lot |
| Wip | Wip or Inventory로 생성된 Lot |

### WIP_TYPE

| 값 | 설명 |
|---|------|
| Wip | Operation 상에 존재하는 경우입니다. |
| Inventory | buffer 상에 존재하는 경우입니다. |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| CREATION_TYPE | Creation, Normal, Assembly, SplitByCapacity, Retrying, Incoming, SplitByBom, StageOut, Wip |
| WIP_TYPE | Wip, Inventory |
