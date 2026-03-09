# INTARGET_PLAN

- **테이블 유형**: Output Table
- **컬럼 수**: 24
- **예약어 수**: 2

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PLAN_VER | String |  |  | 결과 정보 버전 |
| 2 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 3 | STAGE_ID | String |  |  | Stage ID |
| 4 | MODULE_ID | String |  |  | 모듈 ID |
| 5 | PHASE_NO | Int |  |  | Phase 번호 |
| 6 | DEMAND_ID | String |  |  | Demand ID |
| 7 | DEMAND_PRIORITY | Int |  |  | Demand 우선순위 |
| 8 | MO_ID | String |  |  | 제조 주문 (Manufacturing Order) ID |
| 9 | ITEM_ID | String |  |  | 투입 Item ID |
| 10 | ITEM_TYPE | String |  |  | 투입 Item 타입 |
| 11 | SITE_ID | String |  |  | 투입 Site ID |
| 12 | BUFFER_ID | String |  |  | 투입 Buffer ID |
| 13 | TARGET_QTY | Double |  |  | 투입 필요 수량 |
| 14 | TARGET_UNIT_QTY | Double |  |  | TARGET_QTY의 최종 Demand 기준 환산 수량 |
| 15 | TARGET_DATETIME | DateTime |  |  | 투입 필요 날짜 |
| 16 | TARGET_DATE | String |  |  | 투입 필요 날짜 |
| 17 | TARGET_WEEK | String |  |  | 투입 필요 주차 |
| 18 | TARGET_MONTH | String |  |  | 투입 필요 월 |
| 19 | MO_ITEM_ID | String |  |  | Manufacturing Order의 Item ID |
| 20 | MO_DUE_DATETIME | DateTime |  |  | Manufacturing Order의 납기일자 |
| 21 | MO_QTY | Double |  |  | Manufacturing Order의 주문 수량 |
| 22 | DUE_DATETIME | DateTime |  |  | Demand의 납기일 |
| 23 | DEMAND_ITEM_ID | String |  |  | Demand의 Item ID |
| 24 | DEMAND_QTY | Double |  |  | Demand 수량 |

## 예약어 (Reserved Words)

### ITEM_TYPE

| 값 | 설명 |
|---|------|
| Product | 생산 대상이 되는 반제품 또는 완제품이며, 투입 여부를 옵션으로 설정할 수 있음 (BlockProductSupply) |
| Material | 생산을 위해 구매해서 사용하는 자재를 의미하며, 그렇기에 첫번째 Buffer까지 이어지지 않아도 문제되지 않음. 투입 여부 옵션이 Product와 구분되어 있음 (ApplyInfiniteMaterial) |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| ITEM_TYPE | Product, Material |
