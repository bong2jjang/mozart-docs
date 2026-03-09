# REF_PROD_PLAN

- **테이블 유형**: Input Table
- **컬럼 수**: 13
- **예약어 수**: 0

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | REF_PLAN_VER | String | Y | N | 참조 계획 ID |
| 2 | STAGE_ID | String | N | N | Stage ID |
| 3 | DEMAND_ID | String | N | Y | Demand ID |
| 4 | ITEM_ID | String | N | Y | Item ID |
| 5 | SITE_ID | String | N | Y | Site ID |
| 6 | BUFFER_ID | String | N | Y | Buffer ID |
| 7 | DUE_DATE | DateTime | N | Y | 납기 일자 |
| 8 | DEMAND_QTY | Double | N | Y | Demand 수량 |
| 9 | BOM_ID | String | N | Y | BOM ID |
| 10 | ROUTING_ID | String | N | Y | Routing ID |
| 11 | OPER_ID | String | N | Y | Operation ID |
| 12 | RES_ID | String | N | Y | Resource ID |
| 13 | REF_TYPE | String | N | Y | 참조 타입 (사용자 정의) |
