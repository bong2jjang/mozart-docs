# STAGE_OUT_PLAN

- **테이블 유형**: Output Table
- **컬럼 수**: 39
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
| 7 | PLAN_SEQ | Int |  |  | 생산 순서 |
| 8 | LOT_ID | String |  |  | Lot ID |
| 9 | ITEM_ID | String |  |  | Item ID |
| 10 | SITE_ID | String |  |  | Site ID |
| 11 | BUFFER_ID | String |  |  | Buffer ID |
| 12 | OPER_YIELD | Double |  |  | 수율 |
| 13 | PLAN_QTY | Double |  |  | 생산 수량 |
| 14 | PLAN_UNIT_QTY | Double |  |  | PLAN_QTY를 최종 고객 주문 상의 제품 기준으로 환산한 수량 |
| 15 | ARRIVAL_DATETIME | DateTime |  |  | Buffer 또는 Operation 도착 시간 |
| 16 | START_DATETIME | DateTime |  |  | Buffer 또는 Operation에서의 생산 시작 시간 |
| 17 | END_DATETIME | DateTime |  |  | Buffer 또는 Operation에서의 생산 종료 시간 |
| 18 | CREATION_TYPE | String |  |  | Lot별 생성 타입 |
| 19 | WIP_TYPE | String |  |  | WIP 타입 (Wip or Inventory) |
| 20 | PLAN_DATE | String |  |  | START_TIME이 포함되는 일자 |
| 21 | PLAN_WEEK | String |  |  | START_TIME이 포함되는 주차 |
| 22 | PLAN_MONTH | String |  |  | START_TIME이 포함되는 월 |
| 23 | TARGET_DATETIME | DateTime |  |  | MO_ID의 해당 Buffer 또는 Operation에서의 목표 완료 시점 (TARGET_PLAN의 TARGET_DATETIME) |
| 24 | TARGET_DATE | String |  |  | TARGET_DATETIME이 포함되는 날짜 |
| 25 | TARGET_WEEK | String |  |  | TARGET DATE가 포함되는 주차 |
| 26 | TARGET_MONTH | String |  |  | TARGET DATE가 포함되는 월 |
| 27 | LPST_GAP_DAY | Double |  |  | TARGET_DATETIME과 END_DATETIME의 차이. 양수인 경우 납기까지 여유가 있다는 의미이고, 음수인 경우 납기를 넘은 것을 의미 |
| 28 | DEMAND_ID | String |  |  | Demand ID |
| 29 | DEMAND_ITEM_ID | String |  |  | Demand의 Item ID |
| 30 | DEMAND_SITE_ID | String |  |  | Demand의 Site ID |
| 31 | DEMAND_BUFFER_ID | String |  |  | Demand의 Buffer ID |
| 32 | DUE_DATE | String |  |  | Demand의 납기일 |
| 33 | DUE_MONTH | String |  |  | DUE DATE가 포함되는 월 |
| 34 | DUE_WEEK | String |  |  | DUE DATE가 포함되는 주차 |
| 35 | DEMAND_PRIORITY | Double |  |  | Demand의 우선순위 |
| 36 | MAX_LATENESS_DAY | Int |  |  | Demand의 후행 생산 허용 일수 |
| 37 | EXTENDED_DUE_DATETIME | DateTime |  |  | 지연가능 납기 |
| 38 | EXTENDED_TARGET_DATETIME | DateTime |  |  | 현시점 지연가능 납기 |
| 39 | RETRY_CNT | Int |  |  | Retry 횟수 |

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
| Wip | Operation에 존재하는 WIP입니다. |
| Inventory | Buffer에 존재하는 WIP입니다. |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| CREATION_TYPE | Creation, Normal, Assembly, SplitByBom, SplitByCapacity, Retrying, StageOut, Incoming, Wip |
| WIP_TYPE | Wip, Inventory |
