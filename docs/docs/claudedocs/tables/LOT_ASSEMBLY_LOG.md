# LOT_ASSEMBLY_LOG

- **테이블 유형**: Output Table
- **컬럼 수**: 27
- **예약어 수**: 2

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PLAN_VER | String |  |  | 결과 버전 정보 |
| 2 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 3 | STAGE_ID | String |  |  | Stage ID |
| 4 | MODULE_ID | String |  |  | 모듈 ID |
| 5 | PHASE_NO | Int |  |  | Phase 번호 |
| 6 | EVENT_DATETIME | DateTime |  |  | 조립 된 시점 |
| 7 | AVAILABLE_DATETIME | DateTime |  |  | 조립 된 Lot의 진행 가능 시점 |
| 8 | FROM_LOT_ID | String |  |  | 조립 전 Lot의 Lot ID |
| 9 | FROM_ITEM_ID | String |  |  | 조립 전 Lot의 Item ID |
| 10 | FROM_ITEM_TYPE | String |  |  | 조립 전 Lot의 Item 타입 |
| 11 | FROM_SITE_ID | String |  |  | 조립 전 Lot의 Site ID |
| 12 | FROM_BUFFER_ID | String |  |  | 조립 전 Lot의 Buffer ID |
| 13 | FROM_LOT_QTY | Double |  |  | 조립 전 Lot의 수량 |
| 14 | FROM_DEMAND_ID | String |  |  | 조립 전 Lot에 맵핑된 Demand ID |
| 15 | FROM_TARGET_DATETIME | DateTime |  |  | 조립 전 Lot의 Target 날짜 |
| 16 | TO_LOT_ID | String |  |  | 조립 후 Lot의 Lot ID |
| 17 | TO_DEMAND_ID | String |  |  | 조립 후 Lot에 맵핑된 Demand ID |
| 18 | TO_TARGET_DATETIME | DateTime |  |  | 조립 후 Lot의 Target 날짜 |
| 19 | TO_ITEM_ID | String |  |  | 조립 후 Lot의 Item ID |
| 20 | TO_ITEM_TYPE | String |  |  | 조립 후 Lot의 Item 타입 |
| 21 | TO_SITE_ID | String |  |  | 조립 후 Lot의 Site ID |
| 22 | TO_LOT_QTY | Double |  |  | 조립 후 Lot의 수량 |
| 23 | FROM_QTY | Double |  |  | 해당 BOM_ID의 FromQty (BOM_DETAIL 테이블) |
| 24 | BOM_ID | String |  |  | 조립 발생한 BOM ID |
| 25 | TO_BUFFER_ID | String |  |  | 해당 BOM_ID의 To Buffer ID (BOM_DETAIL 테이블) |
| 26 | ROUTING_ID | String |  |  | 조립 후 Lot이 존재하는 Routing ID |
| 27 | OPER_ID | String |  |  | 조립 후 Lot의 첫 Operation ID |

## 예약어 (Reserved Words)

### FROM_ITEM_TYPE, TO_ITEM_TYPE

| 값 | 설명 |
|---|------|
| Product | 생산 대상이 되는 반제품 또는 완제품이며, 투입 여부를 옵션으로 설정할 수 있음 (BlockProductSupply) |
| Material | 생산을 위해 구매해서 사용하는 자재를 의미하며, 그렇기에 첫번째 Buffer까지 이어지지 않아도 문제되지 않음. 투입 여부 옵션이 Product와 구분되어 있음 (ApplyInfiniteMaterial) |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| FROM_ITEM_TYPE | Product, Material |
| TO_ITEM_TYPE | Product, Material |
