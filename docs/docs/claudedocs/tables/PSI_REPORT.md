# PSI_REPORT

- **테이블 유형**: Output Table
- **컬럼 수**: 13
- **예약어 수**: 2

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PLAN_VER | String |  |  | 결과 정보 버전 |
| 2 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 3 | STAGE_ID | String |  |  | Stage ID |
| 4 | MODULE_ID | String |  |  | 모듈 ID |
| 5 | ITEM_ID | String |  |  | Item ID |
| 6 | SITE_ID | String |  |  | Site ID |
| 7 | BUFFER_ID | String |  |  | Buffer ID |
| 8 | PLAN_DATE | String |  |  | 집계일 |
| 9 | BOH_QTY | Double |  |  | 집계일 기준 초기 ISB 수량 |
| 10 | IN_QTY | Double |  |  | 집계일 기준 ISB 투입 수량 |
| 11 | OUT_QTY | Double |  |  | 집계일 기준 ISB 생산 수량 |
| 12 | EOH_QTY | Double |  |  | 집계일 기준 ISB 잔여 수량 (BOH_QTY+IN_QTY-OUT_QTY) |
| 13 | ITEM_TYPE | String | Y | N | Item 타입 |

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
