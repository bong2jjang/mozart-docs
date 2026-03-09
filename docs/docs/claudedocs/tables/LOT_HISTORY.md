# LOT_HISTORY

- **테이블 유형**: Output Table
- **컬럼 수**: 20
- **예약어 수**: 23

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PLAN_VER | String |  |  | 결과 버전 정보 |
| 2 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 3 | STAGE_ID | String |  |  | Stage ID |
| 4 | MODULE_ID | String |  |  | 모듈 ID |
| 5 | EVENT_DATETIME | DateTime |  |  | Lot의 Event 발생 시각 |
| 6 | EVENT_TYPE | String |  |  | Lot의 Event 유형 |
| 7 | LOT_ID | String |  |  | Lot 코드 (Split 또는 Assembly 이후, 마지막 Buffer에서 Lot ID) |
| 8 | LOT_QTY | Double |  |  | Lot 수량 |
| 9 | ITEM_ID | String |  |  | Lot의 이벤트 발생 시점의 Item ID |
| 10 | SITE_ID | String |  |  | Site ID |
| 11 | BUFFER_ID | String |  |  | Buffer ID |
| 12 | BOM_ID | String |  |  | BOM ID |
| 13 | ROUTING_ID | String |  |  | Routing ID |
| 14 | OPER_ID | String |  |  | Operation ID |
| 15 | ADD_INFO | String |  |  | 각 Event 관련 부가 정보 기록 |
| 16 | WIP_ID | String |  |  | Wip(or Inventory) ID |
| 17 | CREATION_TYPE | String |  |  | Lot 생성 타입 |
| 18 | ORG_LOT_ID | String |  |  | Lot ID(현재 Buffer에서의 Lot ID) |
| 19 | DEMAND_ID | String |  |  | Demand ID |
| 20 | MO_ID | String |  |  | 제조 주문 (Manufacturing Order) ID |

## 예약어 (Reserved Words)

### ADD_INFO

| 값 | 설명 |
|---|------|
| (생성된 Lot ID) | EVENT_TYPE = Creation  →  생성된 Lot ID 기록 |
| (Org Lot ID) | EVENT_TYPE = Release  →  Org Lot ID 기록 |
| (Split Lot 정보) | EVENT_TYPE = SplitByBom  →  Split Lot 정보 기록 |
| (Split Lot 정보) | EVENT_TYPE = SplitByCapacity  →  Split Lot 정보 기록 |
| (Assembly 기여한 Lot 정보) | EVENT_TYPE = Assembly  →  Assembly 기여한 Lot 정보 기록 |
| (Null) | EVENT_TYPE = Disposal  →  기록하지 않음 |
| (Short Category) | EVENT_TYPE = Short  →  Short Category 기록 |

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

### EVENT_TYPE

| 값 | 설명 |
|---|------|
| Creation | WIP or InTarget 기반 Lot 생성 |
| Release | WIP or InTarget 기반 Lot 투입 |
| SplitByBom | BOM에 의한 Split 발생 |
| SplitByCapacity | Capacity에 의한 Split 발생 |
| Assembly | 조립 |
| Disposal | 소멸 |
| Short | Short 발생 |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| EVENT_TYPE | Creation, Release, SplitByBom, SplitByCapacity, Assembly, Disposal, Short |
| ADD_INFO | (생성된 Lot ID), (Org Lot ID), (Split Lot 정보), (Split Lot 정보), (Assembly 기여한 Lot 정보), (Null), (Short Category) |
| CREATION_TYPE | Creation, Normal, Assembly, SplitByBom, SplitByCapacity, Retrying, StageOut, Incoming, Wip |
