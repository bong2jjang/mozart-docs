# OUT_PEG_INFO

- **테이블 유형**: Output Table
- **컬럼 수**: 51
- **예약어 수**: 9

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PLAN_VER | String |  |  | 결과 정보 버전 |
| 2 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 3 | STAGE_ID | String |  |  | Stage ID |
| 4 | SITE_ID | String |  |  | Site ID |
| 5 | MODULE_ID | String |  |  | 모듈 ID |
| 6 | PHASE_NO | Int |  |  | Phase 번호 |
| 7 | LEVEL_NO | Int |  |  | Level 번호 |
| 8 | DEMAND_ID | String |  |  | Demand ID |
| 9 | MO_ID | String |  |  | 제조 주문(Manufacturing Order) ID |
| 10 | WIP_ID | String |  |  | WIP ID |
| 11 | WIP_QTY | Double |  |  | WIP 수량 |
| 12 | PEG_QTY | Double |  |  | Pegging된 Lot 수량 |
| 13 | CREATION_TYPE | String |  |  | Lot별 생성 타입 |
| 14 | WIP_TYPE | String |  |  | WIP 타입 (Wip or Inventory) |
| 15 | ITEM_ID | String |  |  | WIP의 Item ID |
| 16 | ITEM_TYPE | String |  |  | WIP의 Item 타입 |
| 17 | ITEM_GRADE | String |  |  | WIP의 Item 등급 |
| 18 | WIP_STATUS | String |  |  | WIP 상태 |
| 19 | BUFFER_ID | String |  |  | WIP이 Pegging된 Buffer |
| 20 | BUFFER_SEQ | Int |  |  | WIP이 Pegging된 Buffer의 순서 |
| 21 | ROUTING_ID | String |  |  | Operation에서 Pegging된 경우, Operation이 속한 Routing ID |
| 22 | OPER_ID | String |  |  | Operation에서 Pegging된 경우 해당 Operation ID |
| 23 | TARGET_ITEM_ID | String |  |  | WIP이 Pegging된 Target의 Item ID |
| 24 | TARGET_ITEM_TYPE | String |  |  | WIP이 Pegging된 Target의 Item 타입 |
| 25 | TARGET_SITE_ID | String |  |  | Target의 Site ID |
| 26 | TARGET_DATETIME | DateTime |  |  | In/Out에 대한 목표 시점 |
| 27 | TARGET_DATE | String |  |  | TARGET DATETIME이 소속된 날짜 |
| 28 | TARGET_WEEK | String |  |  | TARGET DATE가 소속된 주차 |
| 29 | TARGET_MONTH | String |  |  | TARGET DATE가 소속된 월 |
| 30 | TARGET_QTY | Double |  |  | Target의 수량 |
| 31 | TARGET_SUM_QTY | Double |  |  | Target Group 내 모든 Target의 수량 합 (PBO는 사용 X) |
| 32 | AVAILABLE_DATETIME | DateTime |  |  | WIP의 유효 시작 시간 |
| 33 | MO_QTY | Double |  |  | Manufacturing Order 수량 |
| 34 | MO_ITEM_ID | String |  |  | Manufacturing Order의 Item ID |
| 35 | MO_ITEM_TYPE | String |  |  | Manufacturing Order의 Item 타입 |
| 36 | MO_DUE_DATETIME | DateTime |  |  | Manufacturing Order 납기 |
| 37 | MO_WEEK | String |  |  | Manufacturing Order 납기의 주차  (옵션을 통해 기록 방식 결정) |
| 38 | MO_MONTH | String |  |  | Manufacturing Order 납기의 월 |
| 39 | DEMAND_QTY | Double |  |  | Demand 수량 |
| 40 | DEMAND_ITEM_ID | String |  |  | Demand의 Item ID |
| 41 | DEMAND_ITEM_TYPE | String |  |  | Demand의 Item 타입 |
| 42 | DEMAND_SITE_ID | String |  |  | Demand의 Site ID |
| 43 | DUE_DATETIME | DateTime |  |  | Demand 납기 일자 |
| 44 | DEMAND_MAX_LATE_DAY | String |  |  | Demand 후행 생산 허용 일수 |
| 45 | DUE_WEEK | String |  |  | Demand 납기의 주차 |
| 46 | DUE_MONTH | String |  |  | Demand 납기의 월 |
| 47 | PEG_SEQ | Int |  |  | Pegging 순서 |
| 48 | PEGGING_GROUP_KEY | String |  |  | Pegging되는 시점의 Pegging Group Key (PBO는 사용 X) |
| 49 | TARGET_GROUP_KEY | String |  |  | Pegging되는 Target의 Target Group Key (PBO는 사용 X) |
| 50 | PEGGING_KEY | String |  |  | Pegging되는 시점에 맵핑되어 있던 Kit ID |
| 51 | REF_PLAN_VER | String |  |  | 참조 계획 ID |

## 예약어 (Reserved Words)

### CREATION_TYPE

| 값 | 설명 |
|---|------|
| SplitByBom | BOM에 의해 Split된 Lot |
| StageOut | Stage Out으로부터 생성된 Wip |
| Wip | Wip or Inventory로 생성된 Lot |

### ITEM_TYPE, MO_ITEM_TYPE, DEMAND_ITEM_TYPE

| 값 | 설명 |
|---|------|
| Product | 생산 대상이 되는 반제품 또는 완제품이며, 투입 여부를 옵션으로 설정할 수 있음 (BlockProductSupply) |
| Material | 생산을 위해 구매해서 사용하는 자재를 의미하며, 그렇기에 첫번째 Buffer까지 이어지지 않아도 문제되지 않음. 투입 여부 옵션이 Product와 구분되어 있음 (ApplyInfiniteMaterial) |

### WIP_STATUS

| 값 | 설명 |
|---|------|
| Wait | 가공 대기 중 |
| Run | 설비에서 가공 중 |

### WIP_TYPE

| 값 | 설명 |
|---|------|
| Wip | Operation에 존재하는 경우입니다. |
| Inventory | Buffer에 존재하는 경우입니다. |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| CREATION_TYPE | SplitByBom, StageOut, Wip |
| WIP_TYPE | Wip, Inventory |
| ITEM_TYPE | Product, Material |
| WIP_STATUS | Wait, Run |
| MO_ITEM_TYPE | Product, Material |
| DEMAND_ITEM_TYPE | Product, Material |
