# OUT_SHIPMENT_PLAN

- **테이블 유형**: Output Table
- **컬럼 수**: 17
- **예약어 수**: 0

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PLAN_VER | String |  |  | 결과 정보 버전 |
| 2 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 3 | STAGE_ID | String |  |  | Stage ID |
| 4 | MODULE_ID | String |  |  | 모듈 ID |
| 5 | ITEM_ID | String |  |  | Item ID |
| 6 | SITE_ID | String |  |  | Site ID |
| 7 | DEMAND_ID | String |  |  | Demand ID |
| 8 | DUE_DATE | String |  |  | 납기일자 (기준정보 CFG/ODV_DEMAND 테이블) |
| 9 | SHIPMENT_DATE | String |  |  | 해당 Demand의 출하 계획이 수립된 날짜 |
| 10 | DEMAND_PRIORITY | Int |  |  | Demand의 우선순위 (기준정보 CFG/ODV_DEMAND 테이블) |
| 11 | DEMAND_QTY | Double |  |  | Demand의 주문 수량 (기준정보 CFG/ODV_DEMAND 테이블) |
| 12 | PROD_QTY | Double |  |  | 해당 Demand의 출하 계획의 수량 |
| 13 | MAX_LATENESS_DAY | Int |  |  |  |
| 14 | MAX_EARLINESS_DAY | Int |  |  |  |
| 15 | DUE_WEEK | String |  |  |  |
| 16 | ON_TIME_QTY | Double |  |  |  |
| 17 | LATE_QTY | Double |  |  |  |
