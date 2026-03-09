# SHORT_REPORT

- **테이블 유형**: Output Table
- **컬럼 수**: 30
- **예약어 수**: 0

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PLAN_VER | String |  |  | 결과 정보 버전 |
| 2 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 3 | STAGE_ID | String |  |  | Short 발생 Stage ID |
| 4 | MODULE_ID | String |  |  | Short 발생 모듈 ID |
| 5 | PHASE_NO | Int |  |  | Short 발생 Phase 번호 |
| 6 | SHORT_SEQ | Int |  |  | Short 발생 순서 |
| 7 | LOT_ID | String |  |  | Short 발생 Lot ID |
| 8 | DEMAND_ID | String |  |  | Short 발생 Demand ID |
| 9 | DEMAND_ITEM_ID | String |  |  | Short 발생 Demand의 Item ID |
| 10 | DUE_MONTH | String |  |  | Short 발생 Demand의 납기월 |
| 11 | DUE_WEEK | String |  |  | Short 발생 Demand의 납기 주차 |
| 12 | DUE_DATE | String |  |  | Short 발생 Demand의 납기일 |
| 13 | MAX_LATENESS_DAY | Int |  |  | Short 발생 Demand의 후행 가능일 |
| 14 | EXTENDED_DUE_DATE | String |  |  | Short 발생 Demand의 납기일에 후행 가능일을 더한 값 |
| 15 | DEMAND_PRIORITY | Double |  |  | Short 발생 Demand의 우선순위 |
| 16 | RETRY_CNT | Int |  |  | Retry 횟수 |
| 17 | DEMAND_QTY | Double |  |  | Short 발생 Demand의 주문 수량 |
| 18 | SHORT_QTY | Double |  |  | Short 수량 (Short 당시 수량) |
| 19 | SHORT_UNIT_QTY | Double |  |  | Short 수량 (Demand Item 기준 환산 수량) |
| 20 | SHORT_DATE | String |  |  | Short 발생일 |
| 21 | REASON_CATEGORY | String |  |  | Short 사유 타입 |
| 22 | REASON_NAME | String |  |  | Short 사유 |
| 23 | REASON_DETAIL | String |  |  | Short 상세 사유 |
| 24 | ITEM_ID | String |  |  | Short 발생 Item ID |
| 25 | BUFFER_ID | String |  |  | Short 발생 Buffer ID |
| 26 | SITE_ID | String |  |  | Short 발생 Site ID |
| 27 | BOM_ID | String |  |  | Short 발생한 BOM ID |
| 28 | ROUTING_ID | String |  |  | Short 발생한 Routing ID |
| 29 | OPER_ID | String |  |  | Short 발생한 Operation ID |
| 30 | RES_ID | String |  |  | Short 발생한 Resource ID |
