# RES_PLAN

- **테이블 유형**: Output Table
- **컬럼 수**: 56
- **예약어 수**: 17

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PLAN_VER | String |  |  | 결과 정보 버전 |
| 2 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 3 | STAGE_ID | String |  |  | Stage ID |
| 4 | MODULE_ID | String |  |  | 모듈 ID |
| 5 | PHASE_NO | Int |  |  | Phase 번호 |
| 6 | LEVEL_NO | Int |  |  | Level 번호 |
| 7 | ALLOCATION_SEQ | Double |  |  | 할당 시 부여되는 순서 |
| 8 | PLAN_SEQ | Int |  |  | 출력 순서 |
| 9 | DEMAND_ID | String |  |  | MO_ID가 맵핑되는 영업 주문 (Demand) |
| 10 | MO_ID | String |  |  | 제조 주문 (Manufacturing Order) ID |
| 11 | LOT_ID | String |  |  | Lot ID (Split 또는 Assembly 이후, 마지막 Buffer에서 Lot ID) |
| 12 | BOM_ID | String |  |  | BOM ID |
| 13 | ALLOCATION_TYPE | String |  |  | NonWorking/PM/Setup 등의 할당 타입 |
| 14 | DEMAND_ITEM_ID | String |  |  | Demand Item ID |
| 15 | DEMAND_SITE_ID | String |  |  | Demand Site ID |
| 16 | DEMAND_BUFFER_ID | String |  |  | Demand Buffer ID |
| 17 | DUE_DATE | String |  |  | Demand 납기일 |
| 18 | DEMAND_PRIORITY | Double |  |  | Demand의 우선순위 |
| 19 | LOT_GROUP_KEY | String |  |  | Lot Group의 Key (PBO 모듈 타입 미사용) |
| 20 | ITEM_ID | String |  |  | Lot의 Item ID |
| 20 | ORG_ARRIVAL_DATETIME | String |  |  | Buffer 또는 Operation 도착 시간(NoCarry로 변경하기 전 데이터) |
| 21 | ITEM_TYPE | String |  |  | Lot의 Item 타입 |
| 22 | SITE_ID | String |  |  | Lot의 Site ID |
| 23 | BUFFER_ID | String |  |  | Lot의 Buffer ID |
| 24 | ROUTING_ID | String |  |  | Routing ID |
| 25 | OPER_ID | String |  |  | Operation ID |
| 26 | OPER_YIELD | Double |  |  | 수율 |
| 27 | B_CHG_RATIO | Double |  |  | BCumChangeRatio의 약자로, PLAN_QTY * B_CHG_RATIO= PLAN_UNIT_QTY이 될 수 있도록 BOM Path의 수율과 From/To Qty를 고려하여 나온 값 |
| 28 | TOTAL_TAT | Double |  |  | 1) Opearation 타입이 Dummy인 경우,  Total TAT = 공정의 Run TAT와 Wait TAT의 합계 2) Opearation 타입이 Operation인 경우, Total TAT = 0 |
| 29 | PLAN_QTY | Double |  |  | 생산 수량 |
| 30 | PLAN_UNIT_QTY | Double |  |  | PLAN_QTY 값을 최종 Demand 기준 환산한 수량 *PLAN_QTY/BCumChangeRatio로 구해짐 |
| 30.5 | RES_GROUP_ID | String |  |  | Resource Group ID |
| 31 | RES_ID | String |  |  | Resource ID |
| 32 | MAIN_RES_ID | String |  |  | RESOURCE_ID가 Add Resource인 경우,  함께 사용된 (Main) Resource ID를 기록 |
| 33 | ARRIVAL_DATETIME | DateTime |  |  | Buffer 또는 Operation 도착 시간 |
| 34 | START_DATETIME | DateTime |  |  | Buffer 또는 Operation에서의 생산 시작 시간 |
| 35 | END_DATETIME | DateTime |  |  | Buffer 또는 Operation에서의 생산 종료 시간 |
| 36 | RES_END_DATETIME | DateTime |  |  | Resource 가용 시점 - PBF : OPERATION_RESOURCE에 FLOW_TIME 값이 없으면 END_TIME과 동일 - PBO : Capacity 구간의 시작 시점  (예. 일별로 Capacity... |
| 37 | CREATION_TYPE | String |  |  | Lot별 생성 타입 |
| 38 | WIP_TYPE | String |  |  | WIP 타입 (Wip or Inventory) |
| 39 | PLAN_DATE | String |  |  | START_TIME이 포함되는 날짜 |
| 40 | PLAN_WEEK | String |  |  | START_TIME이 포함되는 주차 |
| 41 | PLAN_MONTH | String |  |  | START_TIME이 포함되는 월 |
| 42 | TARGET_DATETIME | DateTime |  |  | MO_ID의 해당 Buffer 또는 Operation에서의 목표 완료 시점 (TARGET_PLAN의 TARGET_DATETIME). |
| 43 | TARGET_DATE | String |  |  | TARGET_DATETIME이 포함되는 날짜 |
| 44 | TARGET_WEEK | String |  |  | TARGET DATE가 포함되는 주차 |
| 45 | TARGET_MONTH | String |  |  | TARGET DATE가 포함되는 월 |
| 46 | LPST_GAP_DAY | Double |  |  | 타겟 날짜와 설비 계획 시작일의 차이.  양수인 경우 납기까지 여유가 있다는 의미이고,  음수인 경우 납기를 넘은 것을 의미 |
| 47 | MAX_LATENESS_DAY | Int |  |  | 후행 생산 허용 일수 |
| 48 | EXTENDED_SO_DUE_DATETIME | DateTime |  |  | 지연가능 납기일 |
| 49 | EXTENDED_TARGET_DATETIME | DateTime |  |  | 지연가능 TARGET DATE |
| 50 | RETRY_CNT | Int |  |  | Retry 횟수 |
| 51 | USED_CAPA | Double |  |  | Quantity 타입 Resource에 대해 차감된 Capacity  (Lot Qty * Usage Per) |
| 52 | USAGE_PER | Double |  |  | Quantity 타입 Resource에 대한 Capacity 차감 비율 |
| 53 | ORG_LOT_ID | String |  |  | Lot ID (현재 Buffer에서의 Lot ID) |
| 54 | UTIL_RATE | Double |  |  | Resource 가동율 (작업 완료 시점 기준) |

## 예약어 (Reserved Words)

### ALLOCATION_TYPE

| 값 | 설명 |
|---|------|
| NonWorking | Calendar 정보에 #OffTime을 설정하거나, Plan Horizon내에 #Capacity 또는 #WorkTime으로 설정되지 않은 구간 |
| PM | PM_PLAN 정보 기반으로 적용된 PM 구간 |
| Setup | SETUP_INFO 정보 기반으로 적용된 Setup 구간 |
| Allocate | 재공을 할당하는 구간 |

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

### ITEM_TYPE

| 값 | 설명 |
|---|------|
| Product | 생산 대상이 되는 반제품 또는 완제품이며, 투입 여부를 옵션으로 설정할 수 있음 (BlockProductSupply) |
| Material | 생산을 위해 구매해서 사용하는 자재를 의미하며, 그렇기에 첫번째 Buffer까지 이어지지 않아도 문제되지 않음. 투입 여부 옵션이 Product와 구분되어 있음 (ApplyInfiniteMaterial) |

### WIP_TYPE

| 값 | 설명 |
|---|------|
| Wip | Operation에 존재하는 WIP입니다. |
| Inventory | Buffer에 존재하는 WIP입니다. |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| ALLOCATION_TYPE | NonWorking, PM, Setup, Allocate |
| ITEM_TYPE | Product, Material |
| CREATION_TYPE | Creation, Normal, Assembly, SplitByBom, SplitByCapacity, Retrying, StageOut, Incoming, Wip |
| WIP_TYPE | Wip, Inventory |
