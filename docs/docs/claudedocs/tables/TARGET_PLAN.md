# TARGET_PLAN

- **테이블 유형**: Output Table
- **컬럼 수**: 47
- **예약어 수**: 7

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PLAN_VER | String |  |  | 결과 정보 버전 |
| 2 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 3 | STAGE_ID | String |  |  | Stage ID |
| 4 | MODULE_ID | String |  |  | 모듈 ID |
| 5 | PHASE_NO | Int |  |  | Phase 번호 |
| 6 | TARGET_SEQ | Int |  |  | TARGET_PLAN 기록 순서 |
| 7 | DEMAND_ID | String |  |  | Demand ID |
| 8 | MO_ID | String |  |  | 제조 주문 (Manufacturing Order) ID |
| 9 | ITEM_ID | String |  |  | Target의 Item ID |
| 10 | ITEM_TYPE | String |  |  | Target의 Item 타입 |
| 11 | SITE_ID | String |  |  | Site ID |
| 12 | BUFFER_ID | String |  |  | Buffer ID |
| 13 | ROUTING_ID | String |  |  | Routing ID (위치가 Buffer인 경우는 "-"를 기록) |
| 14 | OPER_ID | String |  |  | Operation ID (위치가 Buffer인 경우는 "-"를 기록) |
| 15 | OPER_YIELD | Double |  |  | 수율 (default : 1.0) |
| 16 | BOM_ID | String |  |  | BOM ID |
| 17 | IN_OUT | String |  |  | Buffer 또는 Operation의 In/Out 위치 구분 |
| 18 | CATEGORY | String |  |  | Buffer 또는 Operation |
| 19 | TARGET_QTY | Double |  |  | In/Out에 대한 목표 수량 |
| 20 | TARGET_UNIT_QTY | Double |  |  | TARGET_QTY의 최종 Demand 기준 환산 수량 |
| 21 | TARGET_DATETIME | DateTime |  |  | In/Out에 대한 목표 시점 |
| 22 | TARGET_DATE | String |  |  | TARGET DATETIME이 소속된 날짜 |
| 23 | TARGET_WEEK | String |  |  | TARGET DATE가 소속된 주차 |
| 24 | TARGET_MONTH | String |  |  | TARGET WEEK가 소속된 월 |
| 25 | MO_ITEM_ID | String |  |  | Manufacturing Order 의 Item ID |
| 26 | MO_ITEM_TYPE | String |  |  | Manufacturing Order 의 Item 타입 |
| 27 | MO_QTY | Double |  |  | Manufacturing Order 수량 |
| 28 | MO_DUE_DATETIME | DateTime |  |  | Manufacturing Order의 납기 |
| 29 | MO_DUE_WEEK | String |  |  | Manufacturing Order의 주 |
| 30 | MO_DUE_MONTH | String |  |  | Manufacturing Order의 월 |
| 31 | DEMAND_ITEM_ID | String |  |  | Demand의 Item ID |
| 32 | DEMAND_ITEM_TYPE | String |  |  | Demand의 Item 타입 |
| 33 | DEMAND_QTY | Double |  |  | Demand 수량 |
| 34 | DUE_DATE | String |  |  | Demand의 납기 |
| 35 | DEMAND_WEEK | String |  |  | Demand의 주 |
| 36 | DEMAND_MONTH | String |  |  | Demand의 월 |
| 37 | TAT | Double |  |  | TAT |
| 38 | CUM_TAT | Double |  |  | 누적 TAT |
| 39 | PATH_ID | String |  |  | Target 전개 경로 |
| 40 | PEG_PART_KEY | String |  |  | PegPart의 Key |
| 41 | DEMAND_MAX_LATENESS_DAY | Int |  |  | Demand의 후행 생산 허용 일수 |
| 42 | DEMAND_ITEM_GRADE | Double |  |  | Demand의 Item 등급 |
| 43 | DEMAND_PRIORITY | Double |  |  | Demand의 우선 순위 |
| 44 | DEMAND_MIN_CUM_TAT | Double |  |  | Demand의 투입부터 생산까지의 걸리는 최소 시간 |
| 45 | SUM_DEMAND_QTY | Double |  |  | PegTarget의 수량 합(필요 판단 필요) |
| 46 | ORG_TARGET_DATETIME | DateTime |  |  | Due 변경 로직(ShippingDate, RefPlan)을 반영하기 전의 In/Out에 대한 목표 시점 |
| 47 | FW_TARGET_DATETIME | DateTime |  |  | PBO에서 F/W 시점에  In/Out에 대한 진행 시점 |

## 예약어 (Reserved Words)

### CATEGORY

| 값 | 설명 |
|---|------|
| Buffer | Buffer 기준의 Target 정보 |
| Operation | Operation 기준의 Target 정보 |

### IN_OUT

| 값 | 설명 |
|---|------|
| In | Buffer의 도착 지점 또는 Operation의 (설비) In 지점 |
| Out | Buffer의 Out 지점 또는 Operation의 (설비) Out 지점 |
| Arrive | Buffer 또는 Operation의 도착 지점 |

### ITEM_TYPE, MO_ITEM_TYPE, DEMAND_ITEM_TYPE

| 값 | 설명 |
|---|------|
| Product | 생산 대상이 되는 반제품 또는 완제품이며, 투입 여부를 옵션으로 설정할 수 있음 (BlockProductSupply) |
| Material | 생산을 위해 구매해서 사용하는 자재를 의미하며, 그렇기에 첫번째 Buffer까지 이어지지 않아도 문제되지 않음. 투입 여부 옵션이 Product와 구분되어 있음 (ApplyInfiniteMaterial) |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| ITEM_TYPE | Product, Material |
| IN_OUT | Out, In |
| CATEGORY | Operation, Buffer |
| MO_ITEM_TYPE | Product, Material |
| DEMAND_ITEM_TYPE | Product, Material |
